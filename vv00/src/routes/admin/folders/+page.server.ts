import { getFolders } from '$lib/pocketbase';

export async function load() {
    try {
        const folders = await getFolders();
        return { folders };
    }
    catch (error) {
        console.error('error fetching folders', error);
        return { folders: [] };
    }
}