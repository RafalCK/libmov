<template>
  <v-bottom-navigation grow>
    <v-btn :to="{ name: 'Home' }">
      <v-icon>mdi-home-outline</v-icon>

      <span>Home</span>
    </v-btn>

    <v-btn :to="{ name: 'Movies' }">
      <v-icon>mdi-movie-outline</v-icon>

      <span>Movies</span>
    </v-btn>

    <v-btn :to="{ name: 'Series' }">
      <v-icon>mdi mdi-television-classic</v-icon>

      <span>Series</span>
    </v-btn>

    <v-btn :to="{ name: 'Persons' }">
      <v-icon>mdi-account-star</v-icon>

      <span>Actors</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup></script>

<style lang="scss" scoped></style>
