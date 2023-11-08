<template>
  <div
    class="henLifeSwiper d-flex flex-column flex-lg-row justify-center align-center"
  >
    <v-col cols="10" sm="8" lg="6" class="swiper-container henLifeImg leftImg">
      <div
        class="swiper-wrapper"
       
      >
        <swiper-slide v-for="(item, index) in henLifeList" :key="index">
          <img :src="item.src" width="100%" />
        </swiper-slide>
      </div>
    </v-col>
    <v-col cols="12" lg="6" class="swiper-container henLifeTxt rightTxt">
      <div class="swiper-wrapper">
        <swiper-slide
          v-for="(item, index) in henLifeList"
          :key="index"
         
        >
          <div>
            <p>
              <strong>{{ item.title }}</strong>
            </p>
            <p>{{ item.txt }}</p>
          </div>
        </swiper-slide>
      </div>
      <div
        class="swiper-pagination swiper-pagination-bullets henLife-pagination"
      ></div>
      <!-- 上一页 -->
      <div class="swiper-button-prev" slot="button-prev">
        <i class="fa-solid fa-circle-chevron-left fa-2x"></i>
      </div>
      <!-- 下一页 -->
      <div class="swiper-button-next" slot="button-next">
        <i class="fa-solid fa-circle-chevron-right fa-2x"></i>
      </div>
      <div class="moreBtnBox">
        <a href="https://www.east.org.tw/action/8672" class="moreBtn btn355" target="_blank">
          <span>了解更多</span><i class="fa-solid fa-arrow-right"></i
        ></a>
      </div>
    </v-col>
  </div>
</template>
<script>
// npm install swiper --save
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import store from "@/store/index";
export default {
  name: "swiperBox",
  data() {
    return {
      mySwiper: null,
    };
  },
  computed: {
    henLifeList() {
      // 解放母雞item list
      return store.state.henLifeList;
    },
  },
  methods: {
    _initSwiper() {
      this.henLifeTxt = new Swiper(".henLifeTxt", {
        pagination: {
          // 按钮
          el: ".henLife-pagination",
          clickable: true, // 分页导航是否可点击
        },
        loop: false, // 环路(无缝滚动)
        speed: 2200, // 切换速度
        slidesPerView: 1, //数量
        spaceBetween: 45, //间距
        slidesPerGroup: 1, //分几组
        autoplay: false,
        // autoplay: { // 自动切换
        //     delay: 9000, // 自动切换的时间间隔
        //     stopOnLastSlide: false, // 如果设置为true,当切换到最后一个slide时停止自动切换(loop模式下无效)
        //     disableOnInteraction: false, // 用户操作swiper之后,是否禁止autoplay.默认为true:停止
        // },
        navigation: {
          nextEl: ".swiper-button-next", //前进按钮的css选择器或HTML元素。
          prevEl: ".swiper-button-prev", //后退按钮的css选择器或HTML元素。
          hideOnClick: true, //点击slide时显示/隐藏按钮
          disabledClass: "my-button-disabled", //前进后退按钮不可用时的类名。
          hiddenClass: "my-button-hidden", //按钮隐藏时的Class
        },
      });
      this.henLifeImg = new Swiper(".henLifeImg", {
        pagination: {
          // 按钮
          el: ".henLife-pagination",
          clickable: true, // 分页导航是否可点击
        },
        effect: "fade", //Slide的切换效果
        loop: false, // 环路(无缝滚动)
        speed: 2200, // 切换速度
        slidesPerView: 1, //数量
        spaceBetween: 45, //间距
        slidesPerGroup: 1, //分几组
        autoplay: false,
        // autoplay: { // 自动切换
        //     delay: 9000, // 自动切换的时间间隔
        //     stopOnLastSlide: false, // 如果设置为true,当切换到最后一个slide时停止自动切换(loop模式下无效)
        //     disableOnInteraction: false, // 用户操作swiper之后,是否禁止autoplay.默认为true:停止
        // },
      });
    },
    _updateSwiper() {
      this.$nextTick(() => {
        this.henLifeTxt.update(true); //swiper update的方法
        this.henLifeImg.update(true); //swiper update的方法
      });
    },
    swiperUpdate() {
      if (this.henLifeTxt) {
        //节点存在
        this._updateSwiper(); //更新
      } else {
        this._initSwiper(); //创建
      }
      if (this.henLifeImg) {
        //节点存在
        this._updateSwiper(); //更新
      } else {
        this._initSwiper(); //创建
      }
    },
    mouseEnter() {
      this.henLifeTxt.autoplay.stop();
    },
    mouseLeave() {
      // this.mySwiper.autoplay.start();
    },
  },
  watch: {
    //通过props传来的数据 和 组件一加载节点就创建成功 二者不是同步，实时监听的swiper(传递的值)的变化
    swiper() {
      this.swiperUpdate();
    },
  },
  mounted() {
    this.swiperUpdate(); //页面一加载拉去数据创建节点
    this.$nextTick(() => {
      //兩個輪播互相掛鉤
      this.henLifeImg.controller.control = this.henLifeTxt;
      this.henLifeTxt.controller.control = this.henLifeImg;
    });
  },
};
</script>