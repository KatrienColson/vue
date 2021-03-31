import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Overzicht from "@/views/Overzicht.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/overzicht",
        name: "Overzicht",
        component: Overzicht,
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