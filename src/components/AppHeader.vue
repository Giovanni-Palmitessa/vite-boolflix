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
        <select v-model="store.searchGenre">
          <option value="">Seleziona un genere per i film</option>
          <option
            v-for="genre in store.genres"
            :key="genre.id"
            :value="genre.id"
          >
            {{ genre.name }}
          </option>
        </select>

        <select v-model="store.searchTV">
          <option value="">Seleziona un genere per le serie</option>
          <option
            v-for="genreTV in store.genresTV"
            :key="genreTV.id"
            :value="genreTV.id"
          >
            {{ genreTV.name }}
          </option>
        </select>
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
    background-color: red;
    border-radius: 5px;
    margin-left: 10px;
    padding: 0.8rem;
    color: white;
    font-weight: 700;
  }
}
</style>
