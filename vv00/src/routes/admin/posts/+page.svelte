<script lang="ts">
    export let data;
    const { posts } = data;
    
    // Format date function
    function formatDate(dateString: string) {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleString();
    }
</script>

<h2>posts</h2>

<div class="posts-container">
    {#if posts && posts.length > 0}
        <table>
            <thead>
                <tr>
                    <th>Post Title</th>
                    <th>Slug</th>
                    <th>Author</th>
                    <th>Status</th>
                    <th>Folder</th>
                    <th>Created</th>
                    <th>Updated</th>
                </tr>
            </thead>
            <tbody>
                {#each posts as post}
                    <tr>
                        <td>{post.title}</td>
                        <td>{post.slug}</td>
                        <td>{post.expand?.author?.username}</td>
                        <td>{post.status || 'draft'}</td>
                        <td>{post.expand?.folder?.name}</td>
                        <td>{formatDate(post.created)}</td>
                        <td>{formatDate(post.updated)}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <p>No posts found.</p>
    {/if}
</div>