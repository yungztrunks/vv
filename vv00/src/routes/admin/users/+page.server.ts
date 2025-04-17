import { getUsers, isAdmin } from '$lib/pocketbase';

export async function load() {
    try {
        const users = await getUsers();
        return { users };
    }
    catch (error) {
        console.error('error fetchin users', error);
        return { users: [] };
    }
}