<template>
  <div class="person-header" v-if="person && movieCast">
    <div
      class="person-header__movie__image"
      :style="{
        backgroundImage: backdropPath.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${backdropPath.backdrop_path})`
          : '',
      }"
    >
      <v-btn
        density="comfortable"
        icon="mdi-chevron-left"
        class="mt-5 ml-8"
        @click="goBack"
      ></v-btn>
    </div>
    <div class="person-header__information">
      <div
        class="person-header__information__photo"
        :style="{
          backgroundImage: person.profile_path
            ? `url(https://image.tmdb.org/t/p/original${person.profile_path})`
            : '',
        }"
      ></div>
      <div class="person-header__information__name">
        <div class="person-header__information__name__top">
          <span class="person-header__information__name__name">{{
            person.name
          }}</span>
          <v-chip
            v-if="person.birthday"
            class="ma-2"
            text-color="white"
            prepend-icon="mdi-cake-variant-outline"
            >{{ person.birthday }}</v-chip
          >
          <v-chip
            v-if="person.deathday"
            class="ma-2"
            text-color="white"
            prepend-icon="mdi-coffin"
            >{{ person.deathday }}</v-chip
          >
        </div>
        <div class="person-header__information__name__bottom">
          <v-chip
            v-if="person.place_of_birth"
            class="ma-2"
            text-color="white"
            prepend-icon="mdi-google-maps"
            >{{ person.place_of_birth }}</v-chip
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";
import { useNavigation } from "@/composables/useNavigation.js";

const person = inject("person");
const movieCast = inject("movieCast");

const backdropPath = computed(() => {
  return movieCast.value.find((backdrop) => backdrop.backdrop_path);
});

const { goBack } = useNavigation();
</script>

<style lang="scss" scoped>
.person-header {
  &__movie {
    &__image {
      width: 100%;
      height: 300px;
      border-radius: 0 0 50px 50px;
      background-size: cover;
      background-position: center center;
      overflow: hidden;
    }
  }

  &__information {
    margin: rem(20) rem(40);
    display: flex;

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
      &__top {
        display: flex;
        align-items: center;
      }
      &__name {
        font-size: rem(32);
        line-height: rem(38);
        font-weight: $font-weight-bold;
      }
    }
  }
}

@media (max-width: 620px) {
  .person-header {
    &__information {
      flex-direction: column;
      margin: rem(20) 0;
      padding: rem(20);

      &__name {
        display: flex;
        flex-direction: column;

        &__top {
          align-items: flex-start;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
