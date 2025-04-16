import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const pb = new PocketBase('http://127.0.0.1:8090');
export const currentUser = writable(pb.authStore.record);

pb.authStore.onChange(() => {
	if (browser) {
		currentUser.set(pb.authStore.model);
	}
});

export function isAdmin() {
	return pb.authStore.record?.role === 'admin';
}

export async function getFolders() {
    return pb.collection('folders').getFullList({
        sort: '-created',
    });
}

export async function getSingleFolder(folderId: string) {
    return await pb.collection('folders').getOne(folderId);
}

export async function getPostsInFolder(folderId: string) {
    return await pb.collection('posts').getFullList({
            filter: `folder = "${folderId}"`,
            sort: '-created',
        });
}

export async function getSinglePost(postId: string) {
    return await pb.collection('posts').getOne(postId);
}

export async function getCommentsOfPost(postId: string) {
    return await pb.collection('comments').getFullList({
        filter: `post = "${postId}"`,
        sort: '-created',
    });
}