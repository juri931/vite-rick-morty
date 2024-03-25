<script>
import { store } from "../data/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h1 class="main-title my-4">{{ store.mainTitle }}</h1>
</template>

<style lang="scss" scoped></style>
