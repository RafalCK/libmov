<template>
  <div class="series-details-similar">
    <span class="series-details-similar__header">More like this</span>
    <template v-for="similar in similars">
      <router-link
        :to="`/series/${similar.id}`"
        class="series-details-similar__info"
      >
        <div class="series-details-similar__info__left">
          <div class="series-details-cast__info__left__image">
            <img
              v-if="similar.poster_path"
              class="rounded-xl"
              width="70"
              height="100"
              :src="`https://image.tmdb.org/t/p/w200/${similar.poster_path}`"
            />
            <img
              v-else
              class="rounded-xl"
              width="70"
              height="100"
              src="@/assets/movie_placeholder.png"
            />
          </div>
        </div>
        <div class="series-details-similar__info__right">
          <span class="series-details-similar__info__right__name">{{
            similar.name
          }}</span>
          <div
            class="series-details-hero__votes__progress"
            v-if="similar.vote_average"
          >
            <app-votes-rating :count="similar.vote_average" />
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script setup>
import { inject } from "vue";
import AppVotesRating from "@/components/app/AppVotesRating.vue";

const similars = inject("similars");
</script>

<style lang="scss" scoped>
.series-details-similar {
  display: flex;
  flex-direction: column;
  gap: rem(25);
  padding-left: rem(50);

  &__header {
    font-weight: 700;
    font-size: rem(18);
  }
  &__info {
    display: flex;
    gap: rem(18);
    &__left {
    }
    &__right {
      display: flex;
      flex-direction: column;

      &__name {
        font-weight: 700;
        margin-bottom: rem(5);
      }
    }
  }
}

@media (max-width: 850px) {
  .series-details-similar {
    margin-top: rem(50);
    padding-left: 0;
  }
}
</style>
