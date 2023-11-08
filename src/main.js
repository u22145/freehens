import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from "axios";
import AOS from 'aos'//動畫
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueRellax from 'vue-rellax'//滾動式差
import VueLuckyCanvas from '@lucky-canvas/vue'//抽獎
import MyPlugin from './lib/Myplugin'
import store from './store'//靜態資料
import 'animate.css';//載入動畫
import 'aos/dist/aos.css'//動畫
import './assets/sass/all.scss';

// require('swiper/dist/css/swiper.css')//輪播
import VueAwesomeSwiper from 'vue-awesome-swiper'//輪播
Vue.use(VueAwesomeSwiper)//輪播


Vue.config.productionTip = false
Vue.use(MyPlugin)
Vue.use(VueRellax)
Vue.use(VueLuckyCanvas)
router.afterEach(() => {
  //只要換頁都從頂端開始
	window.scrollTo(0, 0);
});

new Vue({
  router,
  vuetify, 
  store,
  VueLuckyCanvas,
  axios,
  VueRellax,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')
