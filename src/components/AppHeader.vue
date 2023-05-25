<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    emitSearchEvent() {
      this.$emit("performSearch");
    },
  },
};
</script>
<template>
  <header>
    <div class="container">
      <div class="logo">BOOLFLIX</div>

      <div class="searchbar">
        <input
          class="inputSearch"
          type="text"
          placeholder="Cerca qualcosa da guardare..."
          v-model="store.searchStr"
          @keyup.enter="emitSearchEvent"
        />
        <button @click="emitSearchEvent">Cerca</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 100px;
  background-color: black;
  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    color: red;
    font-size: 1.8rem;
    font-weight: 700;
    &:hover {
      cursor: pointer;
    }
  }
  .inputSearch {
    width: 300px;
    padding: 0.7rem 2rem;
  }
  button {
    padding: 0.7rem;
  }
}
</style>
