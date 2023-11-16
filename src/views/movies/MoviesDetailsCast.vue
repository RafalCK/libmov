<template>
  <div class="movies-details-cast">
    <span class="movies-details-cast__header">Cast</span>
    <template v-for="credit in credits" :key="credit.cast_id">
      <router-link
        :to="`/persons/${credit.id}`"
        class="movies-details-cast__info"
      >
        <div class="movies-details-cast__info__image">
          <img
            v-if="credit.profile_path"
            :src="`https://image.tmdb.org/t/p/w200/${credit.profile_path}`"
          />
          <img v-else src="@/assets/person_placeholder.jpg" />
        </div>
        <div class="movies-details-cast__info__name">
          <span class="movies-details-cast__info__name__actor">{{
            credit.name
          }}</span>
          <span class="movies-details-cast__info__name__character">{{
            credit.character
          }}</span>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script setup>
import { inject } from "vue";

const credits = inject("credits");
</script>

<style lang="scss" scoped>
.movies-details-cast {
  margin-right: rem(10);
  &__header {
    display: block;
    font-weight: $font-weight-bold;
    text-transform: uppercase;
    margin-bottom: rem(38);
  }

  &__info {
    display: flex;
    &__image {
      margin-right: rem(15);
      img {
        width: rem(50);
        height: rem(50);
        border-radius: 50%;
        object-fit: cover;
      }
    }

    &__name {
      display: flex;
      flex-direction: column;

      &__actor {
        color: $color-yellow;
      }

      &__character {
        font-weight: 700;
      }
    }
  }
}
</style>
