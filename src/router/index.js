import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import TourView from "@/views/TourView.vue";
import ToursView from "@/views/ToursView.vue";
import UserTour from "@/views/UserTour.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/tours",
    name: "Tours",
    component: ToursView,
  },
  {
    path: "/tour/:id",
    name: "Tour",
    component: TourView,
    props: true,
  },
  {
    path: "/user-tour",
    name: "UserTour",
    component: UserTour,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
