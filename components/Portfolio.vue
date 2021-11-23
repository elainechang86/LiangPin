<template>
  <b-row class="col-12 main-row-port">
    <img
      style="position: fixed; right: 0; height: 70%; width: 60%"
      src="~@/assets/portfolio/web.png"
    />
    <img
      style="position: fixed; top: 70%; right: 0; width: 60%"
      src="~@/assets/portfolio/web.png"
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
      src="~@/assets/portfolio/ping.png"
    />
    <a style="width: 10%" href="/"
      ><img
        class="frame-logo"
        src="~@/assets/mainPageImgs/Frame.png"
    /></a>
    <div>
      <p class="vertical-word-port">敦雅閣藝廊</p>
      <span><img src="~@/assets/about/circle.svg" class="circle-port" /></span>
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
        <!-- <transition name="slide"> -->
          <div v-show="!AisHidden">
            <b-row style="margin-top: 5%">
              <b-col style="margin-left: 2vw; text-align: right"
                ><img src="~@/assets/portfolio/2008-1.png" style="width: 90%" />
                <img
                  src="~@/assets/portfolio/2008-2.png"
                  style="width: 90%; margin-top: 8%"
              /></b-col>
              <b-col style="text-align: left">
                <img src="~@/assets/portfolio/2008-3.png" style="width: 70%"
              /></b-col>
              <a>
                <img src="~@/assets/portfolio/arrow.png" class="arrow-port" />
                <span
                  ><p class="more-post-port">查看全部</p>
                  <img
                    src="~@/assets/mainPageImgs/circle.svg"
                    class="circle-port-small"
                /></span>
              </a>
            </b-row>
          </div>
        <!-- </transition>
        <transition name="slide"> -->
          <div v-show="!BisHidden">
            <img
              src="~@/assets/portfolio/2011-1.png"
              style="width: 80%; margin-top: 5%"
            />
            <b-row style="margin-top: 5%">
              <b-col style="margin-left: 2vw; text-align: right">
                <img src="~@/assets/portfolio/2011-2.png" style="width: 100%"
              /></b-col>
              <b-col style="text-align: left">
                <img src="~@/assets/portfolio/2011-3.png" style="width: 100%"
              /></b-col>
              <a>
                <img src="~@/assets/portfolio/arrow.png" class="arrow-port" />
                <span
                  ><p class="more-post-port more-post-port-special">查看全部</p>
                  <img
                    src="~@/assets/mainPageImgs/circle.svg"
                    class="circle-port-small circle-port-small-special"
                /></span>
              </a>
            </b-row>
          </div>
        <!-- </transition>
        <transition name="slide"> -->
          <div v-show="!CisHidden">
            <b-row style="margin-top: 10%">
              <b-col style="margin-left: 2vw; text-align: right">
                <img src="~@/assets/portfolio/2016-1.png" style="width: 70%"
              /></b-col>
              <b-col style="text-align: left">
                <img src="~@/assets/portfolio/2016-2.png" style="width: 100%"
              /></b-col>
              <a>
                <img src="~@/assets/portfolio/arrow.png" class="arrow-port" />
                <span
                  ><p class="more-post-port">查看全部</p>
                  <img
                    src="~@/assets/mainPageImgs/circle.svg"
                    class="circle-port-small"
                /></span>
              </a>
            </b-row>
          </div>
        <!-- </transition> -->
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
