<template>
  <div class="HomePage">
    <!-- banner -->
    <div id="top" class="bannerBox">
      <v-row class="banner d-flex flex-row-reverse align-center">
        <v-col id="animation_container" sm="12" md="7" data-aos="zoom-out" data-aos-duration="500" data-aos-once="true"
          data-aos-easing="linear" class="TTLbox d-flex flex-column justify-center align-center align-md-start">
          <canvas id="canvas" style="display: block"></canvas>
          <div id="dom_overlay_container" style="
              pointer-events: none;
              overflow: hidden;
              width: 100%;
              display: block;
            "></div>
        </v-col>
        <v-col sm="12" md="5" class="handBox">
          <div class="hand">
            <v-img class="hand2" v-rellax="{ speed: 2 }" contain :eager="true" src="@/assets/img/banner/hand02.png"
              width="120%" />
            <v-img class="hand1" v-rellax="{ speed: -3 }" contain :eager="true" src="@/assets/img/banner/hand01.png"
              width="100%" />
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- /banner -->

    <!-- 母雞自由宣言 -->
    <div id="declaration" class="declaration bgColor1">
      <v-container>
        <v-row class="d-flex align-center justify-center">
          <i class="goOn fa-solid fa-chevron-down fa-2x"></i>
          <v-col cols="12" class="title text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            母雞<span class="decoration round">自</span><span class="decoration round">由</span>宣言
          </v-col>
          <v-col cols="11" md="12" class="slogan text-center" data-aos="fade-up" data-aos-duration="2500"
            data-aos-once="true">
            <span>
              <i class="fa-solid fa-quote-left"></i>
              我支持善待動物生命<br />
              拒絕「格子籠」<br />
              還給產蛋母雞展翅的自由
              <i class="fa-solid fa-quote-right"></i>
            </span>
          </v-col>
          <v-col cols="11" md="4" v-for="item in declarationList" :key="item.id" data-aos="fade-up"
            data-aos-duration="3500" data-aos-once="true"
            class="item d-flex flex-column align-center justify-center text-center">
            <i class="fa-solid fa-egg fa-2x"></i>
            <pre>{{ item.txt }}</pre>
          </v-col>
          <v-col cols="12" class="subTitle text-center" data-aos="fade-up" data-aos-duration="4500"
            data-aos-once="true">
            <router-link to="/" @click.native="$urlHash('henCage')" class="btn413"><span>挺母雞 • 簽宣言</span>
              <i class="fa-solid fa-arrow-right"></i>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- /母雞自由宣言 -->

    <!-- 解放母雞 -->
    <div  class="freeHen bgColor3 d-flex flex-column justify-center align-center">
      <v-col cols="12" md="10" lg="8">
        <v-row id="news" class="news">
          <v-col cols="12" class="title text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <span class="decoration oval T51">最新消息</span>
          </v-col>
          <v-col cols="12" class="newsBannerBox" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <newsBannerSwiper />
          </v-col>
          <v-col cols="12" class="btnS" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <v-row>
              <v-col cols="6" v-for="item in issueList" :key="item.id">
                <div class="btn btn513">
                  <a :href="item.link" :target="item.target">
                    <span>{{ item.title }}</span>
                    <i class="fa-solid fa-arrow-right fa-1x"></i></a>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col id="freeHen" cols="12" md="10" lg="8" xl="6">
        <v-row class="d-flex flex-column align-center">
          <v-col cols="12" class="title text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <small>為什麼要讓</small>
            <span class="decoration oval T51">母雞自由？</span>
          </v-col>
          <v-col cols="12" class="youtobe text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vCa6xF8rxfQ" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </v-col>
          <v-col cols="10" md="12" v-for="(group, index) in freeHenGroups" :key="index" class="item d-flex"
            data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <v-row>
              <v-col cols="12" md="4" class="carTitle d-flex flex-md-column align-center justify-md-center text-center">
                <i :class="group.titleIcon" class="fa-1x"></i>{{ group.title }}
              </v-col>
              <v-col cols="12" md="8" class="carList">
                <p @click="seePopUp(item.itemsId, item.title)" v-for="item in group.items" :key="item.itemsId"
                  class="d-flex align-center justify-space-between">
                  <span>{{ item.title }}</span>
                  <i class="fa-solid fa-circle-chevron-right fa-2x"></i>
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </div>
    <!-- /解放母雞 -->

    <!-- 母雞的一生 -->
    <div id="henLife" class="henLife bgColor5">
      <v-container>
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" class="title text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <small>台灣85%</small>
            <span class="decoration oval T24">產蛋母雞的一生</span>
          </v-col>
          <v-col cols="12" lg="10" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <henLifeSwiper />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- /母雞的一生 -->

    <!-- 參與盟友 -->
    <div id="friend" class="friend bgColor1">
      <v-container>
        <v-row>
          <v-col cols="12" class="title text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <span class="decoration oval T53">盟友力挺</span>
          </v-col>
          <v-col cols="12" class="" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <friendSwiper />
          </v-col>
          <v-col cols="12" class="subTitle text-center" data-aos="fade-up" data-aos-duration="1500"
            data-aos-once="true">
            <router-link to="/ally" class="btn355"><span>所有支持盟友</span><i class="fa-solid fa-arrow-right"></i>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
      <marquee v-if="marqueeList.length != 0" id="cage" scrollamount="14" data-aos="fade-left" data-aos-duration="1500"
        data-aos-once="true">
        <span v-for="(item, index) in marqueeList" :key="index">
          <span v-if="index % 2 != 1"> {{ item.displayText }}</span>
        </span>
      </marquee>
      <marquee v-if="marqueeList.length != 0" scrollamount="12" data-aos="fade-left" data-aos-duration="1500"
        data-aos-once="true">
        <span v-for="(item, index) in marqueeList" :key="index">
          <span v-if="index % 2 == 1"> {{ item.displayText }}</span>
        </span>
      </marquee>
      <v-container>
        <v-row>
          <v-col cols="12" id="henCage" class="henCage" :class="{ submitForm: submitForm }" data-aos="fade-up"
            data-aos-duration="1500" data-aos-once="true">
            <div class="chicken3">
              <div v-for="n in 3" :key="n">
                <img :class="`CageImg${n}`" :src="require(`@/assets/img/friend/3chicken-03_0${n}.png`)" />
              </div>
            </div>
            <img class="henCageImg" src="../assets/img/friend/henCage.png" />
          </v-col>
          <v-col cols="12" class="title text-center formTitle" data-aos="fade-up" data-aos-duration="1500"
            data-aos-once="true">
            挺<span class="decoration round">母</span><span class="decoration round">雞</span> • 簽宣言
            <p class="text-center">加入夥伴行列 一起為母雞自由努力</p>
          </v-col>
          <v-col cols="12" class="formBox" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <fromComponents @getParentData="ParentData" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- /參與盟友 -->

    <!-- 最新消息 -->
    <!-- <div id="news" class="news bgColor3">
      <v-container>
        <v-row>
          <v-col cols="12" class="title text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <span class="decoration oval T51">最新消息</span>
          </v-col>
          <v-col cols="12" class="newsBannerBox" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <newsBannerSwiper />
          </v-col>
          <v-col cols="12" class="itemS" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <v-row>
              <v-col cols="6" v-for="item in issueList" :key="item.id">
                <div class="item btn513">
                  <a :href="item.link" :target="item.target">
                    <span>{{ item.title }}</span>
                    <i class="fa-solid fa-arrow-right fa-1x"></i></a>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div> -->
    <!-- /最新消息 -->

    <!-- 關於我們 -->
    <div id="aboutUs" class="aboutUs bgColor5">
      <v-container>
        <v-row>
          <v-col cols="12" class="title text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <span class="decoration oval T13">關於我們</span>
          </v-col>
          <v-col class="txt" cols="12" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <p class="text-center">
              <a href="https://www.east.org.tw" target="_blank">台灣動物社會研究會</a><br />Since 1999
            </p>
            常年深入動物受苦的場域，不畏艱難投入「最受漠視的動物議題」。我們廣泛關注經濟動物、實驗動物、同伴動物、野生動物、展演動物、生態及海洋保育等重要議題，致力從源頭改善動物處境。自2012年倡議蛋雞動物福利，並參與產業輔導、供應鏈遊說媒合等工作，持續推動農委會制定蛋雞友善飼養相關政策與措施。
          </v-col>
          <v-col class="socialMedia" cols="6" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <a href="https://www.facebook.com/east.org.tw" target="_blank"><i
                class="fa-brands fa-facebook fa-3x"></i></a>
            <a href="https://www.instagram.com/east_taiwan" target="_blank"><i
                class="fa-brands fa-square-instagram fa-3x"></i></a>
            <a href="https://www.youtube.com/channel/UCGLpX_iIR8n4D6wKfkHKm-Q" target="_blank"><i
                class="fa-brands fa-youtube fa-3x"></i></a>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div v-if="chickenPopup" class="popupBox">
      <div>
        <v-img contain :eager="true" src="@/assets/img/from/chicken-pop.png" />
      </div>
    </div>
    <goTop :to="'/'" />
    <popup :itemsId="itemsId" :itemsTitle="itemsTitle" v-if="dialog" @popupStatus="dialog = false" />
  </div>
