<template>
  <b-row class="col-12 main-row">
    <router-view />
  </b-row>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
body {
  overflow-x: hidden;
}

.main-row {
  width: 100vw;
  padding: 0;
  margin: 0;
  display: inline-block;
  background-color: #eeeeee;
  background-image: url("./assets/portfolio/Bg.png");
  background-size: 100% 100%;
  overflow: hidden;
}
</style>
