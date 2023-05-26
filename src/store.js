import { reactive } from "vue";

export const store = reactive({
  filmList: [],
  seriesList: [],
  genres: [],
  myKey: "b94e84e10d77f413fe8fd376740d6ee5",
  baseURLimg: "https://image.tmdb.org/t/p/w342",
  searchStr: "",
});
