<template>
  <carusel class="mt-6" :slides="topRated" header="Top Rated" />
</template>

<script setup>
import { ref } from "vue";
import TmdbAPI from "@/services/TmdbAPI";
import Carusel from "@/components/carusel/Carusel.vue";

const topRated = ref(null);

const fetchTopRated = async () => {
  try {
    const response = await TmdbAPI.getTopRated();
    topRated.value = response.data.results;
  } catch (err) {}
};

fetchTopRated();
</script>
