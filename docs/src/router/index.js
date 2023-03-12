import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import MethodsPage from "@/views/MethodsPage.vue";
import TypesPage from "@/views/TypesPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: MainPage },
    { path: "/types", component: TypesPage },
    { path: "/methods", component: MethodsPage }
  ]
});

export default router;
