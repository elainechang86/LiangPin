<template>
  <b-row class="col-12 main-row">
    <img
      style="position: absolute; margin-left: 15%; margin-top: 16%; width: 25%"
      src="../assets/mainPageImgs/Liang.png"
    />
    <img
      style="position: absolute; margin-top: 22%; width: 56%"
      src="../assets/mainPageImgs/web.png"
    />
    <img
      style="
        position: absolute;
        margin-top: 80%;
        right: 0;
        width: 30%;
        padding: 0;
      "
      src="../assets/mainPageImgs/Ping.png"
    />
    <img
      style="
        position: absolute;
        margin-top: 140%;
        left: 12%;
        width: 30%;
        padding: 0;
      "
      src="../assets/mainPageImgs/Duen.png"
    />
    <a style="width: 10%"
      ><img
        style="position: absolute; margin-left: 2.8%; margin-top: 3%"
        src="../assets/mainPageImgs/Frame.png"
    /></a>
    <b-col class="col-10 offset-3" style="padding-left: 10%; margin-top: 10%">
      <b-row class="col-12">
        <b-col>
          <b-card
            class="post-card"
            overlay
            img-src="../src/assets/mainPageImgs/post1.png"
            img-alt="Card Image"
            text-variant="white"
          >
            <b-card-body>
              <div class="card-mask" />
              <b-card-title class="card-text-top"
                >學習書法必須經歷的3個歷程
                <div style="position: relative; height: 10px" />
                <span style="card-text-middle"
                  >自從甲骨文被應用以來，書法的字體經歷了由篆書到隸書、草書、行書、楷書發展階段。</span
                ></b-card-title
              >
              <b-card-text class="card-text-bottom"> July 8, 2020 </b-card-text>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            class="post-card"
            overlay
            img-src="../src/assets/mainPageImgs/post2.png"
            img-alt="Card Image"
            text-variant="white"
          >
            <b-card-body>
              <div class="card-mask" />
              <b-card-title class="card-text-top"
                >你所沒注意的5種書法應用層面 – 書法應用
                <div style="position: relative; height: 10px" />
                <span style="card-text-middle"
                  >良品敦法彙整5種書法生活美學的應用層面來跟大家分享。</span
                ></b-card-title
              >
              <b-card-text class="card-text-bottom"> July 8, 2020 </b-card-text>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            class="post-card"
            overlay
            img-src="../src/assets/mainPageImgs/post3.png"
            img-alt="Card Image"
            text-variant="white"
          >
            <b-card-body>
              <div class="card-mask" />
              <div class="card-mask" />
              <b-card-title class="card-text-top"
                >如何把書法學好的四個關鍵
                <div style="position: relative; height: 10px" />
                <span style="card-text-middle"
                  >到底怎麼避免三分鐘熱度? 到底書法的興趣要如何培養?
                  到底要如何把書法學好?
                  以下分享4個關鍵，不僅讓你學好書法，還能一生受用無窮。</span
                ></b-card-title
              >
              <b-card-text class="card-text-bottom"> July 8, 2020 </b-card-text>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
      <b-table
        hover
        :fields="fields"
        :items="items"
        class="table table-borderless"
        style="margin-top: 40px; margin-left: 100px"
        thead-class="hidden_header"
      ></b-table>
    </b-col>
    <b-row>
      <b-col
        class="col-3 offset-9"
        style="vertical-align: middle; text-align: right; margin-top: 30px"
      >
        <a>
          <p class="more-post">
            更多文章
            <img src="../assets/mainPageImgs/arrow.svg" class="arrow" />
          </p>
          <span
            ><img src="../assets/mainPageImgs/circle.svg" class="circle"
          /></span>
        </a>
      </b-col>
    </b-row>
    <b-row
      class="col-7 offset-1 align-items-center"
      style="
        margin-top: 10%;
        position: relative;
        z-index: 998;
        margin-left: 14%;
      "
    >
      <b-col>
        <img
          src="../assets/mainPageImgs/artpiece1-1.jpg"
          class="d-block img-fluid"
        />
      </b-col>
      <b-col>
        <img src="../assets/mainPageImgs/artpiece2-1.jpg" /><img
          src="../assets/mainPageImgs/artpiece2-2.jpg"
          class="d-block img-fluid"
        />
      </b-col>
      <b-col>
        <img
          src="../assets/mainPageImgs/artpiece3-1.jpg"
          class="d-block img-fluid"
        />
      </b-col>
      <b-col>
        <img
          src="../assets/mainPageImgs/artpiece4-1.jpg"
          class="d-block img-fluid"
        />
      </b-col>
      <b-col>
        <img
          src="../assets/mainPageImgs/artpiece5-1.jpg"
          class="d-block img-fluid"
        />
        <img
          src="../assets/mainPageImgs/artpiece5-2.jpg"
          class="d-block img-fluid"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        class="col-3 offset-1"
        style="vertical-align: middle; text-align: right; margin-top: -6%"
      >
        <a>
          <p class="more-post">
            更多作品
            <img src="../assets/mainPageImgs/arrow.svg" class="arrow" />
          </p>
          <span
            ><img src="../assets/mainPageImgs/circle.svg" class="circle"
          /></span>
        </a>
      </b-col>
    </b-row>
    <b-col
      class="col-10 offset-2"
      style="margin-top: 24%; text-align: right; padding: 0"
    >
      <img src="../assets/mainPageImgs/chou.png" style="width: 67vw" />
    </b-col>
    <b-col
      class="col-7 offset-5"
      style="margin-top: 3%; padding-left: 5%; text-align: left"
    >
      <p class="chou">書法世界浩瀚無邊，書法之事樂趣無窮，</p>
      <p class="chou">也許良品敦法是我在書法世界中的最終里程碑。</p>
    </b-col>
    <b-row>
      <b-col
        class="col-3 offset-9"
        style="vertical-align: middle; text-align: right; margin-top: 30px"
      >
        <a>
          <p class="more-post">
            關於周良敦
            <img src="../assets/mainPageImgs/arrow.svg" class="arrow" />
          </p>
          <span
            ><img src="../assets/mainPageImgs/circle.svg" class="circle"
          /></span>
        </a>
      </b-col>
    </b-row>
    <b-row style="margin: 0; padding: 0">
      <b-col
        class="col-12"
        style="
          height: 35vh;
          margin: 25vh 0 0 0;
          background-color: rgba(255, 255, 255, 0.5);
          padding: 0;
        "
      >
        <b-row>
          <b-col class="col-7" style="margin-left: 15%; margin-top: 10vh">
            <footer>
              <img src="../assets/mainPageImgs/footerLogo.png" />
              <div style="margin-top: 3vh">
                <a class="footer-menu">首頁</a><span class="footer-line">|</span
                ><a class="footer-menu">關於周老師</a
                ><span class="footer-line">|</span
                ><a class="footer-menu">良文共閱專區</a
                ><span class="footer-line">|</span
                ><a class="footer-menu">敦雅閣藝廊</a
                ><span class="footer-line">|</span
                ><a class="footer-menu">FOLLOW US ON</a
                ><a
                  ><img
                    src="../assets/mainPageImgs/facebook.png"
                    class="footer-icon" /></a
                ><a
                  ><img
                    src="../assets/mainPageImgs/instagram.png"
                    class="footer-icon"
                /></a>
              </div>
              <p class="copyright">
                © 2021 Copyright 良品敦法 Liang Pin Dun Fa
              </p>
            </footer>
          </b-col>
          <b-col class="col-1" style="margin-left: 8%; margin-top: 12vh">
            <a
              ><img src="../assets/mainPageImgs/toTop.png" style="width: 5.5vw"
            /></a>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-row>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      fields: [
        { key: "postTime", tdClass: "table-left" },
        { key: "post", tdClass: "table-right" },
      ],
      items: [
        {
          postTime: "March 6, 2018",
          post: "或像歷史課程中的于右任、顏真卿、柳公權書法字來。",
        },
        {
          postTime: "August 7, 2017",
          post: "立即就可找出自己喜歡的不雖平愛重時觀自識告書法字來。",
        },
        {
          postTime: "March 23, 2013",
          post: "輪議海表不雖平愛重時自定達的優。交家頭西新識告根談金外賀...",
        },
      ],
    };
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}

