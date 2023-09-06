import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import Dogdetails from '../views/DogDetails.vue'
import Login from '../views/login.vue'
import Post from '../views/post.vue'
import Signup from '../views/signup.vue'

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/dog-details/:name?",
        name: "dogDetails",
        component: Dogdetails,
      },
      // auth
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/signup",
        name: "signup",
        component: Signup,
      },
      // tokenised page
      {
        path: "/post",
        name: "post",
        component: Post,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
