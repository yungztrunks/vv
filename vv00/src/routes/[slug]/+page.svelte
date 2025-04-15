<script lang="ts">
    export let data;
    const { folder, posts } = data;
</script>

<h1>{folder.name}</h1>
<h3>{folder.description}</h3>

{#if posts.length > 0}
    <ul>
        {#each posts as post}
            <li>
                <a href="/{folder.slug}/{post.slug}">{post.title}</a>
            </li>
        {/each}
    </ul>
{:else}
    <p>i haven't written about {folder.name} yet</p>
{/if}