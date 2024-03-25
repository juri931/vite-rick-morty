import { reactive } from "vue";

export const store = reactive({
  mainTitle: "- Rick & Morty characters -",
  apiUrl: "https://rickandmortyapi.com/api/character",
  cardsList: [],
});
