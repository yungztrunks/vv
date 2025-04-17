import { redirect, type Handle } from "@sveltejs/kit";
import { pb } from "$lib/pocketbase";

export const handle: Handle = async ({ event, resolve }) => {
    const token = event.cookies.get("pb_auth");
    if (token) {
        pb.authStore.loadFromCookie(token);
    }

    if (event.url.pathname === "/login" && pb.authStore.isValid) {
        throw redirect(303, "/profile");
    }

    if (event.url.pathname === "/profile" && !pb.authStore.isValid) {
        throw redirect(303, "/login");
    }

    if (event.url.pathname.startsWith("/admin")) {
        if (!pb.authStore.isValid) {
            throw redirect(
                303,
                "/login?redirect=" + encodeURIComponent(event.url.pathname)
            );
        }
        const user = pb.authStore.record;

        if (user && user.role != 'admin') {
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
