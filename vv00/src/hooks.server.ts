import { redirect, type Handle } from "@sveltejs/kit";
import { pb } from "$lib/pocketbase";

export const handle: Handle = async ({ event, resolve }) => {
    if (
        event.url.pathname === "/login" ||
        event.url.pathname === "/favicon.png"
    ) {
        return await resolve(event);
    }

    const token = event.cookies.get("pb_auth");
    if (token) {
        pb.authStore.loadFromCookie(token);
    }
    if (event.url.pathname.startsWith("/admin")) {
        if (!pb.authStore.isValid) {
            throw redirect(
                303,
                "/login?redirect=" + encodeURIComponent(event.url.pathname)
            );
        }

        const user = pb.authStore.model;

        const isAdmin =
            user &&
            (user.role === "admin" ||
                user.isAdmin === true ||
                user.expand?.role?.name === "admin");

        if (!isAdmin) {
            throw redirect(303, "/profile?error=access_denied");
        }
    }

    console.log(
        `[Server Hook] Path: ${event.url.pathname}, Auth valid: ${pb.authStore.isValid}`
    );

    const response = await resolve(event);

    if (pb.authStore.isValid) {
        response.headers.set("set-cookie", pb.authStore.exportToCookie());
    }

    return response;
};
