<template>
    <div class="newsBannerSwiper d-flex justify-center align-center">
        <v-col cols="12" class="swiper-container newsBannerList rightTxt">
            <div class="swiper-wrapper">
                <!-- <swiper-slide v-for="(item,index) in mobilBannerList" :key="index">
                    <a :href="item.link" :style="{'background-image': 'url(' + item.src + ')'}"
                        :target="item.target"></a>
                </swiper-slide> -->
                <swiper-slide v-for="(item,index) in PCBannerList" :key="index">
                    <a :href="item.link"
                        :style="{'background-image': 'url(' + $apiUrl + imgApi +item.id + imgParam + ')'}"
                        :target="item.target"></a>
                </swiper-slide>
            </div>

            <div class="swiper-pagination swiper-pagination-bullets newsBanner-pagination"></div>
            <!-- 上一页 -->
            <div class="swiper-button-prev" slot="button-prev">
                <i class="fa-solid fa-circle-chevron-left fa-2x"></i>
            </div>
            <!-- 下一页 -->
            <div class="swiper-button-next" slot="button-next">
                <i class="fa-solid fa-circle-chevron-right fa-2x"></i>
            </div>
        </v-col>
    </div>

</template>
<script>
    import axios from "axios";
    // import swal from "sweetalert2";
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';

    export default {
        name: 'swiperBox',
        data() {
            return {
                mySwiper: null,
                mobilBannerList: [],
                PCBannerList: [],
                imgApi: '/API/GetFile/2CFA928F358A41C0A75851D86D1A1B35/id/',
                imgParam: '/file_banner?v=1&s=1000w'
            }
        },
        methods: {
            _initSwiper() {
                this.mySwiper = new Swiper('.newsBannerList', {
                    pagination: { // 按钮
                        el: '.newsBanner-pagination',
                        clickable: true, // 分页导航是否可点击
                    },
                    loop: false, // 环路(无缝滚动)
                    speed: 600, // 切换速度
                    slidesPerView: 1, //数量
                    spaceBetween: 100, //间距
                    slidesPerGroup: 1, //分几组
                    autoplay: { // 自动切换
                        delay: 3000, // 自动切换的时间间隔
                        stopOnLastSlide: false, // 如果设置为true,当切换到最后一个slide时停止自动切换(loop模式下无效)
                        disableOnInteraction: false, // 用户操作swiper之后,是否禁止autoplay.默认为true:停止
                    },
                    navigation: {
                        nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
                        prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
                        hideOnClick: true, //点击slide时显示/隐藏按钮
                        disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
                        hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
                    },
                })
            },
            _updateSwiper() {
                this.$nextTick(() => {
                    this.mySwiper.update(true); //swiper update的方法
                })
            },
            swiperUpdate() {
                if (this.mySwiper) { //节点存在
                    this._updateSwiper(); //更新
                } else {
                    this._initSwiper(); //创建
                }
            },
            // 獲得手機圖片
            getMobilBannerImg() {
                var me = this;
                me.url = '/API/GetDataTable/BCF98CF8E9BA4828B3A97AB8DA6833C5'
                var config = {
                    method: "get",
                    url: me.$apiUrl + me.url,
                    params: {
                        sortBy: JSON.stringify(["bannerSort"]),
                        sortDesc: JSON.stringify([false]),
                        pageCount: 5,
                    }
                }
                axios(config).then(res => {
                    var data = res.data;
                    if (data && data.success) {
                        this.mobilBannerLis = data.data
                        me.$nextTick(() => {
                            me.swiperUpdate(); //页面一加载拉去数据创建节点
                        });
                    }
                }).catch((err) => {
                    console.log(err)
                    alert("系統忙碌中，請稍後再試");
                }).finally(() => {
                    // swal.close();
                })
            },
            // 獲得電腦圖片
            getPCBannerImg() {
                var me = this;
                me.url = '/API/GetDataTable/DAD9C4215CAE49DEB4A3FF5ED2AE9586'
                var config = {
                    method: "get",
                    url: me.$apiUrl + me.url,
                    params: {
                        sortBy: JSON.stringify(["bannerSort"]),
                        sortDesc: JSON.stringify([false]),
                        pageCount: 5,
                    }
                }
                axios(config).then(res => {
                    var data = res.data;
                    if (data && data.success) {
                        this.PCBannerList = data.data
                        me.$nextTick(() => {
                            me.swiperUpdate(); //页面一加载拉去数据创建节点
                        });
                        // this.prize = data.data.prize
                        // this.name = data.data.name
                        // this.index = data.data.index

                    }
                }).catch((err) => {
                    console.log(err)
                    alert("系統忙碌中，請稍後再試");
                }).finally(() => {
                    // swal.close();
                })
            },

        },
        watch: {
            //通过props传来的数据 和 组件一加载节点就创建成功 二者不是同步，实时监听的swiper(传递的值)的变化
            swiper() {
                this.swiperUpdate();
            }
        },
        mounted() {
            this.getMobilBannerImg(); //獲得圖片
            this.getPCBannerImg(); //獲得圖片

        }
    }
</script>