import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{ path: "/", exact: true, redirect: "/react-app" }];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