</template>
<script>
  import axios from "axios";
  import store from "@/store/index";
  import popup from "@/components/popup";
  import goTop from "@/components/goTop";
  // import Myplugin from "@/lib/Myplugin";
  import fromComponents from "@/components/fromComponents";
  import henLifeSwiper from "@/components/swiper/henLifeSwiper"; //母雞的一生 輪播
  import newsBannerSwiper from "@/components/swiper/newsBannerSwiper"; //最新消息 輪播
  import friendSwiper from "@/components/swiper/friendSwiper"; // 參與盟友 輪播
  // import swal from "sweetalert2";
  export default {
    name: "HomePage",
    data() {
      return {
        submitForm: false,
        chickenPopup: false,
        dialog: false,
        issueList: "",
        marqueeList: "",
      };
    },
    components: {
      newsBannerSwiper, //最新消息 輪播
      henLifeSwiper, //母雞的一生 輪播
      friendSwiper, // 參與盟友 輪播
      fromComponents,
      popup,
      goTop,
    },
    computed: {
      declarationList() {
        // 母雞自由宣言 item list
        return store.state.declarationList;
      },
      freeHenGroups() {
        // 解放母雞group list
        return store.state.freeHenGroups;
      },
    },
    mounted() {
      let me = this;
      me.getMarquee();
      me.getIssue();
      init();
    },
    methods: {
      // 顯示popup視窗
      seePopUp(itemsId, itemsTitle) {
        var me = this;
        me.dialog = true;
        me.itemsId = itemsId;
        me.itemsTitle = itemsTitle;
      },

      // 獲得跑馬燈
      getMarquee() {
        var me = this;
        me.url = "/API/GetDataTable/6A973176D84C4534888BAA15E918FC45";
        var config = {
          method: "get",
          url: me.$apiUrl + me.url,
          params: {
            sortBy: JSON.stringify(["marqueeSort"]),
            sortDesc: JSON.stringify([true]),
          },
        };
        axios(config)
          .then((res) => {
            var data = res.data;
            if (data && data.success) {
              me.marqueeList = data.data;
            }
          })
          .catch((err) => {
            console.log(err);
            alert("系統忙碌中，請稍後再試");
          })
          .finally(() => {
            // swal.close();
          });
      },
      // 獲得議題
      getIssue() {
        var me = this;
        me.url = "/API/GetDataTable/77E8FF4DAEDF44BA9CC91A8224C08FD8?";
        var config = {
          method: "get",
          url: me.$apiUrl + me.url,
          params: {
            sortBy: JSON.stringify(["issueSort"]),
            sortDesc: JSON.stringify([false]),
            pageCount: 6,
          },
        };
        axios(config)
          .then((res) => {
            var data = res.data;
            if (data && data.success) {
              me.issueList = data.data;
            }
          })
          .catch((err) => {
            console.log(err);
            alert("系統忙碌中，請稍後再試");
          })
          .finally(() => {
            // swal.close();
          });
      },
      // 新增表單資料
      ParentData(val) {
        let me = this;
        me.chickenPopup = val;
        me.$urlHash("cage");
        me.submitForm = val;
        setTimeout(function () {
          me.chickenPopup = false;
        }, 3000);
      },
    },
  };
</script>
<style lang="scss" scoped>
  .HomePage {
    .popupBox {
      background-color: hsla(0deg, 0%, 100%, 90%);
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
      animation: chickenPopup 2s;

      >div {
        max-width: 960px;
        width: 90vw;
      }

      @keyframes chickenPopup {
        0% {
          transform: scale(0);
          opacity: 0;
        }

        20%,
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    }

    @media screen and (min-width: 0px) and (max-width: 599px) {
      .popupBox img {
        max-height: 80vh;
      }
    }
  }
</style>