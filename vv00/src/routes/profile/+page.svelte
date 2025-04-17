<script lang="ts">
    import {pb, currentUser, logout} from '$lib/pocketbase';
    import {goto} from '$app/navigation';

    let user = currentUser;

    async function signout() {
        await logout();
        goto('/');
    }
</script>

<h1>Profile Page</h1>

{#if $user}
    <p>logged in as {$user.username}</p>
{:else}
    <p>not logged in</p>
{/if}