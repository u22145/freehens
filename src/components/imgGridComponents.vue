<template>
  <div class="imgGridBox">
    <v-row>
      <v-col v-for="(item,index) in AllyFriendImg" :key="index"
        class="d-flex child-flex flex-column justify-center align-center" cols="4" sm="3" md="2">
        <div class="imgBox">
          <v-img :src="$apiUrl + imgApi +item.id + imgParam" :lazy-src="$apiUrl + imgApi +item.id + imgParamLazy"
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
        <p>{{item.unit}}</p>
        <p>{{item.job}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(item,index) in AllyFriend" :key="index"
        class="d-flex child-flex flex-column justify-center align-center" cols="4" sm="3" md="2">
        <p>
          <strong>{{item.name}}</strong>
        </p>
        <p>{{item.unit}}</p>
        <p>{{item.job}}</p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
  import axios from "axios";
  export default {
    name: "imgGridBox",
    props:['categoryId'],
    data() {
      return {
        imgApi: '/API/GetFile/F0E9FD63DB704319AE849FCBCC1B418C/id/',
        imgParam: '/file_avatar?v=1', //原圖
        imgParamLazy: '/file_avatar?v=1&s=200w', //縮圖
        AllyFriendImg: '', //盟友（有頭像）
        AllyFriend: '', //盟友（沒頭像）
      };
    },
    methods: {
      // 取得綁定盟友（有頭像）
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
              this.AllyFriendImg = data.data;
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
      // 取得綁定盟友（沒頭像）
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
              this.AllyFriend = data.data;
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
    watch: {},
    mounted() {
      let me = this
      me.getAllyFriendImg()
      me.getAllyFriend()
    },
  };
</script>

<style lang="sass" scoped>
</style>