<script>
export default {};
</script>
<template>
  <div class="card">
    <div class="image">
      <img :src="store.baseURLimg + filmInfo.poster_path" />
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
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 360px;
  height: 400px;
  background: #000;
}
.card .image {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.card .image img {
  width: 100%;
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
  width: 70%; /*100%*/
  height: 100%;
  background: #ffc107;
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
}
.card:hover .details {
  transform: perspective(2000px) rotateY(0deg);
}
.card .details .center {
  padding: 20px;
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
