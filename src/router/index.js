import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import Authentiation from "../components/AuthLayout.vue";
import Dogdetails from "../views/DogDetails.vue";
import Login from "../views/login.vue";
import Intro from "../views/introview.vue";
import Post from "../views/post.vue";
import Signup from "../views/signup.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
        meta: { auth: true },
      },
      {
        path: "/dog-details/:name?",
        name: "dogDetails",
        component: Dogdetails,
        meta: { auth: true },
      },

      // tokenised page
      {
        path: "/post",
        name: "post",
        component: Post,
        meta: { auth: true },
      },
    ],
  },
  {
    path: "/intro",
    component: Authentiation,
    meta: { auth: false },
    children: [
      // auth
      {
        path: "/login",
        name: "login",
        component: Login,
        meta: { auth: false },
      },
      {
        path: "/signup",
        name: "signup",
        component: Signup,
        meta: { auth: false },
      },
      {
        path: "/intro",
        name: "intro",
        component: Intro,
        meta: { auth: false },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if ("auth" in to.meta && to.meta.auth && !store.getters.isAuthenticated) {
    next("/intro");
  } else if (
    "auth" in to.meta &&
    !to.meta.auth &&
    store.getters.isAuthenticated
  ) {
    next("/");
  } else {
    next();
  }
});
// router.beforeEach((to, from, next) => {
//   if ("auth" in to.meta && to.meta.auth && !store.getters.isAuthenticated) {
//     next("/login");
//   } else if (
//     "auth" in to.meta &&
//     !to.meta.auth &&
//     store.getters.isAuthenticated
//   ) {
//     next("/");
//   }
// });
export default router;
