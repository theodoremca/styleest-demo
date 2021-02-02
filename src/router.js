import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
