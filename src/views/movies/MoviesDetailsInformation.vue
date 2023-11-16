<template>
  <div class="movies-details-information">
    <div class="movies-details-information__main">
      <div class="movies-details-information__main__left">
        <img
          v-if="movie.poster_path"
          class="rounded-xl"
          width="115"
          height="160"
          :src="`https://image.tmdb.org/t/p/w200/${movie.poster_path}`"
        />
        <div class="movies-details-information__main__left__date">
          <span class="movies-details-information__main__left__year">
            {{
              TimeService.extractYearFromReleaseDate(movie.release_date)
            }}</span
          >
          <span class="movies-details-information__main__left__duration">
            {{
              TimeService.convertMinutesToHoursAndMinutes(movie.runtime)
            }}</span
          >
        </div>
      </div>
      <div class="movies-details-information__main__right">
        <div class="movies-details-information__main__right__top">
          <span class="movies-details-information__main__right__top__title">{{
            movie.original_title
          }}</span>
          <app-genres class="mt-3" :genres="genresIds" />
        </div>
        <div class="movies-details-information__main__right__bottom">
          <div
            v-if="movie.overview"
            class="movies-details-information__main__right__bottom__overview"
          >
            <span
              class="movies-details-information__main__right__bottom__overview__header"
              >Overview</span
            >
            <p>{{ movie.overview }}</p>
          </div>
          <div class="movies-details-information__main__right__bottom__cast">
            <movies-details-cast />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from "vue";
import TimeService from "@/services/TimeService";
import AppGenres from "@/components/app/AppGenres.vue";
import MoviesDetailsCast from "./MoviesDetailsCast.vue";

const movie = inject("movie");

const genresIds = computed(() => {
  return movie.value.genres.map((el) => el.id);
});
</script>

<style lang="scss" scoped>
.movies-details-information {
  border-right: 1px solid #272a3b;
  width: 100%;
  &__main {
    display: flex;

    &__left {
      margin-right: rem(30);

      &__year {
        display: block;
        font-size: rem(22);
        margin-top: rem(20);
      }

      &__duration {
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

        &__cast {
          flex: 1;
        }
      }
    }
  }
}

@media (max-width: 850px) {
  .movies-details-information {
    border-right: none;

    &__main {
      flex-direction: column;

      &__left {
        display: flex;
        flex-direction: row;

        &__date {
          margin-left: rem(20);
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
  .movies-details-information__main__right__bottom {
    flex-direction: column;
    margin-right: rem(25);
  }
}
</style>
