<script>
export default {};
</script>
<template>
  <header>
    <div class="container">
      <div class="logo">BOOLFLIX</div>

      <div class="searchbar">
        <input type="text" />
        <button>Cerca</button>
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
    font-size: 1.5rem;
  }
}
</style>
