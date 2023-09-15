<script>
export default {
  data() {
    return {
      inputTerm: "",
    };
  },

  emits: ["search-input"],
};
</script>

<template>
  <div class="input-group mb-3">
    <input
      v-model="inputTerm"
      type="text"
      class="form-control"
      placeholder="Cerca..."
    />
    <button
      @click="$emit('search-input', inputTerm)"
      class="btn btn-outline-secondary"
      type="button"
      id="button-addon2"
    >
      Button
    </button>
  </div>
</template>

<style lang="scss" scoped>
.input-group {
  width: 30%;
}
</style>
