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
            name: this.store.searchStr,
            status: this.store.searchStatus,
          },
        })
        .then((response) => (this.store.characterList = response.data.results));
    },
  },
};
</script>

<template>
  <AppHeader />
  <AppMainContent />
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;
</style>
