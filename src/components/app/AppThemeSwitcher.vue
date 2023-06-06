<template>
  <v-switch
    inset
    hide-details
    v-model="darkMode"
    @change="toggleThemeDark"
    true-icon="mdi-weather-night"
    false-icon="mdi-weather-sunny"
  ></v-switch>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const darkMode = ref(true);

const toggleThemeDark = () => {
  theme.global.name.value = darkMode.value ? "customTheme" : "light";
};
</script>
