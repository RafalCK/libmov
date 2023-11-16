<template>
  <carusel class="mt-6" :slides="upcoming" header="Upcoming" />
</template>

<script setup>
import { ref } from "vue";
import MovieRepository from "@/repositories/MovieRepository";
import Carusel from "@/components/carusel/Carusel.vue";

const upcoming = ref(null);

const fetchUpcoming = async () => {
  try {
    const response = await MovieRepository.getUpcoming();
    upcoming.value = response.data.results;
  } catch (err) {}
};

fetchUpcoming();
</script>
