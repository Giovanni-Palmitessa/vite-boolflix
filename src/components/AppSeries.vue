<script>
export default {
  props: {
    seriesInfo: {
      type: Object,
    },
  },
};
</script>
<template>
  <div class="cardContent">
    <ul>
      <li>{{ seriesInfo.original_name }}</li>
      <li>{{ seriesInfo.name }}</li>
      <li>{{ seriesInfo.original_language }}</li>
      <li>{{ seriesInfo.vote_average }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.cardContent {
  width: calc((100% - 4rem) / 5);
  margin-top: 1.5rem;
}
</style>
