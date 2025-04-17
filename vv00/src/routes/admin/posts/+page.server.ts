import { getAllPosts } from '$lib/pocketbase';

export async function load() {
    try {
        const posts = await getAllPosts();
        return { posts };
    }
    catch (error) {
        console.error('error fetching posts', error);
        return { posts: [] };
    }
}