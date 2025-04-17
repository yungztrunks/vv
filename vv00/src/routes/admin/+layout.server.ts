import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';

export const load: LayoutServerLoad = async ({ request }) => {
    const cookieHeader = request.headers.get('cookie') || '';
    pb.authStore.loadFromCookie(cookieHeader);

    if (!pb.authStore.isValid || pb.authStore.record?.role !== 'admin') {
        throw redirect(302, '/');
    }
    return {};
};