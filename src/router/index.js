// Composables
import { createRouter, createWebHistory } from "vue-router";
import Default from "@/layouts/Default.vue";
import Home from "@/views/home/Home.vue";
import Movies from "@/views/movies/Movies.vue";
import MoviesDetails from "@/views/movies/MoviesDetails.vue";
import Series from "@/views/series/Series.vue";
import SeriesDetails from "@/views/series/SeriesDetails.vue";
import Persons from "@/views/persons/Persons.vue";
import PersonsDetails from "@/views/persons/PersonsDetails.vue";

const routes = [
  {
    path: "",
    component: Default,
    redirect: () => {
      return { name: "Home" };
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/movies",
        name: "Movies",
        component: Movies,
      },
      {
        path: "/movies/:details",
        name: "MoviesDetails",
        component: MoviesDetails,
      },
      {
        path: "/series",
        name: "Series",
        component: Series,
      },
      {
        path: "/series/:details",
        name: "SeriesDetails",
        component: SeriesDetails,
      },
      {
        path: "/persons",
        name: "Persons",
        component: Persons,
      },
      {
        path: "/persons/:id",
        name: "PersonsDetails",
        component: PersonsDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/libmov/"),
  routes,
  scrollBehavior() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  },
});

export default router;
