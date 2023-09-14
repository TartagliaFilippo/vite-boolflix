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
    fetchCard() {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?query=rings&api_key=ff4c9e21c1a084c962cab1b46ecc2f00"
        )
        .then((response) => {
          const cardsData = response.data.results.map((card) => {
            const {
              id,
              title,
              original_title,
              original_language,
              vote_average,
              overview,
            } = card;
            return {
              id,
              title,
              original_title,
              original_language,
              vote_average,
              overview,
            };
          });

          store.mappedList = cardsData;
        });
    },
  },

  create() {
    this.fetchCard();
  },

  components: { HeaderApp, MainApp },
};
</script>

<template>
  <div class="container"><HeaderApp></HeaderApp> <MainApp></MainApp></div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
@use "bootstrap/scss/bootstrap";
</style>
