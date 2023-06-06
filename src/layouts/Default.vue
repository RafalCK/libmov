<template>
  <v-app>
    <the-header />
    <menu-aside />
    <default-view />
    <the-footer />
  </v-app>
</template>

<script setup>
import DefaultView from "./View.vue";
import TheHeader from "@/components/header/TheHeader.vue";
import MenuAside from "@/components/menu/MenuAside.vue";
import TheFooter from "@/components/footer/TheFooter.vue";
</script>
