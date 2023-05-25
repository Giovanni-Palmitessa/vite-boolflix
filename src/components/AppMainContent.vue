<script>
import AppFilm from "./AppFilm.vue";
import AppSeries from "./AppSeries.vue";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppFilm,
    AppSeries,
  },
};
</script>
<template>
  <main>
    <div class="container">
      <h2>Film</h2>
      <div class="contents">
        <AppFilm
          v-for="films in store.filmList"
          :key="films.id"
          :filmInfo="films"
        />
      </div>

      <h2>Serie TV</h2>
      <div class="contents">
        <AppSeries
          v-for="series in store.seriesList"
          :key="series.id"
          :seriesInfo="series"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding-bottom: 2rem;
  height: calc(100vh - 100px);
  overflow-y: auto;
  background-color: rgb(57, 52, 52);
}
h2 {
  padding-top: 2rem;
  color: white;
  font-size: 2rem;
  font-weight: 700;
}
.contents {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
