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
  <div class="wrapper">
    <h2 class="my-3" v-show="store.moviesList.length">Films:</h2>
    <div class="list-movies mb-5">
      <CardApp
        v-for="movie in store.moviesList"
        :key="movie.id"
        :data="movie"
      ></CardApp>
    </div>

    <h2 class="my-3" v-show="store.seriesList.length">Series:</h2>
    <div class="list-series">
      <CardApp
        v-for="serie in store.seriesList"
        :key="serie.id"
        :data="serie"
      ></CardApp>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list-movies,
.list-series {
  display: flex;
  flex-wrap: wrap;
}
</style>
