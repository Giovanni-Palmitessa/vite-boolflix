<script>
import { store } from "../store";
export default {
  methods: {
    ConvertVote(vote) {
      const convertedVote = Math.ceil((vote / 10) * 5);
      return convertedVote;
    },
  },
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
  <div class="card">
    <div class="image">
      <img
        v-if="filmInfo.poster_path"
        :src="store.baseURLimg + filmInfo.poster_path"
        :alt="filmInfo.poster_path"
      />
      <img v-else src="../assets/img/fallback-image.png" alt="No Image" />
    </div>
    <div class="details">
      <div class="center">
        <h2>
          {{ filmInfo.title }}<br /><span>{{ filmInfo.original_title }}</span>
        </h2>
        <p>
          Lingua:
          <lang-flag :iso="filmInfo.original_language" :squared="false" />
          <span class="lang-text">{{ filmInfo.original_language }}</span>
        </p>

        <font-awesome-icon
          class="star"
          v-for="star in ConvertVote(filmInfo.vote_average)"
          :key="star"
          :icon="['fas', 'star']"
        />
        <template v-for="star in 5 - ConvertVote(filmInfo.vote_average)">
          <font-awesome-icon
            class="star"
            :key="star"
            :icon="['far', 'star']"
            v-if="ConvertVote(filmInfo.vote_average) < 5"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  width: calc((100% - 3rem) / 4);
  height: 500px;
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
  width: 80%; /*100%*/
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
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
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
.lang-text {
  display: none;
}

.flag-icon-undefined {
  display: none;
}

.flag-icon-undefined + .lang-text {
  display: inline;
}

.star {
  color: gold;
}
</style>
