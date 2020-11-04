import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Pon from "../views/Pon.vue";
import Swiper from "../views/Swiper.vue";
import Application from "../views/Application.vue";
import Customized from "../views/Customized.vue";
import FireTest from "../views/FireTest.vue";
import Examples from "../views/Examples.vue";
import Certificate from "../views/Certificate.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/pon",
    name: "Pon",
    component: Pon
  },
  {
    path: "/swiper",
    name: "Swiper",
    component: Swiper
  },
  {
    path: "/application/:seats",
    name: "Application",
    component: Application
  },
  {
    path: "/customize",
    name: "Customized",
    component: Customized
  },
  {
    path: "/test",
    name: "FireTest",
    component: FireTest
  },
  {
    path: "/case",
    name: "Examples",
    component: Examples
  },
  {
    path: "/certificate",
    name: "Certificate",
    component: Certificate
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
