import PocketBase from 'pocketbase';

export const pb = new PocketBase('http://127.0.0.1:8090');

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

export async function getCommentsOfPost(postId: string) {
    return await pb.collection('comments').getFullList({
        filter: `post = "${postId}"`,
        sort: '-created',
    });
}