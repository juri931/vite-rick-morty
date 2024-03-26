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
  <div class="bar">
    <input type="text" class="form-control" placeholder="Search name" />
    <button class="btn btn-primary">Search</button>
    <div class="chevron">MENU</div>
  </div>

  <div class="container text-center my-5">
    <div class="row row-cols-3">
      <Card
        v-for="card in this.store.cardsList"
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
