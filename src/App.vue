<script>
import AppHeader from "./components/AppHeader.vue";
import AppMainContent from "./components/AppMainContent.vue";

export default {
  components: {
    AppHeader,
    AppMainContent,
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
