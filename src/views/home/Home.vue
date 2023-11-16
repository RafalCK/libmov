<template>
  <home-hero />
  <home-popular-movies />
  <home-popular-series />
  <home-top-rated-movies />
  <home-top-rated-series />
  <home-upcoming-movies />
  <home-on-the-air-series />
</template>

<script setup>
import HomeHero from "@/views/home/HomeHero.vue";
import HomePopularMovies from "./HomePopularMovies.vue";
import HomePopularSeries from "./HomePopularSeries.vue";
import HomeTopRatedMovies from "./HomeTopRatedMovies.vue";
import HomeTopRatedSeries from "./HomeTopRatedSeries.vue";
import HomeUpcomingMovies from "./HomeUpcomingMovies.vue";
import HomeOnTheAirSeries from "./HomeOnTheAirSeries.vue";
</script>
