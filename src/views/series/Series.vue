<template>
  <div class="series">
    <template v-for="serial in series" key="movie.id">
      <router-link :to="`/series/${serial.id}`" class="series__item">
        <img
          v-if="serial.poster_path"
          width="200"
          height="300"
          class="rounded-xl"
          :src="`https://image.tmdb.org/t/p/w200/${serial.poster_path}`"
        />
        <img
          v-else
          width="200"
          height="300"
          class="placeholder rounded-xl"
          src="@/assets/movie_placeholder.png"
        />
        <span class="d-block text-center">{{ serial.name }} </span>
      </router-link>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SeriesRepository from "@/repositories/SeriesRepository";

const series = ref([]);
const page = ref(1);
const isLoading = ref(false);

const fetchSeriesList = async (pageValue) => {
  try {
    isLoading.value = true;
    const response = await SeriesRepository.getList(pageValue);
    const data = await response.data;
    series.value = [...series.value, ...data.results];
    page.value++;
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
  }
};

fetchSeriesList(page.value);
fetchSeriesList(page.value + 1);

const handleScroll = () => {
  const isBottomOfPage =
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;

  if (isBottomOfPage && !isLoading.value) {
    isLoading.value = true;
    fetchSeriesList(page.value);
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.series {
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
