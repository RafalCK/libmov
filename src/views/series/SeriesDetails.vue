<template>
  <div class="series-details" v-if="serial">
    <series-details-hero />
    <div class="series-details__container">
      <div class="series-details__container__left">
        <series-details-information />
      </div>
      <div class="series-details__container__right">
        <series-details-similar v-if="similars.length > 0" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, computed, watch } from "vue";
import { useRoute } from "vue-router";
import SeriesRepository from "@/repositories/SeriesRepository";
import SeriesDetailsHero from "./SeriesDetailsHero.vue";
import SeriesDetailsInformation from "./SeriesDetailsInformation.vue";
import SeriesDetailsSimilar from "./SeriesDetailsSimilar.vue";

const route = useRoute();
const id = computed(() => {
  return route.params.details;
});

const serial = ref(null);

provide("serial", serial);

const fetchSerial = async () => {
  try {
    const response = await SeriesRepository.getSerialById(id.value);
    serial.value = response.data;
  } catch (err) {}
};

fetchSerial();

const credits = ref([]);
provide("credits", credits);

const fetchCredits = async () => {
  try {
    const response = await SeriesRepository.getCreditsBySerialId(id.value);
    credits.value = response.data.cast.slice(0, 5);
  } catch (err) {}
};

fetchCredits();

const similars = ref([]);
provide("similars", similars);

const fetchSimilars = async () => {
  try {
    const response = await SeriesRepository.getSimilarBySerialId(id.value);
    similars.value = response.data.results.slice(0, 3);
  } catch (err) {}
};

fetchSimilars();

watch(id, () => {
  fetchSerial();
  fetchCredits();
  fetchSimilars();
});
</script>

<style lang="scss" scoped>
.series-details {
  &__container {
    display: flex;
    margin: rem(60) rem(90);

    &__left {
      display: flex;
      flex: 2;
    }

    &__right {
      flex: 1;
    }
  }
}

@media (max-width: 850px) {
  .series-details {
    &__container {
      flex-direction: column;
      margin: rem(16);
    }
  }
}
</style>
