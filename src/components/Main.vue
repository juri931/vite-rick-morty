<script>
import Card from "./partials/Card.vue";
import { store } from "../data/store";
import Pagination from "./partials/Pagination.vue";
export default {
  components: {
    Card,
    Pagination
  },
  data() {
    return {
      store,
      searchName: "",
      currentPage: 1,
      pageSize: 18
    };
  },
  computed: {
    filteredCards() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.store.cardsList
        .slice(start, start + this.pageSize)
        .filter((card) =>
          card.name.toLowerCase().includes(this.searchName.toLowerCase())
        );
    }
  }
};
</script>

<template>
  <div class="bar">
    <input
      v-model="searchName"
      type="text"
      class="form-control"
      placeholder="Search name"
    />
  </div>

  <div class="container text-center my-5">
    <div class="row row-cols-3">
      <Card
        v-for="card in filteredCards"
        :key="card.id"
        :name="card.name"
        :status="card.status"
        :species="card.species"
        :image="card.image"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
