<script>
import { store } from "../../data/store";
import CardApp from "./CardApp.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { CardApp },
};
</script>

<template>
  <h2>Films:</h2>
  <CardApp
    v-for="movie in store.moviesList"
    :key="movie.id"
    :data="movie"
  ></CardApp>
  <h2>Series:</h2>
  <CardApp
    v-for="serie in store.seriesList"
    :key="serie.id"
    :data="serie"
  ></CardApp>
</template>

<style lang="scss" scoped></style>
