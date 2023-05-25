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

<!-- DA QUI GIUSTO -->
<!-- <template>
  <div class="cardContent">
    <ul>
      <li>{{ filmInfo.original_title }}</li>
      <li>{{ filmInfo.title }}</li>
      <li>{{ filmInfo.original_language }}</li>
      <li>{{ filmInfo.vote_average }}</li>
      <img :src="store.baseURLimg + filmInfo.poster_path" />
    </ul>
  </div>
</template> -->
<!-- A QUI GIUSTO -->

<template>
  <div class="card">
    <div class="image">
      <img :src="store.baseURLimg + filmInfo.poster_path" alt="No Image" />
    </div>
    <div class="details">
      <div class="center">
        <h2>
          {{ filmInfo.title }}<br /><span>{{ filmInfo.original_title }}</span>
        </h2>
        <p>{{ filmInfo.original_language }}</p>
        <p>{{ filmInfo.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// ---DA QUI GIUSTO
// .cardContent {
//   width: calc((100% - 4rem) / 5);
//   margin-top: 1.5rem;
//   img {
//     width: 100%;
//   }
// }
// ---A QUI GIUSTO

.card {
  position: relative;
  width: calc((100% - 4rem) / 5);
  height: 400px;
  background: #000;
  border: 1px solid black;
}
.card .image {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.card .image img {
  width: 100%;
  height: 100%;
  transition: 0.5s;
}
.card:hover .image img {
  opacity: 0.5;
  transform: translateX(30%); /*100%*/
}
.card .details {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 70%; /*100%*/
  height: 100%;
  background: red;
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
}
.card:hover .details {
  transform: perspective(2000px) rotateY(0deg);
}
.card .details .center {
  padding: 40px;
  max-width: 100%;
  text-align: center;
  background: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.card .details .center h2 {
  margin: 0;
  padding: 0;
  color: #ff3636;
  line-height: 20px;
  font-size: 20px;
  text-transform: uppercase;
}
.card .details .center h2 span {
  font-size: 14px;
  color: #262626;
}
.card .details .center p {
  margin: 10px 0;
  padding: 0;
  color: #262626;
}
</style>
