<script>
import AppHeader from "./components/AppHeader.vue";
import AppMainContent from "./components/AppMainContent.vue";
import axios from "axios";
import { store } from "./store";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMainContent,
  },
  methods: {
    requestDataFromApi() {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: this.store.myKey,
            include_adult: false,
            language: "it-IT",
            query: this.store.searchStr,
            genre_ids: this.store.searchGenre,
          },
          headers: {
            accept: "application/json",
          },
        })
        .then((response) => (this.store.filmList = response.data.results));

      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: this.store.myKey,
            include_adult: false,
            language: "it-IT",
            query: this.store.searchStr,
            genre_ids: this.store.searchGenre,
          },
          headers: {
            accept: "application/json",
          },
        })
        .then((response) => (this.store.seriesList = response.data.results));

      this.store.searchStr = "";
    },
  },
  created() {
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list", {
        params: {
          api_key: this.store.myKey,
        },
        headers: {
          accept: "application/json",
        },
      })
      .then((response) => (this.store.genres = response.data.genres));

    axios
      .get("https://api.themoviedb.org/3/genre/tv/list", {
        params: {
          api_key: this.store.myKey,
        },
        headers: {
          accept: "application/json",
        },
      })
      .then((response) => (this.store.genresTV = response.data.genres));
  },
};
</script>

<template>
  <AppHeader @performSearch="requestDataFromApi" />
  <AppMainContent />
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
