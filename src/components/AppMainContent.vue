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
      <div class="contents">
        <h2>Film</h2>
        <AppFilm
          v-for="films in store.filmList"
          :key="films.id"
          :filmInfo="films"
        />

        <h2>Serie TV</h2>
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
.contents {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
