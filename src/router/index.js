import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "MainView",
    component: () => import("../views/MainView.vue"),
  },
  {
    path: "/domains",
    name: "DomainView",
    component: () => import("../views/domains/DomainView.vue"),
  },
  {
    path: "/domains/:domainName/:domainId",
    name: "DomainDetailView",
    component: () => import("../views/domains/DomainDetailView.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
