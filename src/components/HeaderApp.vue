<script>
import SearchBar from "./ui/SearchBar.Vue";

export default {
  emits: ["search-input"],

  methods: {
    emitsCall(inputTerm) {
      this.$emit("search-input", inputTerm);
    },
  },

  components: { SearchBar },
};
</script>

<template>
  <div class="wrapper">
    <h1>BOOLFLIX</h1>
    <SearchBar @search-input="emitsCall"></SearchBar>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 20px 0 30px;

  h1 {
    color: red;
    margin: 0;
  }
}
</style>
