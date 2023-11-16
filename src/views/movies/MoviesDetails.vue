<template>
  <div class="movies-details" v-if="movie">
    <movies-details-hero />
    <div class="movies-details__container">
      <div class="movies-details__container__left">
        <movies-details-information />
      </div>
      <div class="movies-details__container__right">
        <movies-details-similar v-if="similars.length > 0" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, computed, watch } from "vue";
import { useRoute } from "vue-router";
import MovieRepository from "@/repositories/MovieRepository";
import MoviesDetailsHero from "./MoviesDetailsHero.vue";
import MoviesDetailsInformation from "./MoviesDetailsInformation.vue";
import MoviesDetailsSimilar from "./MoviesDetailsSimilar.vue";

const route = useRoute();
const id = computed(() => {
  return route.params.details;
});

const movie = ref(null);

provide("movie", movie);

const fetchMovie = async () => {
  try {
    const response = await MovieRepository.getMovieById(id.value);
    movie.value = response.data;
  } catch (err) {}
};

fetchMovie();

const credits = ref([]);
provide("credits", credits);

const fetchCredits = async () => {
  try {
    const response = await MovieRepository.getCreditsByMovieId(id.value);
    credits.value = response.data.cast.slice(0, 5);
  } catch (err) {}
};

fetchCredits();

const similars = ref([]);
provide("similars", similars);

const fetchSimilars = async () => {
  try {
    const response = await MovieRepository.getSimilarByMovieId(id.value);
    similars.value = response.data.results.slice(0, 3);
  } catch (err) {}
};

fetchSimilars();

watch(id, () => {
  fetchMovie();
  fetchCredits();
  fetchSimilars();
});
</script>

<style lang="scss" scoped>
.movies-details {
  &__container {
    display: flex;
    margin: rem(60) rem(90);

    &__left {
      display: flex;
      flex: 2;
    }

    &__right {
      flex: 1;
    }
  }
}

@media (max-width: 850px) {
  .movies-details {
    &__container {
      flex-direction: column;
      margin: rem(16);
    }
  }
}
</style>
