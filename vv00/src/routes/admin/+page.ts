// import { redirect } from "@sveltejs/kit";
// import { pb, isLoggedIn, isAdmin } from "$lib/pocketbase";

// export const load = async () => {
//     if (!isLoggedIn()) {
//         alert("login");
//         throw redirect(303, "/");
//     }
    
//     if (!isAdmin()) {
//         throw redirect(303, "/profile");
//     }
    
//     return {};
// };