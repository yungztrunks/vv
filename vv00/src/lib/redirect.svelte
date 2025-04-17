<script lang="ts">
    import { redirect } from "@sveltejs/kit";
    import { goto } from "$app/navigation";

    export function RedirectToProfile() {
        // throw redirect(303, "/profile");
        goto("/profile");
    }

    export function RedirectToLogin() {
        // throw redirect(303, "/login");
        goto("/login");
    }

    export function RedirectToMain() {
        // throw redirect(303, "/");
        goto("/");
    }
</script>