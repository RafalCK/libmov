<template>
  <carusel class="mt-6" :slides="popular" header="Popular" kind="series" />
</template>

<script setup>
import { ref } from "vue";
import SeriesRepository from "@/repositories/SeriesRepository";
import Carusel from "@/components/carusel/Carusel.vue";

const popular = ref(null);

const fetchPopular = async () => {
  try {
    const response = await SeriesRepository.getPopular();
    popular.value = response.data.results;
  } catch (err) {}
};

fetchPopular();
</script>
