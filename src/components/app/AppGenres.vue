<template>
  <div class="genres">
    <span class="genres__item" v-for="gener in genres">
      {{ GenresEnum[gener] }}
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
});
</script>

<style lang="scss">
.genres {
  display: flex;
  gap: rem(10);

  &__item {
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    border: 2px solid #f5de50;
    border-radius: rem(25);
    padding: rem(4) rem(20);
  }
}
</style>
