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
  <CardApp
    v-for="movie in store.moviesList"
    :key="movie.id"
    :data="movie"
  ></CardApp>
</template>

<style lang="scss" scoped></style>
