<script lang="ts">
    export let data;
    const { folders } = data;
    
</script>

<h2>folders</h2>
{#if folders && folders.length > 0}
    <table>
        <thead>
            <tr>
                <th>Folder Name</th>
                <th>Slug</th>
                <th>Created</th>
                <th>Updated</th>
            </tr>
        </thead>
        <tbody>
            {#each folders as folder}
                <tr>
                    <td>{folder.name}</td>
                    <td>{folder.slug}</td>
                    <td>{folder.created}</td>
                    <td>{folder.updated}</td>
                </tr>
            {/each}
        </tbody>
    </table>
{:else}
    <p>No folders found.</p>
{/if}