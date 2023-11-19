<template>
  <div class="series-details-hero" v-if="serial">
    <div
      class="series-details-hero__image"
      :style="{
        backgroundImage: serial.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${serial.backdrop_path})`
          : '',
      }"
    >
      <div class="series-details-hero__content">
        <div class="series-details-hero__content__top">
          <div class="series-details-hero__back">
            <v-btn
              density="comfortable"
              icon="mdi-chevron-left"
              class="mr-3"
              @click="goBack"
            ></v-btn
            >{{ serial.name }}
          </div>
          <div class="series-details-hero__type">Serial</div>
        </div>
        <div
          class="series-details-hero__content__bottom"
          :class="{ 'justify-center': !serial.vote_average }"
        >
          <div class="series-details-hero__votes" v-if="serial.vote_average">
            <div class="series-details-hero__votes__progress">
              <app-votes-rating :count="serial.vote_average" />
            </div>
            <div class="series-details-hero__votes__count">
              <div class="series-details-hero__votes__count__top">
                <span>{{ serial.vote_count }} votes</span>
              </div>
              <div class="series-details-hero__votes__count__bottom">
                <span>our users are recommending it</span>
              </div>
            </div>
          </div>
          <div class="series-details-hero__website">
            <v-btn
              prepend-icon="mdi-web"
              rounded="xl"
              :href="serial.homepage"
              size="x-large"
              >Website</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import { useRoute } from "vue-router";
import { useNavigation } from "@/composables/useNavigation.js";
import AppVotesRating from "@/components/app/AppVotesRating.vue";

const serial = inject("serial");

const router = useRoute();

const { goBack } = useNavigation();

const circularColor = (count) => {
  if (count <= 5) return "#ec5353";
  else if (count >= 5 && count < 8) return "#f5de50";
  else return "#00FF00";
};
</script>

<style lang="scss" scoped>
.series-details-hero {
  &__image {
    width: 100%;
    height: rem(300);
    border-radius: 0 0 rem(50) rem(50);
    background-size: cover;
    background-position: center center;
    overflow: hidden;
  }

  &__type {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    border: 1px solid $color-white;
    border-radius: rem(25);
    background: rgba(255, 255, 255, 0.2);
    padding: rem(4) rem(20);
  }

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: rem(40) rem(90);
    color: $color-white;
    z-index: 0;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
      z-index: -1;
    }

    &__top {
      display: flex;
      justify-content: space-between;
    }

    &__bottom {
      display: flex;
    }
  }

  &__votes {
    display: flex;
    width: 33%;

    &__progress {
      margin-right: rem(20);
    }

    &__count {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  &__website {
    display: flex;
    width: 33%;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 850px) {
  .series-details-hero {
    &__content {
      padding: rem(16);

      &__bottom {
        justify-content: space-between;
      }
    }

    &__votes {
      flex-direction: column;
      align-items: center;
      width: 50%;

      &__count {
        margin-top: rem(10);
        text-align: center;
      }

      &__progress {
        margin-right: 0;
      }
    }

    &__website {
      width: 50%;
    }
  }
}
</style>
