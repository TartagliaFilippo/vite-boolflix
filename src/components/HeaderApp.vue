<script>
import SearchBar from "./ui/SearchBar.Vue";

export default {
  components: { SearchBar },
};
</script>

<template>
  <div class="wrapper">
    <h1>BOOLFLIX</h1>
    <SearchBar></SearchBar>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;

  h1 {
    color: red;
  }
}
</style>
