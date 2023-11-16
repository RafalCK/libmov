<template>
  <div class="socials">
    <a v-if="props.website" :href="props.website" target="_blank">
      <v-chip class="ma-2" prepend-icon="mdi-web">Website</v-chip></a
    >
    <a
      v-if="socials.facebook_id"
      :href="`https://facebook.com/${socials.facebook_id}`"
      target="_blank"
    >
      <v-chip class="ma-2" color="blue-darken-2" prepend-icon="mdi-facebook"
        >Facebook</v-chip
      ></a
    >
    <a
      v-if="socials.instagram_id"
      :href="`https://instagram.com/${socials.instagram_id}`"
      target="_blank"
    >
      <v-chip class="ma-2" color="primary" prepend-icon="mdi-instagram"
        >Instagram</v-chip
      ></a
    >
    <a
      v-if="socials.twitter_id"
      :href="`https://twitter.com/${socials.twitter_id}`"
      target="_blank"
    >
      <v-chip class="ma-2" color="blue-lighten-1" prepend-icon="mdi-twitter"
        >Twitter</v-chip
      ></a
    >
    <a
      v-if="socials.youtube_id"
      :href="`https://youtube.com/${socials.youtube_id}`"
      target="_blank"
    >
      <v-chip class="ma-2" color="red-accent-4" prepend-icon="mdi-youtube"
        >Youtube</v-chip
      ></a
    >
    <a
      v-if="socials.tiktok_id"
      :href="`https://tiktok.com/${socials.tiktok_id}`"
      target="_blank"
    >
      <v-chip class="ma-2" color="grey-lighten-1" prepend-icon="mdi-facebook"
        >Tiktok</v-chip
      ></a
    >
  </div>
</template>

<script setup>
const props = defineProps({
  website: {
    type: String,
    required: false,
  },
  socials: {
    type: Object,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.socials {
  display: flex;
  flex-wrap: wrap;
}
:deep(.v-chip) {
  cursor: pointer;
}
</style>
