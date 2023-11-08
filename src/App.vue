<template>
  <v-app>
    <v-app-bar app :class="{ showHeader: showHeader }">
      <div class="d-flex align-center">
        <router-link to="/" id="logo" transition="scale-transition">
          讓母雞自由倡議平台
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <div @click="showMenu = true" class="menu">
        <i class="fa-solid fa-bars fa-2x"></i>
      </div>
    </v-app-bar>
    <v-main>
      <router-view @getLoading="getLoading" />
    </v-main>
    <div class="nav animate__animated animate__fadeIn" v-if="showMenu" @click="showMenu = false">
      <i class="fa-solid fa-xmark fa-2x"></i>
      <router-link to="/" @click.native="$urlHash('freeHen')">為什麼要讓母雞自由</router-link>
      <router-link to="/" @click.native="$urlHash('henLife')">母雞現況</router-link>
      <router-link to="/" @click.native="$urlHash('friend')">盟友力挺</router-link>
      <router-link to="/" @click.native="$urlHash('henCage')">挺母雞．簽宣言</router-link>
      <router-link to="/" @click.native="$urlHash('news')">議題中心</router-link>
      <router-link to="/" @click.native="$urlHash('aboutUs')">關於我們</router-link>
      <div class="socialMedia">
        <a href="https://www.facebook.com/east.org.tw" target="_blank"><i class="fa-brands fa-facebook fa-3x"></i></a>
        <a href="https://www.instagram.com/east_taiwan" target="_blank"><i
            class="fa-brands fa-square-instagram fa-3x"></i></a>
        <a href="https://www.youtube.com/channel/UCGLpX_iIR8n4D6wKfkHKm-Q" target="_blank"><i
            class="fa-brands fa-youtube fa-3x"></i></a>
      </div>
    </div>
    <router-link to="/" @click.native="$urlHash('friend')" class="back" v-show="$route.name == 'ally'">
      <span><i class="fa-solid fa-reply"></i></span><span>Back</span>
    </router-link>
    <footer>
      2023 台灣動物社會研究會 © All Rights Reserved.<br />
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy">Privacy Policy</a>
      and
      <a href="https://policies.google.com/terms">Terms of Service</a>
      apply.<br />
    </footer>

    <loading v-if="loading" />
  </v-app>
</template>

<script>
  // import axios from "axios";
  // import swal from "sweetalert2";
  import loading from "@/components/loading";
  import store from "@/store/tags";
  export default {
    name: "App",
    components: {
      loading,
    },
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        provideActive: true,
        isRouterAlive: true,
        loading: false,
        showPopup: false,
        showMenu: false,
        showHeader: false,
      }
    },
    computed: {
      appTags() {
        //愛酷標籤
        return store.state.appTags;
      },
    },

    mounted() {
      //添加滚动监听事件
      //在窗口滚动时调用监听窗口滚动方法
      window.addEventListener("scroll", this.windowScrollListener, true);
      // window.addEventListener("resize", this.renderResize, true);
      if(this.$route.query.urlHash=='henCage'){
        this.$urlHash(this.$route.query.urlHash)
      }
    },
    beforeDestroy() {
      //离开页面时删除该监听
      window.addEventListener("scroll", this.windowScrollListener, false);
      // 移除 監聽
      // window.addEventListener("resize", this.renderResize, false);
    
      // if(this.$route.query.urlHash=='henCage'){
      //   cco
      //   this.$urlHash('henCage')
      // }
    },
    methods: {
      // 禁止手機橫拿
      // renderResize() {
      //   if (window.orientation == 180 || window.orientation == 0) {
      //     this.showPopup = false
      //   }
      //   if (window.orientation == 90 || window.orientation == -90) {
      //     this.showPopup = true
      //   }
      // },
      //监听窗口滚动
      windowScrollListener() {
        //获取操作元素最顶端到页面顶端的垂直距离
        var scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop >= 480) {
          this.showHeader = true; //大于480时显示元素
        }
        if (scrollTop < 480) {
          this.showHeader = false; //小于480时隐藏元素
        }
      },
      getLoading(val) {
        this.loading = val;
      },
    },
  };
</script>

<style lang="scss">
  #app {
    max-width: 100vw;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    background-color: #edae33;

    .v-app-bar.v-app-bar--fixed {
      transition: top 0.1s ease-in;
      top: -64px;

      &.showHeader {
        transition: top 0.1s ease-in;
        top: 0;
      }
    }
  }

  .back {
    position: fixed;
    z-index: 10;
    right: 135px;
    bottom: 50px;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    border: 1px solid #ffffff;
    background-color: #edae33;
    color: #212121 !important;
    text-align: center;

    span {
      display: block;

      svg {
        position: relative;
        top: 8px;
      }

    }
  }

  @media screen and (min-width: 960px) and (max-width: 9999px) {
    .back {
      cursor: pointer;
      transition: all .3s;

      span svg {
        transition: all .3s;
      }

      &:hover {
        transition: all .3s;
        background-color: #ffffff;
        border: 1px solid #edae33;

        svg {
          top: 2px;
        }
      }
    }
  }

  @media screen and (min-width:0px) and (max-width:959px) {
    .back {
      right: 10px;
      bottom: 100px;
      font-size: 16px;
    }
  }

  @media screen and (min-width:0px) and (max-width:599px) {
    .back {
      display: none;
      padding: 0 !important;

      span {
        font-size: 16px;
      }
    }
  }
</style>