<template>
    <div class="friendSwiper d-flex justify-center align-center">
        <v-col cols="12" class="swiper-container friendList ">
            <div class="swiper-wrapper">
                <swiper-slide v-for="item in friendList" :key="item.allyID"
                    class="d-flex flex-column justify-center align-center swiper-slide">
                    <template v-if="item.isLast">
                        <div class="imgBox">
                            <router-link to="/ally">
                                <v-img contain :eager="true" src="@/assets/img/friend/lastPerson.png" />
                            </router-link>
                        </div>
                        <p><strong>{{item.name}}</strong> </p>
                        <p> {{item.unit}}</p>
                        <p> {{item.job}}</p>
                    </template>
                    <template v-else>

                        <div class="imgBox">
                            <v-img
                                :src="`${$apiUrl}/API/GetFile/F0E9FD63DB704319AE849FCBCC1B418C/id/${item.allyID}/file_avatar?d=a23_FreeHens_Ally&v=1&s=400w`"
                                lazy-src="@/assets/img/friend/lastPerson.png" contain :eager=true aspect-ratio="1"
                                class="grey lighten-2">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                            <!-- <v-img contain :eager=true
                                :src="`${$apiUrl}/API/GetFile/F0E9FD63DB704319AE849FCBCC1B418C/id/${item.allyID}/file_avatar?d=a23_FreeHens_Ally&v=1&s=400w`" /> -->
                        </div>
                        <p><strong>{{item.name}}</strong> </p>
                        <p :style="{ 'opacity': item.unit ? 1 : 0 }"> {{item.unit || '-'}}</p>
                        <p :style="{ 'opacity': item.job ? 1 : 0 }"> {{item.job || '-'}}</p>
                    </template>
                </swiper-slide>
            </div>

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
    // npm install swiper --save
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import axios from 'axios';

    export default {
        name: 'swiperBox',
        data() {
            return {
                mySwiper: null,
                friendList: [],
            }
        },
        methods: {
            _initSwiper() {
                this.mySwiper = new Swiper('.friendList', {
                    slideClass: 'swiper-slide',
                    loop: false, // 环路(无缝滚动)
                    speed: 600, // 切换速度
                    slidesPerView: 2, //数量
                    spaceBetween: 55, //间距
                    slidesPerGroup: 2, //分几组
                    autoplay: false,
                    // autoplay: { // 自动切换
                    //     delay: 30000000, // 自动切换的时间间隔
                    //     stopOnLastSlide: false, // 如果设置为true,当切换到最后一个slide时停止自动切换(loop模式下无效)
                    //     disableOnInteraction: false, // 用户操作swiper之后,是否禁止autoplay.默认为true:停止
                    // },
                    pagination: { // 按钮
                        el: '.friend-pagination',
                        clickable: true, // 分页导航是否可点击
                    },
                    navigation: {
                        nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
                        prevEl: '.swiper-button-prev', //后退按钮的css选择器或HTML元素。
                        hideOnClick: true, //点击slide时显示/隐藏按钮
                        disabledClass: 'my-button-disabled', //前进后退按钮不可用时的类名。
                        hiddenClass: 'my-button-hidden', //按钮隐藏时的Class
                    },
                    breakpoints: {
                        699: {
                            slidesPerView: 2,
                            slidesPerGroup: 2, //分几组
                            centeredSlides: false,
                        },
                        959: {
                            slidesPerView: 3,
                            slidesPerGroup: 3, //分几组
                            centeredSlides: false,
                        },
                        1200: {
                            slidesPerView: 4,
                            slidesPerGroup: 4, //分几组
                            centeredSlides: false,
                        },
                        3000: {
                            slidesPerView: 5,
                            slidesPerGroup: 5, //分几组
                            centeredSlides: false,
                        },
                    }
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
            }
        },
        watch: {
            //通过props传来的数据 和 组件一加载节点就创建成功 二者不是同步，实时监听的swiper(传递的值)的变化
            swiper() {
                this.swiperUpdate();
            }
        },
        mounted() {
            let me = this;

            // 取得參與盟友資料
            let config = {
                methods: 'get',
                url: me.$apiUrl + '/API/GetDataTable/E6C05C801ACC4CF5B8EFEDCC9917A5FF',
                params: {
                    pageCount: 19,
                    sortBy: JSON.stringify(['allySort']),
                    sortDesc: JSON.stringify([false]),
                }
            };
            axios(config).then(res => {
                if (res && res.data && res.data.success) {
                    me.friendList = res.data.data;
                    if (me.friendList.length > 0) {
                        me.friendList.push({
                            allyID: null,
                            name: '看更多',
                            job: null,
                            title: null,
                            isLast: true
                        });
                        me.$nextTick(() => {
                            me.swiperUpdate(); //页面一加载拉去数据创建节点
                        });
                    }
                } else {
                    alert("系統忙碌中，請稍後再試");
                }
            }).catch(error => {
                console.log(error)
                alert("系統忙碌中，請稍後再試");
            });
        },
    }
</script>