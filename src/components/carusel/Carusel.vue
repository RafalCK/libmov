<template>
  <div class="carusel">
    <div class="carusel__header">
      <span class="carusel__header__name"
        >{{ header }} {{ kind === "series" ? "Series" : "Movies" }}</span
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
      <Carousel
        :itemsToShow="7"
        ref="carusel"
        :breakpoints="breakpoints"
        :wrap-around="true"
      >
        <Slide v-for="slide in slides" :key="slide">
          <router-link
            :to="`${
              kind === 'series' ? `/series/${slide.id}` : `/movies/${slide.id}`
            }`"
            class="carousel__item"
          >
            <img
              v-if="slide.poster_path"
              class="rounded-xl"
              :src="`https://image.tmdb.org/t/p/w200/${slide.poster_path}`"
            />
            <span class="d-flex justify-center"
              >{{ kind === "series" ? slide.name : slide.title }}
            </span>
          </router-link>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
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

const breakpoints = {
  320: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  480: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  730: {
    itemsToShow: 3,
    snapAlign: "center",
  },
  1020: {
    itemsToShow: 4,
    snapAlign: "start",
  },
  1200: {
    itemsToShow: 5,
    snapAlign: "center",
  },
  1400: {
    itemsToShow: 6,
    snapAlign: "start",
  },
  1600: {
    itemsToShow: 7,
    snapAlign: "center",
  },
};
</script>

<style lang="scss" scoped>
.carusel {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: rem(15);
    align-items: center;

    &__name {
      font-size: rem(25);
      margin-left: rem(25);
    }

    &__navigation {
    }
  }
}
.carousel__track {
  align-items: baseline;
}

@media (max-width: 350px) {
  .carusel {
    &__header {
      &__name {
        font-size: rem(21);
      }
    }
  }
}
</style>
