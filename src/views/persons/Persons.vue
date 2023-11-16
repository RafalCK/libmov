<template>
  <div class="persons">
    <template v-for="person in persons" key="person.id">
      <router-link :to="`/persons/${person.id}`" class="persons__item">
        <img
          v-if="person.profile_path"
          width="200"
          height="300"
          class="rounded-xl"
          :src="`https://image.tmdb.org/t/p/original${person.profile_path}`"
        />
        <div class="persons__item__name">
          <span class="persons__item__name__name">{{ person.name }}</span>
          <v-chip
            class="ma-2"
            color="green-accent-3"
            prepend-icon="mdi-trending-up"
            >{{ person.popularity }}</v-chip
          >
        </div>
      </router-link>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PersonRepository from "@/repositories/PersonRepository";

const persons = ref([]);
const page = ref(1);
const isLoading = ref(false);

const fetchMovieList = async (pageValue) => {
  try {
    isLoading.value = true;
    const response = await PersonRepository.getPopular(pageValue);
    const data = await response.data;
    persons.value = [...persons.value, ...data.results];
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
.persons {
  display: flex;
  flex-wrap: wrap;
  padding: rem(20);
  gap: rem(20);
  justify-content: center;

  &__item {
    width: rem(200);
    &__photo {
      margin-top: rem(-80);
      margin-right: rem(20);
      width: rem(160);
      height: rem(160);
      border-radius: 50%;
      background-size: cover;
      background-position: center center;
    }

    &__name {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
