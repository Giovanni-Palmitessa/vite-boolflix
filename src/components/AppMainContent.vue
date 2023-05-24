<script>
import AppFilm from "./AppFilm.vue";
import { store } from "../store";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppFilm,
  },
};
</script>
<template>
  <main>
    <div class="container">
      <div class="contents">
        <AppFilm
          v-for="films in store.filmList"
          :key="films.id"
          :filmInfo="films"
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
