<script>
import axios from "axios";
import { store } from "./data/store";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getApi() {
      axios
        .get(this.store.apiUrl, {
          params: {
            num: 12,
            offset: 0,
          },
        })
        .then((result) => {
          console.log(result.data.results);
          this.store.cardsList = result.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <div>ciao</div>
</template>

<style lang="scss" scoped>
@use "./assets/scss/main.scss";
</style>
