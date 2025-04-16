<script lang="ts">
    export let data;
    const { folders } = data;
</script>

<!-- for testing -->
<a href="/admin">admin</a>
<a href="/login">login</a>
<a href="/profile">profile</a>
<a href="/editor">editor</a>

<br>
<br>
<br>

{#if folders.length === 0}
    <p>i am empty.</p>
{:else}
    {#each folders as folder}
        <div>
            <a href={`/${folder.slug}`}>{folder.name}</a>
        </div>
    {/each}
{/if}