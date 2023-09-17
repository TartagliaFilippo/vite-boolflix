<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
    };
  },

  props: { data: Object },
};
</script>

<template>
  <div class="card">
    <img
      :src="'https://image.tmdb.org/t/p/w500' + data.image"
      class="card-img-top"
      alt=""
    />
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <img :src="data.original_language" alt="" />
      <p>{{ data.original_title }}</p>
      <p class="overview-text">{{ data.overview }}</p>
      <font-awesome-icon icon="fa-solid fa-star" v-for="star in data.vote" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  max-height: 350px;
  width: 18%;
  cursor: pointer;

  .card-img-top {
    height: 350px;
    width: 100%;
    min-height: 100%;
    object-fit: contain;
  }

  .card-body {
    display: none;

    .overview-text {
      font-family: "Montserrat", sans-serif;
      font-size: 12px;
    }
  }
}

.card:hover {
  background-color: whitesmoke;
  overflow: auto;
  .card-img-top {
    display: none;
  }

  .card-body {
    display: block;
  }
}
</style>
