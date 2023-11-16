<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home-outline"
        title="Home"
        :to="{ name: 'Home' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-movie-outline"
        title="Movies"
        :to="{ name: 'Movies' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi mdi-television-classic"
        title="Series"
        :to="{ name: 'Series' }"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-star"
        title="Actors"
        :to="{ name: 'Persons' }"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup></script>
