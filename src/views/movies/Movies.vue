<template>
  <div class="movies">
    <template v-for="movie in movies" key="movie.id">
      <router-link :to="`/movies/${movie.id}`" class="movies__item">
        <img
          v-if="movie.poster_path"
          width="200"
          height="300"
          class="rounded-xl"
          :src="`https://image.tmdb.org/t/p/w200/${movie.poster_path}`"
        />
        <img
          v-else
          width="200"
          height="300"
          class="placeholder rounded-xl"
          src="@/assets/movie_placeholder.png"
        />
        <span class="d-block text-center">{{ movie.title }} </span>
      </router-link>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import MovieRepository from "@/repositories/MovieRepository";

const movies = ref([]);
const page = ref(1);
const isLoading = ref(false);

const fetchMovieList = async (pageValue) => {
  try {
    isLoading.value = true;
    const response = await MovieRepository.getList(pageValue);
    const data = await response.data;
    movies.value = [...movies.value, ...data.results];
    page.value++;
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
  }
};

fetchMovieList(page.value);
fetchMovieList(page.value + 1);

const handleScroll = () => {
  const isBottomOfPage =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;

  if (isBottomOfPage && !isLoading.value) {
    isLoading.value = true;
    fetchMovieList(page.value);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.movies {
  display: flex;
  flex-wrap: wrap;
  padding: rem(20);
  gap: rem(20);
  justify-content: center;

  &__item {
    width: rem(200);
  }
}
</style>
