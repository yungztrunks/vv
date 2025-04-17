<script lang="ts">
    import { goto } from "$app/navigation";
    import { pb, currentUser } from "$lib/pocketbase";
    
    let username: string;
    let email: string;
    let password: string;
    
    async function login() {
        try{
            await pb.collection("users").authWithPassword(username, password);
            goto("/profile");
        }
        catch(error) {
            console.error("login error", error);
            alert("failed to login");
        }
    }
    
    async function signup() {
        try {
            const data = {
                username,
                email,
                password,
                passwordConfirm: password,
                role: "pending",
            };
            const created_user = await pb.collection("users").create(data);
            await login();
        } catch (error) {
            console.error("signup error", error);
            alert("failed to signup");
        }
    }

    function signout() {
        pb.authStore.clear();
    }
</script>

<p>Please log in.</p>
<form on:submit|preventDefault>
    <input placeholder="username" bind:value={username} type="text" required />
    <input placeholder="password" bind:value={password} type="password" required />
    <button on:click={login}>Login</button>
</form>

<p>or sign up</p>
<form on:submit|preventDefault>
    <input placeholder="username" bind:value={username} type="text" required />
    <input placeholder="email" bind:value={email} type="email" required />
    <input placeholder="password" bind:value={password} type="password" required />
    <button on:click={signup}>Sign Up</button>
</form>
