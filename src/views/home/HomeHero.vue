<template>
  <div class="home-hero">
    <div class="home-hero__gallery">
      <v-carousel
        v-if="slides"
        cycle
        interval="5000"
        class="carusel"
        hide-delimiters
        height="100%"
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="slide in slides"
          :draggable="true"
          :eager="true"
          :key="slide.id"
        >
          <div
            class="carousel__item"
            :style="`background-image: url(https://image.tmdb.org/t/p/original/${slide.backdrop_path})`"
          >
            <div class="carousel__item__content">
              <div class="carousel__item__info">
                <span class="carousel__item__info__name">
                  {{ slide.title }}
                </span>
                <div class="carousel__item__info__details">
                  <span class="carousel__item__info__details__release">
                    {{ slide.release_date.split("-")[0] }}
                  </span>
                  <span class="carousel__item__info__details__rating">
                    IMDB <b>{{ slide.vote_average.toFixed(1) }}</b>
                  </span>
                  <app-genres :genres="slide.genre_ids" />
                </div>
                <div class="carousel__item__info__overview">
                  <p>{{ slide.overview }}</p>
                </div>
                <div class="carousel__item__button mt-4">
                  <v-btn
                    :to="`/movies/${slide.id}`"
                    variant="outlined"
                    size="large"
                    rounded="xl"
                    >Details</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MovieRepository from "@/repositories/MovieRepository";
import AppGenres from "@/components/app/AppGenres.vue";

const slides = ref(null);

const fetchSlides = async () => {
  try {
    const response = await MovieRepository.getNowPlaying();
    slides.value = response.data.results;
  } catch (err) {}
};

fetchSlides();

const geners = (item) => {
  const genersArray = item.genre_ids;
  genersArray.forEach((el) => element);
};
</script>

<style lang="scss" scoped>
.home-hero {
  height: calc(100svh - #{rem(64)});

  &__gallery {
    height: 100%;

    .carousel {
      &__viewport {
        height: 100%;
      }

      &__track {
        height: 100%;
        align-items: flex-start;
      }

      &__slide {
        height: 100%;
      }

      &__item {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
          z-index: 0;
        }

        &__content {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          color: white;
        }

        &__info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: rem(100);
          z-index: 1;
          &__name {
            font-size: rem(48);
          }
          &__details {
            display: flex;
            align-items: center;
            gap: rem(10);

            &__rating {
              display: block;
              background: $color-yellow;
              padding: rem(4) rem(15);
              color: black;
              border: 1px solid $color-yellow;
              border-radius: rem(25);
            }
          }

          &__overview {
            margin-top: rem(12);
            text-align: left;
            max-width: rem(500);
          }
        }
      }
    }
  }
}
#thumbnails {
  .carousel__item {
    min-height: 100px;
    cursor: pointer;
  }
}

@media (max-width: 780px) {
  .home-hero {
    &__gallery {
      .carousel {
        &__item {
          &__content {
            justify-content: center;
          }
          &__info {
            margin-left: 0;
            padding: 0 rem(20);
            align-items: center;

            &__name {
              font-size: rem(26);
            }

            &__details {
              justify-content: center;
              flex-wrap: wrap;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .home-hero {
    height: calc(100svh - #{rem(120)});

    .carousel__item__info__overview {
      font-size: rem(13);
      line-height: 22px;
    }
  }
}
</style>
