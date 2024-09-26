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
    Pagination
  },
  data() {
    return {
      store
    };
  },
  methods: {
    getApi() {
      axios
        .get(this.store.apiUrl, {
          params: {
            name: "",
            status: ""
          }
        })
        .then((result) => {
          store.cardsList = result.data.results;
          store.cardsList.forEach((card) => {
            if (!store.statusList.includes(card.status)) {
              store.statusList.push(card.status);
            }
          });
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  },
  mounted() {
    this.getApi();
  }
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
