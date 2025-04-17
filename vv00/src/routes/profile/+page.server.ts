import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export const load: PageServerLoad = async ({ cookies }) => {
    const token = cookies.get('pb_auth');
    if (!token) {
        throw redirect(302, '/login');
    }
    pb.authStore.loadFromCookie(`pb_auth=${token}`);
    if (!pb.authStore.isValid) {
        throw redirect(302, '/login');
    }
    return {};
};