<template>
  <home-hero />
  <home-popular-movies />
  <home-popular-tv />
  <home-top-rated-movies />
  <home-top-rated-tv />
  <home-upcoming-movies />
  <home-on-the-air-tv />
</template>

<script setup>
import HomeHero from "@/views/home/HomeHero.vue";
import HomePopularMovies from "./HomePopularMovies.vue";
import HomeTopRatedMovies from "./HomeTopRatedMovies.vue";
import HomeUpcomingMovies from "./HomeUpcomingMovies.vue";
import HomePopularTv from "./HomePopularTv.vue";
import HomeTopRatedTv from "./HomeTopRatedTv.vue";
import HomeOnTheAirTv from "./HomeOnTheAirTv.vue";
</script>
