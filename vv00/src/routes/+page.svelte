<script lang="ts">
    export let data;
    const { folders } = data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

{#if folders.length === 0}
    <p>i am empty.</p>
{:else}
    {#each folders as folder}
        <div>
            <a href={`/${folder.slug}`}>{folder.name}</a>
        </div>
    {/each}
{/if}