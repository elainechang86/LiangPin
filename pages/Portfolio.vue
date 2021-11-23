<template>
  <p v-if="!isMobile()">
    <component :is="Portfolio" />
  </p>
  <p v-else>
    <component :is="PortfolioMobile" />
  </p>
</template>

    <script>
import Portfolio from "@/components/Portfolio";
import PortfolioMobile from "@/components/PortfolioMobile";

export default {
  components: {
    Portfolio,
    PortfolioMobile,
  },
  data() {
    return {
      Portfolio: "Portfolio",
      PortfolioMobile: "PortfolioMobile",
    };
  },
  methods: {
    isMobile() {
      if (process.client) {
        return window.innerWidth <= 1000;
      }
    },
  },
};
</script>


<style>
.frame-logo {
  position: absolute;
  margin-left: 2.8%;
  margin-top: 3%;
}

.port-ping {
  position: fixed;
  margin-left: 0;
  margin-top: 20%;
  width: 25%;
  padding: 0;
  z-index: 100;
}

body {
  overflow-x: hidden;
}

.main-row-port {
  background-image: url("~@/assets/portfolio/Bg.png");
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  display: block;
  position: fixed;
  background-color: #eeeeee;
  overflow-y: hidden;
  overflow-x: hidden;
  left: 0;
  top: 0;
}

.vertical-word-port {
  writing-mode: vertical-rl;
  text-orientation: upright;
  position: absolute;
  left: 19%;
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

.year-selection {
  text-align: right;
  padding: 0;
  position: relative;
  z-index: 99;
  height: 60vh;
  line-height: 96vh;
  margin-top: 12vh;
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

.year-card {
  text-align: right;
  padding: 0;
  position: relative;
  z-index: 99;
}

.port-col {
  margin-left: 10vw;
  text-align: right;
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
  right: -16%;
  top: 70vh;
  font-family: "Noto Serif TC";
  font-weight: bold;
  font-size: 16px;
  padding-right: 50px;
  line-height: 430%;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgb(217, 217, 217),
    rgb(217, 217, 217),
    rgb(217, 217, 217)
  );
  color: #14142b;
  text-align: right;
}

.more-post-port-special {
  right: -16%;
  top: 52vh;
}

.arrow-port {
  position: relative;
  right: -10%;
  bottom: 5%;
  z-index: 11;
}

.circle-port-small {
  position: relative;
  right: 0;
  top: 59vh;
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

.circle-port-small-special {
  top: 41vh;
}

.circle-port-all {
  position: relative;
  right: -12%;
  bottom: 76%;
  width: 55px;
  mix-blend-mode: difference;
  transform: rotate(270deg);
  cursor: pointer;
  transition: transform 0.5s;
}

.circle-port-all:hover {
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

@media only screen and (max-width: 1000px) {
  .frame-logo {
    position: absolute;
    width: 80px;
  }
  .port-ping {
    position: absolute;
    margin-left: 0;
    margin-top: 120px;
    width: 240px;
    padding: 0;
    z-index: 100;
    mix-blend-mode: difference;
  }
  .main-row-port {
    background-image: none;
    background-size: 100% 100%;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    display: block;
    position: fixed;
    background-color: #eeeeee;
    overflow-y: scroll;
  }
  .vertical-word-port {
    left: 80%;
    top: 20%;
    font-size: 24px;
    letter-spacing: 8px;
  }
  .circle-port {
    left: 78%;
    top: 20%;
    width: 60px;
  }
  .year-btn {
    font-size: 20px;
  }
  .year-btn-selected {
    font-size: 24px;
  }
  .year-card {
    height: 88vh;
    padding: 0 15px;
  }
  .port-col {
    margin: 0;
  }
  .more-post-port-smallscreen {
    left: 40vw;
    bottom: 0;
    top: 5vh;
    background-image: linear-gradient(
      to right,
      rgb(238, 238, 238),
      rgb(238, 238, 238),
      rgb(238, 238, 238)
    );
  }
  .circle-port-smallscreen {
    left: 35vw;
    top: -7vh;
    background-image: none;
    mix-blend-mode: difference;
  }
  .arrow-port {
    position: absolute;
    right: 40%;
    bottom: 11%;
    z-index: 11;
  }
  .footer-big {
    display: none;
  }
  .footer-menu {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.75px;
  }
  .footer-line {
    margin: 0 2%;
  }
  .none-small {
    display: none;
  }
}

@media only screen and (min-width: 1000px) {
  .none-big {
    display: none;
  }
  .footer-small {
    display: none;
  }
}
</style>
