<template>
  <div  class="allyPage">
    <div id="top" class="title text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
      <span class="decoration oval T53">讓母雞自由盟友</span>
    </div>
    <v-tabs class="btnBox" data-aos="fade-up" data-aos-duration="2500" data-aos-once="true">
      <v-tab class="btn" v-for="item in allyTab" :key="item.id" @click=" categoryId =item.id"> {{ item.name }}</v-tab>
    </v-tabs>
    <div class="illustrate text-center" data-aos="fade-up" data-aos-duration="2500" data-aos-once="true">依宣言簽署時間排序</div>
    <div class="imgGridBox" data-aos="fade-up" data-aos-duration="2500" data-aos-once="true">
      <v-row>
        <v-col v-for="(item,index) in thisFriendImg" :key="index"
          class="d-flex child-flex flex-column justify-center align-center" cols="4" sm="3" md="2">
          <div class="imgBox">
            <v-img :src="$apiUrl + imgApi +item.id + imgParam" lazy-src="@/assets/img/friend/lastPerson.png"
              aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>
          <p>
            <strong>{{item.name}}</strong>
          </p>
          <p :style="{ 'opacity': item.unit ? 1 : 0 }">{{item.unit || "-"}}</p>
          <p :style="{ 'opacity': item.job ? 1 : 0 }">{{item.job || "-"}}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item,index) in thisFriend" :key="index"
          class="d-flex child-flex flex-column justify-center align-center" cols="4" sm="3" md="2">
          <p>
            <strong>{{item.name}}</strong>
          </p>
          <p :style="{ 'opacity': item.unit ? 1 : 0 }">{{item.unit || "-"}}</p>
          <p :style="{ 'opacity': item.job ? 1 : 0 }">{{item.job || "-"}}</p>
        </v-col>
      </v-row>
    </div>
    <goTop :to="'/ally'" />
  </div>
</template>

<script>
  import axios from "axios";
  import goTop from "@/components/goTop";
  export default {
    name: "allyPage",
    components: {
      goTop
    },
    data() {
      return {
        allyTab: '',
        categoryId: '',
        imgApi: '/API/GetFile/F0E9FD63DB704319AE849FCBCC1B418C/id/',
        imgParam: '/file_avatar?v=1&s=400w',
        allyFriendImg: '', //盟友（有頭像）
        allyFriend: '', //盟友（沒頭像）
      };
    },
    mounted() {
      let me = this
      me.getAllyTab()
      me.getAllyFriendImg()
      me.getAllyFriend()
    },
    computed: {
      thisFriendImg: function () {
        let me = this
        if (me.categoryId) {
          return me.allyFriendImg.filter(x =>
            x.category && JSON.parse(x.category).indexOf(me.categoryId) != -1
          );
        }
        return me.allyFriendImg
      },
      thisFriend: function () {
        let me = this
        if (me.categoryId) {
          return me.allyFriend.filter(x =>
            x.category && JSON.parse(x.category).indexOf(me.categoryId) != -1
          );
        }
        return me.allyFriend
      },
    },
    methods: {

      // 取得所有篩選標籤
      getAllyTab() {
        var me = this;
        me.url = "/API/GetDataTable/850473FEB723437E850EF6A73E26D6B1?";
        var config = {
          method: "get",
          url: me.$apiUrl + me.url,
          params: {
            sortBy: JSON.stringify(['categorySort']),
            sortDesc: JSON.stringify([false]),
            pageCount: 5,
          },
        };
        axios(config)
          .then((res) => {
            var data = res.data;
            if (data && data.success) {
              this.allyTab = data.data;
              if (me.allyTab.length > 0) {
                me.allyTab.unshift({
                  id: null,
                  name: '所有盟友',
                });
              }
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
      // 取得所有綁定盟友（有頭像）
      getAllyFriendImg() {
        var me = this;
        me.url = "/API/GetDataTable/AE8C16099489446196D9D2786FEC6AF4?";
        var config = {
          method: "get",
          url: me.$apiUrl + me.url,
          params: {
            sortBy: JSON.stringify(['updated_time']),
            sortDesc: JSON.stringify([true]),
            pageCount: -1,
          },
        };
        axios(config)
          .then((res) => {
            var data = res.data;
            if (data && data.success) {
              me.allyFriendImg = data.data;
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
      // 取得所有綁定盟友（沒頭像）
      getAllyFriend() {
        var me = this;
        me.url = "/API/GetDataTable/A4A24B404E7D4D7A89BC5406C68E89E4?";
        var config = {
          method: "get",
          url: me.$apiUrl + me.url,
          params: {
            sortBy: JSON.stringify(['created_time']),
            sortDesc: JSON.stringify([true]),
            pageCount: -1,
          },
        };
        axios(config)
          .then((res) => {
            var data = res.data;
            if (data && data.success) {
              this.allyFriend = data.data;
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
    },
  };
</script>
<style lang="scss" scoped>
  .allyPage {}
</style>