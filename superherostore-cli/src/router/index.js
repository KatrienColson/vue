import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Winkelwagen from "@/views/Winkelwagen.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/winkelwagen",
        name: "Winkelwagen",
        component: Winkelwagen,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;