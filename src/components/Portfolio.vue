<template>
  <b-row class="col-12 main-row-port">
    <img
      style="position: fixed; right: 0; height: 70%; width: 60%"
      src="../assets/portfolio/web.png"
    />
    <img
      style="position: fixed; top: 70%; right: 0; width: 60%"
      src="../assets/portfolio/web.png"
    />
    <img
      style="
        position: fixed;
        margin-left: 0;
        margin-top: 20%;
        width: 25%;
        padding: 0;
        z-index: 100;
      "
      src="../assets/portfolio/ping.png"
    />
    <a style="width: 10%"
      ><img
        style="position: fixed; margin-left: 2.8%; margin-top: 3%"
        src="../assets/mainPageImgs/Frame.png"
    /></a>
    <div>
      <p class="vertical-word-port">敦雅閣藝廊</p>
      <span><img src="../assets/about/circle.svg" class="circle-port" /></span>
    </div>
    <b-row>
      <b-col
        class="col-5"
        style="
          text-align: right;
          padding: 0;
          position: relative;
          z-index: 99;
          height: 95vh;
          line-height: 96vh;
        "
      >
        <div class="btn-group-vertical">
          <button
            type="button"
            class="btn year-btn year-btn-selected"
            v-on:click="
              AisHidden = false;
              BisHidden = true;
              CisHidden = true;
            "
          >
            2008-2010
          </button>
          <button
            type="button"
            class="btn year-btn"
            v-on:click="
              AisHidden = true;
              BisHidden = false;
              CisHidden = true;
            "
          >
            2011-2015
          </button>
          <button
            type="button"
            class="btn year-btn"
            v-on:click="
              AisHidden = true;
              BisHidden = true;
              CisHidden = false;
            "
          >
            2016-2020
          </button>
        </div>
      </b-col>
      <b-col
        class="col-5"
        style="
          text-align: right;
          padding: 0;
          position: relative;
          z-index: 99;
          height: 95vh;
        "
      >
        <transition name="slide">
          <div v-show="!AisHidden">
            <b-row style="margin-top: 5%">
              <b-col style="margin-left: 10vw; text-align: right"
                ><img src="../assets/portfolio/2008-1.png" style="width: 90%" />
                <img
                  src="../assets/portfolio/2008-2.png"
                  style="width: 90%; margin-top: 8%"
              /></b-col>
              <b-col style="text-align: left">
                <img src="../assets/portfolio/2008-3.png" style="width: 70%"
              /></b-col>
              <a>
                <img src="../assets/portfolio/arrow.png" class="arrow-port" />
                <span
                  ><p class="more-post-port">查看全部</p>
                  <img
                    src="../assets/mainPageImgs/circle.svg"
                    class="circle-port-small"
                /></span>
              </a>
            </b-row>
          </div>
        </transition>
        <transition name="slide">
          <div v-show="!BisHidden">
            <img
              src="../assets/portfolio/2011-1.png"
              style="width: 80%; margin-top: 5%"
            />
            <b-row style="margin-top: 5%">
              <b-col style="margin-left: 10vw; text-align: right">
                <img src="../assets/portfolio/2011-2.png" style="width: 100%"
              /></b-col>
              <b-col style="text-align: left">
                <img src="../assets/portfolio/2011-3.png" style="width: 100%"
              /></b-col>
              <a>
                <img src="../assets/portfolio/arrow.png" class="arrow-port" />
                <span
                  ><p class="more-post-port">查看全部</p>
                  <img
                    src="../assets/mainPageImgs/circle.svg"
                    class="circle-port-small"
                /></span>
              </a>
            </b-row>
          </div>
        </transition>
        <transition name="slide">
          <div v-show="!CisHidden">
            <b-row style="margin-top: 10%">
              <b-col style="margin-left: 10vw; text-align: right">
                <img src="../assets/portfolio/2016-1.png" style="width: 70%"
              /></b-col>
              <b-col style="text-align: left">
                <img src="../assets/portfolio/2016-2.png" style="width: 100%"
              /></b-col>
              <a>
                <img src="../assets/portfolio/arrow.png" class="arrow-port" />
                <span
                  ><p class="more-post-port">查看全部</p>
                  <img
                    src="../assets/mainPageImgs/circle.svg"
                    class="circle-port-small"
                /></span>
              </a>
            </b-row>
          </div>
        </transition>
      </b-col>
    </b-row>
  </b-row>
</template>
    
<script>
import $ from "jquery";

export default {
  name: "Portfolio",
  data() {
    return {
      AisHidden: false,
      BisHidden: true,
      CisHidden: true,
    };
  },
  mounted() {
    $(".year-btn").click(function (event) {
      $(this)
        .addClass("year-btn-selected")
        .siblings()
        .removeClass("year-btn-selected");
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200;300;400;500;600;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap");

body {
  overflow-x: hidden;
}

.main-row-port {
  background-image: url("../assets/portfolio/Bg.png");
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: block;
  position: fixed;
  background-color: #eeeeee;
  overflow-y: hidden;
}

.vertical-word-port {
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: absolute;
  left: 17%;
  top: 20%;
  font-family: "Noto Serif JP";
  font-weight: bold;
  font-size: 40px;
  line-height: 125%;
  letter-spacing: 1px;
  color: #14142b;
}

.circle-port {
  position: absolute;
  left: 18%;
  top: 18%;
  width: 6.5vw;
  mix-blend-mode: difference;
}

a {
  text-decoration: none;
  color: black;
}

.year-btn {
  background-color: none;
  font-family: "Noto Serif JP";
  font-weight: bold;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: 1px;
  color: #14142b;
  opacity: 0.25;
}

.year-btn .year-btn:focus {
  outline: none;
}

.year-btn-selected {
  font-size: 32px;
  opacity: 1;
}

button:focus {
  outline: none !important;
  box-shadow: none !important;
}

.slide-leave-active,
.slide-enter-active {
  transition: all 0.5s ease;
}

.slide-enter-from {
  transform: translateY(-100%);
}

.slide-leave-to {
  transform: translateY(100%);
}

.more-post-port {
  position: relative;
  right: -14%;
  bottom: 30%;
  font-family: "Noto Serif TC";
  font-weight: bold;
  font-size: 16px;
  padding-right: 50px;
  line-height: 430%;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0),
    rgb(217, 217, 217),
    rgb(217, 217, 217),
    rgb(217, 217, 217)
  );
  color: #14142b;
  text-align: right;
}

.arrow-port {
  position: relative;
  right: -10%;
  bottom: 5%;
  z-index: 11;
}

.circle-port-small {
  position: relative;
  right: -12%;
  bottom: 76%;
  width: 55px;
  mix-blend-mode: difference;
  transform: rotate(270deg);  
  cursor: pointer;
  transition: transform 0.5s;
}

.circle-port-small:hover {
  animation: fadeInOut 0.5s linear forwards;
  transform: scale(1.2);
}

@keyframes fadeInOut {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
</style>
