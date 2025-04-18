import PocketBase from 'pocketbase';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const pb = new PocketBase('http://127.0.0.1:8090');
export const currentUser = writable(pb.authStore.record);

pb.authStore.onChange(() => {
	currentUser.set(pb.authStore.record);
});

export function isLoggedIn() {
    return pb.authStore.isValid;
}

export function logout() {
    pb.authStore.clear();
}

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

export async function getUsers() {
    return await pb.collection('users').getFullList({
        sort: 'username',
    });
}

export async function getPostsByUser(userId: string) {
    return await pb.collection('posts').getFullList({
        filter: `author = "${userId}"`,
        sort: '-created',
    });
}

export async function getAllPosts() {
    return await pb.collection('posts').getFullList({
        sort: '-created',
        expand: 'author,folder',
    });
}