import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/Home.vue";
import ErrorPage from "@/views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "HomePage" },
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "*",
    name: "ErrorPage",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
