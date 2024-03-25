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
  <div>{{ store.mainTitle }}</div>
</template>

<style lang="scss" scoped></style>
