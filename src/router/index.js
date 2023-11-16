// Composables
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: () => import("@/layouts/Default.vue"),
      redirect: () => {
        return { name: "Home" };
      },
      children: [
        {
          path: "/",
          name: "Home",
          component: () => import("@/views/home/Home.vue"),
        },
        {
          path: "/movies",
          name: "Movies",
          component: () => import("@/views/movies/Movies.vue"),
        },
        {
          path: "/movies/:details",
          name: "MoviesDetails",
          component: () => import("@/views/movies/MoviesDetails.vue"),
        },
        {
          path: "/series",
          name: "Series",
          component: () => import("@/views/series/Series.vue"),
        },
        {
          path: "/series/:details",
          name: "SeriesDetails",
          component: () => import("@/views/series/SeriesDetails.vue"),
        },
        {
          path: "/persons",
          name: "Persons",
          component: () => import("@/views/persons/Persons.vue"),
        },
        {
          path: "/persons/:id",
          name: "PersonsDetails",
          component: () => import("@/views/persons/PersonsDetails.vue"),
        },
      ],
    },
  ],
});

export default router;
