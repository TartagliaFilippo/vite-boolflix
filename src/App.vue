<script>
import axios from "axios";
import { store } from "./data/store";

import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";

export default {
  name: "Flag",

  data() {
    return {
      store,
    };
  },

  methods: {
    fetchMoviesNSeries(inputTerm) {
      // metodo che chiama la lista dei film

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
              backdrop_path,
            } = movie;
            return {
              id,
              title,
              original_title,
              original_language:
                "../../../public/bandiere/" + original_language + ".png",
              vote: Math.ceil(vote_average / 2),
              overview,
              image: backdrop_path,
            };
          });
        });

      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            query: inputTerm,
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
              backdrop_path,
            } = serie;
            console.log(serie);
            return {
              id,
              title: name,
              original_title,
              original_language:
                "../../../public/bandiere/" + original_language + ".png",
              vote: Math.ceil(vote_average / 2),
              overview,
              image: backdrop_path,
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
    <HeaderApp @search-input="fetchMoviesNSeries" />
    <MainApp />
  </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
