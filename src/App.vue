<script>
import axios from "axios";
import { store } from "./data/store";

import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";

export default {
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
