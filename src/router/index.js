import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ErrorPage from "@/views/ErrorPage.vue";
import PersonPage from "@/views/PersonPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "HomePage" },
  },
  {
    path: "/person/:id",
    name: "PersonPage",
    component: PersonPage,
    props: true,
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
