<script>
export default {
  props: {
    filmInfo: {
      type: Object,
    },
  },
};
</script>
<template>
  <div class="cardFilm">
    <ul>
      <li>{{ filmInfo.original_name }}</li>
      <li>{{ filmInfo.name }}</li>
      <li>{{ filmInfo.original_language }}</li>
      <li>{{ filmInfo.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.cardFilm {
  width: calc((100% - 4rem) / 5);
}
</style>
