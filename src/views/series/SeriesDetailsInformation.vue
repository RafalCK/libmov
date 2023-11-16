<template>
  <div class="series-details-information">
    <div class="series-details-information__main">
      <div class="series-details-information__main__left">
        <img
          v-if="serial.poster_path"
          class="rounded-xl"
          width="115"
          height="160"
          :src="`https://image.tmdb.org/t/p/w200/${serial.poster_path}`"
        />
        <div class="series-details-information__main__left__date">
          <span class="series-details-information__main__left__year">
            {{
              TimeService.extractYearFromReleaseDate(serial.first_air_date)
            }}</span
          >
          <span
            v-if="serial.episode_run_time"
            class="series-details-information__main__left__duration"
          >
            {{
              TimeService.convertMinutesToHoursAndMinutes(
                serial.episode_run_time
              )
            }}</span
          >
          <span class="series-details-information__main__left__seasons">
            {{ serial.number_of_seasons }} SEASONS</span
          >
          <span class="series-details-information__main__left__episodes">
            {{ serial.number_of_episodes }} EPISODES</span
          >
        </div>
      </div>
      <div class="series-details-information__main__right">
        <div class="series-details-information__main__right__top">
          <span class="series-details-information__main__right__top__title">{{
            serial.name
          }}</span>
          <app-genres class="mt-3" :genres="serial.genres" :name="true" />
        </div>
        <div class="series-details-information__main__right__bottom">
          <div
            class="series-details-information__main__right__bottom__overview"
            v-if="serial.overview"
          >
            <span
              class="series-details-information__main__right__bottom__overview__header"
              >Overview</span
            >
            <p>{{ serial.overview }}</p>
          </div>
          <div class="series-details-information__main__right__bottom__cast">
            <series-details-cast />
          </div>
        </div>
        <div class="series-details-information__main__right__bottom__seasons">
          <span
            class="series-details-information__main__right__bottom__seasons__header"
            >Seasons</span
          >
          <v-expansion-panels variant="accordion" class="pr-12">
            <v-expansion-panel
              v-for="season in serial.seasons"
              :key="season.id"
              :title="season.name"
            >
              <v-expansion-panel-text>
                <div
                  class="series-details-information__main__right__bottom__content"
                >
                  <div
                    class="series-details-information__main__right__bottom__content__image"
                  >
                    <img
                      v-if="season.poster_path"
                      class="rounded-xl"
                      width="70"
                      height="100"
                      :src="`https://image.tmdb.org/t/p/w200/${season.poster_path}`"
                    />
                    <img
                      v-else
                      class="rounded-xl"
                      width="70"
                      height="100"
                      src="@/assets/movie_placeholder.png"
                    />
                  </div>
                  <div
                    class="series-details-information__main__right__bottom__content__info"
                  >
                    <span v-if="season.air_date"
                      >Year:
                      <span class="font-weight-bold">{{
                        TimeService.extractYearFromReleaseDate(season.air_date)
                      }}</span></span
                    >
                    <span v-if="season.episode_count"
                      >Episodes:
                      <span class="font-weight-bold">{{
                        season.episode_count
                      }}</span></span
                    >
                    <span v-if="season.overview"
                      >Overview:
                      <span class="font-weight-bold">{{
                        season.overview
                      }}</span></span
                    >
                  </div>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";
import TimeService from "@/services/TimeService";
import AppGenres from "@/components/app/AppGenres.vue";
import SeriesDetailsCast from "./SeriesDetailsCast.vue";

const serial = inject("serial");

const genresIds = computed(() => {
  return serial.value.genres.map((el) => el.name);
});
</script>

<style lang="scss" scoped>
.series-details-information {
  border-right: 1px solid #272a3b;
  width: 100%;
  &__main {
    display: flex;

    &__left {
      margin-right: rem(30);
      min-width: rem(160);

      &__year {
        display: block;
        font-size: rem(22);
        margin-top: rem(20);
      }

      &__duration,
      &__seasons,
      &__episodes {
        display: block;
        font-size: rem(22);
        text-transform: uppercase;
      }
    }
    &__right {
      width: 100%;
      &__top {
        margin-bottom: rem(48);

        :deep(.genres__item) {
          text-shadow: none;
        }

        &__title {
          font-size: rem(28);
          font-weight: 700;
        }
      }

      &__bottom {
        display: flex;
        gap: rem(75);

        &__overview {
          flex: 2;
          &__header {
            display: block;
            font-weight: $font-weight-bold;
            text-transform: uppercase;
            margin-bottom: rem(38);
          }
        }

        &__seasons {
          margin-top: rem(50);

          &__header {
            display: block;
            font-weight: $font-weight-bold;
            text-transform: uppercase;
            margin-bottom: rem(38);
          }
        }

        &__content {
          display: flex;

          &__info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: rem(10);
          }
        }

        &__cast {
          flex: 1;
        }
      }
    }
  }
}

@media (max-width: 850px) {
  .series-details-information {
    &__main {
      flex-direction: column;

      &__left {
        display: flex;
        flex-direction: row;

        &__date {
          margin-left: rem(10);
        }
      }

      &__right {
        &__bottom {
          flex-direction: column;
        }
      }
    }
  }
}

@media (max-width: 1450px) {
  .series-details-information__main__right__bottom {
    flex-direction: column;
    margin-right: rem(25);
  }
}
</style>
