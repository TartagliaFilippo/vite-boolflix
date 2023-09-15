<script>
import axios from "axios";
import { store } from "./data/store";

import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";

export default {
  data() {
    return {
      store,
    };
  },

  methods: {
    // metodo che chiama la lista dei film
    fetchMovies(inputTerm) {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            query: inputTerm,
            api_key: "ff4c9e21c1a084c962cab1b46ecc2f00",
          },
        })
        .then((response) => {
          store.moviesList = response.data.results.map((movie) => {
            const {
              id,
              title,
              original_title,
              original_language,
              vote_average,
              overview,
            } = movie;
            console.log(movie);
            return {
              id,
              title,
              original_title,
              original_language,
              vote_average,
              overview,
            };
          });
        });
    },

    // metodo che chiama le mie serie tv
    fetchSeries() {
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            query: "rings",
            api_key: "ff4c9e21c1a084c962cab1b46ecc2f00",
          },
        })
        .then((response) => {
          store.seriesList = response.data.results.map((serie) => {
            const {
              id,
              name,
              original_title,
              original_language,
              vote_average,
              overview,
            } = serie;

            return {
              id,
              name,
              original_title,
              original_language,
              vote_average,
              overview,
            };
          });
        });
    },
  },

  created() {
    // this.fetchMovies();
    // this.fetchSeries();
  },

  components: { HeaderApp, MainApp },
};
</script>

<template>
  <div class="container">
    <HeaderApp @search-input="fetchMovies" />
    <MainApp />
  </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
