import { error } from '@sveltejs/kit';
import { pb, getPostsInFolder } from "$lib/pocketbase";
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    /*
    * this function gets the slug parameter from url
    * fetches the database for the folder with that slug
    * i haven't stumbled upon another way to retrieve the folder id
    * for the needed function parameter calls
    */
    try {
        const { slug } = params;
        
        const folder_fetch = await pb.collection('folders').getList(1, 1, {
            filter: `slug = "${slug}"`,
        });
        
        if (folder_fetch.items.length === 0) {
            throw error(404, 'Folder not found');
        }
        
        const folder = folder_fetch.items[0];
        
        const posts = await getPostsInFolder(folder.id);
        
        return { 
            folder,
            posts
        };
        
    } catch (err) {
        console.error('Error loading folder:', err);
        throw error(500, 'An error occurred while loading the folder');
    }
}