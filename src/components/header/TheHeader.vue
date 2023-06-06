<template>
  <v-app-bar class="header">
    <v-toolbar class="px-2">
      <div class="header__logo">
        <v-avatar>
          <img width="30" height="30" src="@/assets/logo.png" alt="logo" />
        </v-avatar>
        <v-toolbar-title
          >LIB<span class="font-weight-bold">MOV</span>
        </v-toolbar-title>
      </div>
      <v-toolbar-items>
        <app-search />
      </v-toolbar-items>
      <v-toolbar-items>
        <app-theme-switcher />
      </v-toolbar-items>
    </v-toolbar>
  </v-app-bar>
</template>

<script setup>
import AppThemeSwitcher from "../app/AppThemeSwitcher.vue";
import AppSearch from "../app/AppSearch.vue";
</script>

<style lang="scss">
.header {
  &__logo {
    display: inline-flex;
    align-items: center;
  }

  .v-toolbar__content {
    justify-content: space-between;
  }

  .v-toolbar-items {
    height: auto;
  }
}
</style>
