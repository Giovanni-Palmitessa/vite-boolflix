<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  props: {
    filmInfo: {
      type: Object,
    },
  },
};
</script>
<template>
  <div class="cardContent">
    <ul>
      <li>{{ filmInfo.original_title }}</li>
      <li>{{ filmInfo.title }}</li>
      <li>{{ filmInfo.original_language }}</li>
      <li>{{ filmInfo.vote_average }}</li>
      <img :src="store.baseURLimg + filmInfo.poster_path" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.cardContent {
  width: calc((100% - 4rem) / 5);
  margin-top: 1.5rem;
  img {
    width: 100%;
  }
}
</style>
