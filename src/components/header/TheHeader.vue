<template>
  <v-app-bar class="header">
    <v-toolbar dense floating class="px-2">
      <v-row class="align-center justify-space-between">
        <v-col class="header__logo" sm="3">
          <div class="header__logo__logo">
            <router-link
              class="header__logo__logo__link"
              :to="{ name: 'Home' }"
            >
              <v-avatar>
                <img
                  width="30"
                  height="30"
                  src="@/assets/logo.svg"
                  alt="logo"
                />
              </v-avatar>
              <v-toolbar-title class="header__title"
                >LIB<span class="font-weight-bold">MOV</span>
              </v-toolbar-title>
            </router-link>
          </div>
        </v-col>
        <v-col class="align-center" sm="7">
          <v-toolbar-items>
            <app-search />
          </v-toolbar-items>
        </v-col>
        <v-col sm="2" class="header__switcher d-none d-sm-flex justify-end">
          <v-toolbar-items>
            <app-theme-switcher />
          </v-toolbar-items>
        </v-col>
      </v-row>
    </v-toolbar>
  </v-app-bar>
</template>

<script setup>
import AppThemeSwitcher from "../app/AppThemeSwitcher.vue";
import AppSearch from "../app/AppSearch.vue";
</script>

<style lang="scss" scoped>
.header {
  overflow: visible;
  &__logo {
    &__logo {
      &__link {
        display: inline-flex;
        align-items: center;
      }
    }
  }

  :deep(.v-toolbar) {
    overflow: visible;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
  }

  :deep(.v-toolbar__content) {
    justify-content: space-between;
  }

  :deep(.v-toolbar-items) {
    height: auto;
  }

  &__switcher {
    :deep(.v-selection-control) {
      justify-content: flex-end;
    }
  }

  @media (max-width: 601px) {
    .header {
      &__logo {
        max-width: rem(60);
      }
      &__title {
        display: none;
      }
    }
  }
}
</style>
