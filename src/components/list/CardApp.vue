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
  <div class="card" style="width: 18rem">
    <img src="" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <img :src="data.original_language" alt="" />
      <p>{{ data.original_title }}</p>
      <p>{{ data.overview }}</p>
      <p>{{ data.vote_average }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
