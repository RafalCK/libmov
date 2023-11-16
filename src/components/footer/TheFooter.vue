<template>
  <v-footer>
    <v-row justify="center" no-gutters>
      <v-col class="text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.v-footer {
  flex: unset !important;
}
</style>
