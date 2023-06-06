<template>
  <carusel class="mt-6" :slides="popular" header="Popular" kind="tv" />
</template>

<script setup>
import { ref } from "vue";
import TvRepository from "@/repositories/TvRepository";
import Carusel from "@/components/carusel/Carusel.vue";

const popular = ref(null);

const fetchPopular = async () => {
  try {
    const response = await TvRepository.getPopular();
    popular.value = response.data.results;
  } catch (err) {}
};

fetchPopular();
</script>
