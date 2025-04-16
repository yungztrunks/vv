<script lang="ts">
    import { currentUser, isAdmin } from '$lib/pocketbase';
    
</script>

<div class="admin-panel">
    <header>
        <h1>Admin Dashboard</h1>
        {#if $currentUser}
            <p>✅ You are logged in as admin: {$currentUser.username}</p>
        {/if}
    </header>

    <div class="admin-sections">
        <section class="admin-section">
            <h2>📝 Post Management</h2>
            <p>Future feature: Manage all blog posts</p>
        </section>
        
        <section class="admin-section">
            <h2>🧑‍🎓 Contributor Post Review</h2>
            <p>Future feature: Review and approve posts from contributors</p>
        </section>

        <section class="admin-section">
            <h2>🗂️ Folder Management</h2>
            <p>Future feature: Manage content folders</p>
        </section>

        <section class="admin-section">
            <h2>🧑‍🔧 User Management</h2>
            <p>Future feature: Manage user accounts</p>
        </section>
    </div>
</div>