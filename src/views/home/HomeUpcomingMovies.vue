<template>
  <carusel class="mt-6" :slides="upcoming" header="Upcoming" />
</template>

<script setup>
import { ref } from "vue";
import TmdbAPI from "@/services/TmdbAPI";
import Carusel from "@/components/carusel/Carusel.vue";

const upcoming = ref(null);

const fetchUpcoming = async () => {
  try {
    const response = await TmdbAPI.getUpcoming();
    upcoming.value = response.data.results;
  } catch (err) {}
};

fetchUpcoming();
</script>
