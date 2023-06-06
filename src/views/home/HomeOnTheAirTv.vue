<template>
  <carusel class="mt-6" :slides="onTheAir" header="On the air" kind="tv" />
</template>

<script setup>
import { ref } from "vue";
import TvRepository from "@/repositories/TvRepository";
import Carusel from "@/components/carusel/Carusel.vue";

const onTheAir = ref(null);

const fetchTopRated = async () => {
  try {
    const response = await TvRepository.getOnTheAir();
    onTheAir.value = response.data.results;
  } catch (err) {}
};

fetchTopRated();
</script>
