<script>
export default {
  props: {
    currentPage: 0,
    totalPages: 0,
    changePage: {
      type: Function,
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.changePage(this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.changePage(this.currentPage + 1);
      }
    },
    onPageClick(page) {
      this.changePage(page);
    },
    pageClass(page) {
      if (page < this.currentPage - 1) {
        return "page-item disabled";
      }
      if (page === this.currentPage) {
        return "page-item active";
      }
      return "page-item";
    },
  },
  computed: {
    startPage() {
      return Math.floor(this.currentPage / 10) * 10 + 1;
    },
    endPage() {
      return Math.min(this.startPage + 9, this.totalPages);
    },
    prevPageClass() {
      return this.currentPage === 1 ? "page-item disabled" : "page-item";
    },
    nextPageClass() {
      return this.currentPage === this.totalPages
        ? "page-item disabled"
        : "page-item";
    },
    pages() {
      const pages = [];
      for (let page = this.startPage; page <= this.endPage; page++) {
        pages.push(page);
      }
      return pages;
    },
  },
};
</script>

<template>
  <nav class="d-flex justify-content-center mt-4">
    <ul class="pagination">
      <li class="page-item" :class="prevPageClass">
        <a class="page-link" href="#" @click.prevent="prevPage">Previous</a>
      </li>
      <li
        class="page-item"
        v-for="page in pages"
        :key="page"
        :class="pageClass(page)"
      >
        <a class="page-link" href="#" @click.prevent="onPageClick(page)">{{
          page
        }}</a>
      </li>
      <li class="page-item" :class="nextPageClass">
        <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/pagination";
</style>
