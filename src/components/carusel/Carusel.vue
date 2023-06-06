<template>
  <div class="carusel">
    <div class="carusel__header">
      <span class="carusel__header__name"
        >{{ header }} {{ kind === "tv" ? "TV" : "Movies" }}</span
      >
      <div class="carusel__header__navigation">
        <v-btn
          density="comfortable"
          icon="mdi-chevron-left"
          class="mr-3"
          @click="prev"
        >
        </v-btn>
        <v-btn
          density="comfortable"
          icon="mdi-chevron-right"
          class="mr-8"
          @click="next"
        >
        </v-btn>
      </div>
    </div>
    <div class="carusel__body">
      <Carousel :itemsToShow="7" ref="carusel" :wrap-around="true">
        <Slide v-for="slide in slides" :key="slide">
          <div class="carousel__item">
            <img
              class="rounded-xl"
              :src="`https://image.tmdb.org/t/p/w200/${slide.poster_path}`"
            />
            <span class="d-flex justify-center"
              >{{ kind === "tv" ? slide.name : slide.title }}
            </span>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

defineProps({
  slides: {
    type: Array,
    required: false,
  },
  header: {
    type: String,
    required: false,
  },
  kind: {
    type: String,
    required: false,
    default: "movie",
  },
});

const carusel = ref(null);

const next = () => {
  carusel.value.next();
};

const prev = () => {
  carusel.value.prev();
};
</script>

<style lang="scss">
.carusel {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: rem(15);

    &__name {
      font-size: rem(25);
      margin-left: rem(25);
    }

    &__navigation {
      &__btn {
      }
    }
  }
}
.carousel__track {
  align-items: baseline;
}
</style>
