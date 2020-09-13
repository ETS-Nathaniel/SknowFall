import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Dashboard from "../components/Dashboard.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to === '/') {
    next({ name: 'Login' })
  }
  else next()
})

export default router;
