<template>
  <carusel class="mt-6" :slides="popular" header="Popular" kind="movie" />
</template>

<script setup>
import { ref } from "vue";
import MovieRepository from "@/repositories/MovieRepository";
import Carusel from "@/components/carusel/Carusel.vue";

const popular = ref(null);
const fetchPopular = async () => {
  try {
    const response = await MovieRepository.getPopular();
    popular.value = response.data.results;
  } catch (err) {}
};

fetchPopular();
</script>
