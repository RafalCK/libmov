<template>
  <div class="person-information" v-if="person">
    <div class="person-information__section" v-if="person.biography">
      <span class="person-information__section__header">Biography</span>
      {{ person.biography }}
    </div>
    <div class="person-information__section" v-if="person.popularity">
      <span class="person-information__section__header">Popularity</span>
      <v-chip
        class="ma-2"
        color="green-accent-3"
        prepend-icon="mdi-trending-up"
        >{{ person.popularity }}</v-chip
      >
    </div>
    <div class="person-information__section" v-if="socials">
      <span class="person-information__section__header">Social media</span>
      <app-socials
        v-if="socials"
        :socials="socials"
        :website="person.homepage"
      />
    </div>
    <div
      class="person-information__section align-start"
      v-if="movieCast && movieCast.length > 0"
    >
      <span class="person-information__section__header">Movies</span>
      <div class="person-information__movies">
        <template v-for="movie in movieCast" :key="movie.id">
          <router-link
            :to="`/movies/${movie.id}`"
            class="person-information__movies__item"
          >
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
    </div>
    <div
      class="person-information__section align-start"
      v-if="seriesCast && seriesCast.length > 0"
    >
      <span class="person-information__section__header">Series</span>
      <div class="person-information__series">
        <template v-for="serial in seriesCast" :key="serial.id">
          <router-link
            :to="`/series/${serial.id}`"
            class="person-information__series__item"
          >
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
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import AppSocials from "@/components/app/AppSocials.vue";

const person = inject("person");
const movieCast = inject("movieCast");
const seriesCast = inject("seriesCast");
const socials = inject("socials");
</script>

<style lang="scss" scoped>
.person-information {
  display: flex;
  flex-direction: column;
  padding: rem(20) rem(40);

  &__section {
    display: flex;
    align-items: baseline;
    margin-bottom: rem(20);

    &__header {
      font-weight: 700;
      text-transform: uppercase;
      margin-right: rem(20);
      min-width: rem(120);
    }
  }

  &__movies,
  &__series {
    display: flex;
    flex-wrap: wrap;
    gap: rem(20);

    &__item {
      width: rem(200);
    }
  }
}

@media (max-width: 620px) {
  .person-information {
    padding: rem(20);
    &__section {
      flex-direction: column;

      &__header {
        margin-bottom: rem(20);
      }
    }

    &__movies,
    &__series {
      justify-content: center;
    }
  }
}
</style>
