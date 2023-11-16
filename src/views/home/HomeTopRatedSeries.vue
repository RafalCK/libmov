<template>
  <carusel class="mt-6" :slides="topRated" header="Top Rated" kind="series" />
</template>

<script setup>
import { ref } from "vue";
import SeriesRepository from "@/repositories/SeriesRepository";
import Carusel from "@/components/carusel/Carusel.vue";

const topRated = ref(null);

const fetchTopRated = async () => {
  try {
    const response = await SeriesRepository.getTopRated();
    topRated.value = response.data.results;
  } catch (err) {}
};

fetchTopRated();
</script>