.main-row {
  background-image: url("../assets/mainPageImgs/background.png");
  background-size: 100% 100%;
  width: 100vw;
  padding: 0;
  margin: 0;
  display: inline-block;
  background-color: #eeeeee;
  overflow: hidden;
}

.post-card div img {
  height: 400px;
}

.hidden_header {
  display: none;
}

.card-mask {
  background: linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, #1a1a1a 100%);
  position: absolute;
  height: 300px;
  width: 100%;
  bottom: 0;
}

.card-text-top {
  position: absolute;
  bottom: 55px;
  padding: 0 28px;
  color: white !important;
  font-size: 24px;
  line-height: 125%;
  letter-spacing: 1px;
}

.card-text-top span {
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.75px;
}

.card-text-bottom {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 28px 30px 28px;
  color: rgba(255, 255, 255, 0.5);
}

.card-body {
  margin: 0;
  padding: 0;
}

.table-left {
  color: #6e7191;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0.75px;
  width: 140px;
}

.table-right {
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.75px;
  color: #14142b;
}

.circle {
  width: 55px;
  mix-blend-mode: difference;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  position: relative;
  left: -40%;
}

.more-post {
  margin-left: 7%;
  font-weight: bold;
  font-size: 16px;
  line-height: 50px;
  color: #000000;
  position: absolute;
}

.chou {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.75px;
  color: #44443e;
  margin: 0;
}

.footer-line {
  margin: 0 3%;
}

.footer-icon {
  margin: 0 10px;
}

.footer-menu {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  text-decoration: none;
  color: black;
  letter-spacing: 0.75px;
}

.copyright {
  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 140%;
  opacity: 0.75;
  margin-top: 20px;
}
</style>
