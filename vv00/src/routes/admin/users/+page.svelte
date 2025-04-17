<script lang="ts">
    export let data;
    const { users } = data;
</script>

<h2>users</h2>

<div class="users-container">
    {#if users}
        <table>
            <thead>
                <tr>
                    <th>username</th>
                    <th>e-mail</th>
                    <th>role</th>
                </tr>
            </thead>
            <tbody>
                {#each users as user}
                    <tr>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {:else}
        <p>no users</p>
    {/if}
</div>