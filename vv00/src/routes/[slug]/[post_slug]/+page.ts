import { error } from '@sveltejs/kit';
import { pb, getSinglePost, getCommentsOfPost } from '$lib/pocketbase';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  try {
    const { slug, post_slug } = params;

    const postRecords = await pb.collection('posts').getList(1, 1, {
      filter: `slug = "${post_slug}"`,
    });
    
    if (postRecords.items.length === 0) {
      throw error(404, 'Post not found');
    }
    
    const post_result = postRecords.items[0];
    
    const post = await getSinglePost(post_result.id);
    const comments = await getCommentsOfPost(post_result.id);
    
    return {
      post,
      comments
    };
  } catch (err) {
    console.error('Error loading post:', err);
    throw error(500, 'An error occurred while loading the post');
  }
};