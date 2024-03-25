<script>
import Card from "./partials/Card.vue";
import { store } from "../data/store";
export default {
  components: {
    Card,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <Card />
  </div>
</template>

<style lang="scss" scoped></style>
