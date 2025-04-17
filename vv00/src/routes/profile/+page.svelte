<script lang="ts">
    import {pb, currentUser, logout} from '$lib/pocketbase';
    import {goto} from '$app/navigation';

    let user = currentUser;

    async function signout() {
        pb.authStore.clear();
        document.cookie = "pb_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = "pb_base_model=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        goto('/');
    }
</script>

<h1>Profile Page</h1>

{#if $user}
    <p>logged in as {$user.username}</p>
    <button on:click={signout}>Sign Out</button>
{:else}
    <p>not logged in</p>
{/if}