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
  <div class="container">
    <AppFilm />
  </div>
</template>

<style lang="scss" scoped></style>
