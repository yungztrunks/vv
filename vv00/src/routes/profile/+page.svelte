<script lang="ts">
    import {pb, currentUser, logout} from '$lib/pocketbase';
    import {goto} from '$app/navigation';

    let user = currentUser;

    async function signout() {
        await logout();
    }
</script>

<h1>Profile Page</h1>

<p>Signed in as {$user?.username}</p>
<button on:click={signout}>Sign out</button>