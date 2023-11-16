<template>
  <v-progress-circular
    :rotate="0"
    :size="60"
    :width="5"
    :model-value="props.count.toFixed(1) * 10"
    :color="circularColor(props.count.toFixed(1))"
  >
    <span>{{ props.count.toFixed(1) }}</span>
  </v-progress-circular>
</template>

<script setup>
const props = defineProps({
  count: {
    type: Number,
    required: true,
  },
});

const circularColor = (count) => {
  if (count <= 5) return "#ec5353";
  else if (count >= 5 && count < 8) return "#f5de50";
  else return "#00FF00";
};
</script>

<style lang="scss" scoped></style>
