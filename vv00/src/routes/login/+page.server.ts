import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import {pb} from '$lib/pocketbase';

export const load: PageServerLoad = async ({ request }) => {
    const cookieHeader = request.headers.get('cookie') || '';
    pb.authStore.loadFromCookie(cookieHeader);

    if (pb.authStore.isValid) {
        throw redirect(302, '/profile');
    }
    return {};
};