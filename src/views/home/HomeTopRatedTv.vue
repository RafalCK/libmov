<template>
  <carusel class="mt-6" :slides="topRated" header="Top Rated" kind="tv" />
</template>

<script setup>
import { ref } from "vue";
import TvRepository from "@/repositories/TvRepository";
import Carusel from "@/components/carusel/Carusel.vue";

const topRated = ref(null);

const fetchTopRated = async () => {
  try {
    const response = await TvRepository.getTopRated();
    topRated.value = response.data.results;
  } catch (err) {}
};

fetchTopRated();
</script>
