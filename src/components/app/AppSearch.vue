<template>
  <v-text-field
    class="search__searcher"
    density="compact"
    variant="solo"
    label="Search templates"
    append-inner-icon="mdi-magnify"
    v-model="search"
    single-line
    hide-details
  ></v-text-field>
  <div class="search__results" v-if="searchResults.length > 0">
    <div class="search__results__content">
      <template v-for="result in searchResults" :key="search.id">
        <template
          v-if="result.media_type === 'tv' || result.media_type === 'movie'"
        >
          <router-link
            :to="
              result.media_type === 'movie'
                ? `/movies/${result.id}`
                : `/series/${result.id}`
            "
            @click="resetSearch"
            class="search__results__content__link"
          >
            <v-card class="search__results__content__item">
              <div class="search__results__content__item__image">
                <img
                  v-if="result.poster_path"
                  class="rounded-xl"
                  width="80"
                  height="100"
                  :src="`https://image.tmdb.org/t/p/w200/${result.poster_path}`"
                />
                <img
                  v-else
                  width="80"
                  height="100"
                  class="placeholder rounded-xl"
                  src="@/assets/movie_placeholder.png"
                />
              </div>
              <div class="search__results__content__item__info">
                <template v-if="result.media_type === 'tv'">
                  <span><i class="mdi mdi-television-classic"></i> Series</span>
                  <span class="text-center">{{ result.name }}</span>
                </template>
                <template v-if="result.media_type === 'movie'">
                  <span><i class="mdi-movie-outline mdi"></i> Movie</span>
                  <span class="text-center font-weight-bold">{{
                    result.title
                  }}</span>
                </template>
              </div>
            </v-card>
          </router-link>
        </template>
        <template v-else>
          <router-link
            :to="`/persons/${result.id}`"
            @click="resetSearch"
            class="search__results__content__link"
          >
            <v-card class="search__results__content__item">
              <div class="search__results__content__item__image">
                <img
                  v-if="result.profile_path"
                  class="rounded-xl"
                  width="80"
                  height="100"
                  :src="`https://image.tmdb.org/t/p/w200/${result.profile_path}`"
                />
                <img
                  v-else
                  class="rounded-xl"
                  width="80"
                  height="100"
                  src="@/assets/person_placeholder.jpg"
                />
              </div>
              <div class="search__results__content__item__info">
                <span><i class="mdi-account-star mdi"></i> Person</span>
                <span class="text-center font-weight-bold">{{
                  result.name
                }}</span>
              </div>
            </v-card>
          </router-link>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup>
import SearchRepository from "@/repositories/SearchRepository";
import { ref, watch } from "vue";

const search = ref("");

const searchResults = ref([]);

const searchMulti = async (data) => {
  try {
    const response = await SearchRepository.search(data);
    searchResults.value = response.data.results;
  } catch (err) {}
};

const resetSearch = () => {
  search.value = "";
  searchResults.value = [];
};

watch(search, () => {
  searchMulti(search.value);
  console.log(searchResults.value);
});
</script>

<style lang="scss" scoped>
.search {
  &__searcher {
    position: relative;
  }
  &__results {
    position: absolute;
    top: rem(64);
    left: 50%;
    background: rgb(var(--v-theme-on-surface-variant));
    transform: translateX(-50%);

    width: 100%;
    height: 100vh;
    max-height: none;
    overflow-y: auto;

    border: 9px solid rgb(var(--v-theme-on-surface-variant));
    border-top: 1px solid rgb(var(--v-theme-surface));
    box-sizing: content-box;

    &__content {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
      flex-wrap: wrap;
      gap: rem(10);
      padding: rem(10) rem(20);

      &__link {
        display: inline-grid;
      }

      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: rem(5);
        padding: rem(5);

        &__image {
          display: flex;
        }

        &__info {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
      }
    }
  }
}

@media (max-width: 1471px) {
  .search__results__content {
    margin-bottom: rem(80);
  }
}
</style>
