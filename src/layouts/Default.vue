<template>
  <v-app>
    <the-header />
    <menu-aside />
    <v-main>
      <router-view />
    </v-main>
    <menu-bottom class="d-lg-none" />
    <the-footer />
  </v-app>
</template>

<script setup>
import TheHeader from "@/components/header/TheHeader.vue";
import MenuAside from "@/components/menu/MenuAside.vue";
import TheFooter from "@/components/footer/TheFooter.vue";
import MenuBottom from "@/components/menu/MenuBottom.vue";
</script>

<style lang="scss" scoped>
.v-main {
  padding-bottom: rem(64);
}
</style>
