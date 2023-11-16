<template>
  <div class="home-hero">
    <div class="home-hero__gallery">
      <Carousel
        id="gallery"
        :items-to-show="1"
        :wrap-around="true"
        :autoplay="5000"
        v-model="currentSlide"
      >
        <Slide v-for="slide in slides" :key="slide">
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
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MovieRepository from "@/repositories/MovieRepository";
import AppGenres from "@/components/app/AppGenres.vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

const carusel = ref(null);
const currentSlide = ref(0);

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

const next = () => {
  carusel.value.next();
};

const prev = () => {
  carusel.value.prev();
};

const slideTo = (val) => {
  currentSlide.value = val;
};
</script>

<style lang="scss" scoped>
.home-hero {
  height: 100lvh;
  margin-top: rem(-64);

  &__gallery {
    height: 100%;

    :deep(.carousel) {
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

          &__content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            color: white;
            backdrop-filter: brightness(60%);
          }

          &__info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-left: rem(100);
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
      :deep(.carousel) {
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
}
</style>
