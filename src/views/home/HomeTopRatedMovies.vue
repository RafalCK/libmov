<template>
  <carusel class="mt-6" :slides="topRated" header="Top Rated" />
</template>

<script setup>
import { ref } from "vue";
import MovieRepository from "@/repositories/MovieRepository";
import Carusel from "@/components/carusel/Carusel.vue";

const topRated = ref(null);

const fetchTopRated = async () => {
  try {
    const response = await MovieRepository.getTopRated();
    topRated.value = response.data.results;
  } catch (err) {}
};

fetchTopRated();
</script>
