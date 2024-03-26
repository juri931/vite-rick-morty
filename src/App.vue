<script>
import axios from "axios";
import { store } from "./data/store";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Pagination from "./components/partials/Pagination.vue";
export default {
  components: {
    Header,
    Main,
    Pagination,
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
  <Header />
  <Main />
  <Pagination />
</template>

<style lang="scss">
@use "./assets/scss/main.scss";
</style>
