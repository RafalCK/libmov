<template>
  <carusel class="mt-6" :slides="onTheAir" header="On the air" kind="series" />
</template>

<script setup>
import { ref } from "vue";
import SeriesRepository from "@/repositories/SeriesRepository";
import Carusel from "@/components/carusel/Carusel.vue";

const onTheAir = ref(null);

const fetchOnTheAir = async () => {
  try {
    const response = await SeriesRepository.getOnTheAir();
    onTheAir.value = response.data.results;
  } catch (err) {}
};

fetchOnTheAir();
</script>
