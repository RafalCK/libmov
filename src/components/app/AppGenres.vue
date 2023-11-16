<template>
  <div class="genres">
    <span class="genres__item" v-for="gener in genres">
      <template v-if="name">
        {{ gener.name }}
      </template>
      <template v-else> {{ GenresEnum[gener] }}</template>
    </span>
  </div>
</template>

<script setup>
import GenresEnum from "@/enums/GenresEnum.js";
const props = defineProps({
  genres: {
    type: Array,
    required: true,
  },
  name: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.genres {
  display: flex;
  gap: rem(10);
  flex-wrap: wrap;

  &__item {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    border: 2px solid $color-yellow;
    border-radius: rem(25);
    padding: rem(4) rem(20);
  }
}
</style>
