import { getFolders } from "$lib/pocketbase";

export async function load() {
    try{
        const folders = await getFolders();
        return { folders };        
    } catch (error) {
        console.error('could not fetch folders', error);
        return { folders: []};
    }
}