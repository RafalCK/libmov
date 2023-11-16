<template>
  <div class="persons">
    <persons-details-header />
    <persons-details-information />
  </div>
</template>

<script setup>
import { ref, provide, computed, watch } from "vue";
import { useRoute } from "vue-router";
import PersonRepository from "@/repositories/PersonRepository";
import PersonsDetailsHeader from "./PersonsDetailsHeader.vue";
import PersonsDetailsInformation from "./PersonsDetailsInformation.vue";

const route = useRoute();
const id = computed(() => {
  return route.params.id;
});

const person = ref(null);

provide("person", person);

const fetchPerson = async () => {
  try {
    const response = await PersonRepository.getPersonById(id.value);
    person.value = response.data;
  } catch (err) {}
};

fetchPerson();

const movieCast = ref(null);

provide("movieCast", movieCast);

const fetchMoviesByPerson = async () => {
  try {
    const response = await PersonRepository.getMoviesByPersonId(id.value);
    movieCast.value = response.data.cast;
  } catch (err) {}
};

fetchMoviesByPerson();

const seriesCast = ref(null);

provide("seriesCast", seriesCast);

const fetchSeriesByPerson = async () => {
  try {
    const response = await PersonRepository.getSeriesByPersonId(id.value);
    seriesCast.value = response.data.cast;
  } catch (err) {}
};

fetchSeriesByPerson();

const socials = ref(null);

provide("socials", socials);

const fetchSocialsByPerson = async () => {
  try {
    const response = await PersonRepository.getSocialsByPersonId(id.value);
    socials.value = response.data;
  } catch (err) {}
};

fetchSocialsByPerson();

watch(id, () => {
  fetchPerson();
  fetchMoviesByPerson();
  fetchSocialsByPerson();
});
</script>

<style lang="scss" scoped></style>
