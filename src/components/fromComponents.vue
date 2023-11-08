<template>
  <v-container>
    <div class="formBox">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12" sm="6" class="name">
            <v-text-field
              v-model="form.name"
              :rules="rules.name"
              solo
              maxlength="10"
              required
              label="請輸入姓名"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" class="email">
            <v-text-field
              v-model="form.email"
              :rules="rules.email"
              solo
              maxlength="100"
              required
              label="請輸入email"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" class="say">
            <v-text-field
              v-model="form.message"
              solo
              :counter="15"
              maxlength="15"
              label="選填"
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="type">
            <v-radio-group v-model="form.signType" row>
              <v-radio label="個人響應" color="block" value="0"></v-radio>
              <v-radio label="品牌/組織響應" color="block" value="1"></v-radio>
            </v-radio-group>
          </v-col>
          <v-col cols="12" class="brand" v-if="form.signType != '0'">
            <v-text-field
              v-model="form.brandName"
              :rules="rules.brandName"
              solo
              required
              label="請輸入品牌名稱"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" class="socialLink" v-if="form.signType != '0'">
            <v-text-field
              v-model="form.socialUrl"
              :rules="rules.socialUrl"
              solo
              required
              label="請輸入品牌網址"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" class="mobile" v-if="form.signType != '0'">
            <v-text-field
              v-model="form.tel"
              :rules="rules.tel"
              maxlength="20"
              solo
              required
              label="請輸入聯絡電話"
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" class="address">
            <v-row>
              <v-col cols="6">
                <v-select
                  :items="city"
                  solo
                  v-model="form.liveCity"
                  label="縣市"
                  @change="getArea"
                >
                </v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  :items="area"
                  solo
                  v-model="form.area"
                  label="區域"
                  item-text="name"
                  item-value="name"
                >
                </v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-if="form.signType != '0'"
                  v-model="form.address"
                  maxlength="20"
                  solo
                  required
                  label="有實體空間願意成為據點，請務必提供"
                >
                </v-text-field>
                <v-text-field
                  v-else
                  v-model="form.address"
                  maxlength="20"
                  solo
                  required
                  label="選填"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- 電子信箱 -->
        <!-- <p class="title col-2">電子信箱</p>
        <v-text-field class=" col-4" v-model="form.email" :rules="rules.email" solo required label="xxxx@xx.xx.xxx">
        </v-text-field> -->

        <!-- 居住城市 -->
        <!-- <p class="title">居住城市</p>
        <v-select :items="cityItems" solo v-model="form.liveCity" label="請選擇" :rules="rules.liveCity">
        </v-select> -->
        <div class="illustrate" v-if="form.signType == '1'">
          <span class="underline" @click="dialog = true">點我看據點說明</span
          >，並確認索取文宣：
        </div>
        <!-- 並同意個資 -->
        <v-checkbox
          v-if="form.signType == '0'"
          v-model="form.recieveNewInfo"
          color="red darken-3"
          label="我願意成為母雞的夥伴，接收相關資訊"
        ></v-checkbox>
        <v-checkbox
          v-else
          v-model="form.recieveFlag"
          color="red darken-3"
          label="展示母雞自由掛旗"
        ></v-checkbox>
        <v-checkbox v-model="form.recievePostCard" color="red darken-3"  v-if="form.signType != '0'">
          <template v-slot:label>
            <div>
              擺放30-50份明信片
            </div>
          </template>
        </v-checkbox>
        </v-form
      ><br />

      <googleRecapcha
        ref="googleRecapcha"
        @getGoogle="getGoogleRecapcha"
      ></googleRecapcha>
      <v-dialog v-model="dialog" scrollable max-width="500px">
        <v-card>
          <v-card-title class="justify-end">
            <span @click="dialog = false" style="color: #ae322e">
              <i class="fa-solid fa-xmark fa-2x"></i>
            </span>
          </v-card-title>
          <v-card-text style="min-height: 300px">
            <img
              v-if="form.signType == '1'"
              src="@/assets/img/from/img1.png"
              style="width: 100%" />
            <img
              v-if="form.signType == '0'"
              src="@/assets/img/from/img2.png"
              style="width: 100%" />
            <img
              v-if="form.signType == '1'"
              src="@/assets/img/from/img3.png"
              style="width: 100%"
          /></v-card-text>
        </v-card>
      </v-dialog>
      <v-btn
        :disabled="!valid"
        @click="validate()"
        class="presetBtn text-center"
      >
        <a class="btn413">
          <span>送出，成為母雞夥伴</span><i class="fa-solid fa-arrow-right"></i
        ></a>
      </v-btn>
      <br />
      <br />
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import cityJson from "../assets/json/taiwan_districts.json";
import googleRecapcha from "../components/googleRecapcha";

export default {
  name: "formBox",
  // props: ["tab"],
  components: {
    googleRecapcha,
  },
  data: () => ({
    dialog: false,
    illustrate: false,
    valid: true,
    form: {
      name: "",
      email: "",
      message: "",
      signType: "0",
      brandName: "", //品牌
      socialUrl: "", //社群網址
      tel: "", //電話
      liveCity: "", //縣市
      area: "", //區域
      address: "", //地址
      recieveNewInfo: true, // 願意接收相關資訊
      recieveFlag: false, // 掛旗
      recievePostCard: false, // 收到明信片
      gCAPTCHA_token: "",
    },
    rules: {
      name: [(v) => !!v || "請輸入姓名"],
      email: [
        (v) => !!v || "請輸入電子信箱",
        (v) => /.+@.+\..+/.test(v) || "格式錯誤",
      ],
      message: [(v) => !!v || "請輸入想說的話"],
      brandName: [(v) => !!v || "請輸入品牌名稱"],
      socialUrl: [(v) => !!v || "請輸入官網/社群"],
      tel: [
        (v) => !!v || "請輸入聯絡電話",
        (v) => /^[0-9].{0,20}$/.test(v) || "格式錯誤",
      ],
      liveCity: [(v) => !!v || "請輸入城市"],
      area: [(v) => !!v || "請輸入區域"],
      address: [(v) => !!v || "請輸入地址"],
      // mobile: [v => !!v || '請輸入十位手機號碼', v => /^[0-9]{10}$/.test(v) || '格式錯誤'],
    },
    city: null,
    area: null,
  }),
  computed: {},
  watch: {},
  mounted() {
    this.city = cityJson.map((x) => x.name);
  },
  methods: {
    cloudInvoice() {
      // 清空表單
      let me = this;
      me.$refs.form.reset();
      this.$nextTick(function () {
        me.form.signType = "0";
      });
    },
    Lazy() {
      this.form.name = "假資料";
      this.form.gender = "男";
      this.form.tel = "0912345678";
      this.form.email = "qwe@ee.ee";
      this.form.liveCity = "臺北市"; //居住城市
      this.checkbox = true;
    },
    seePopUp() {
      var me = this;
      me.illustrate = true;
      // me.signType = signType;
    },
    // 驗證表單
    validate() {
      let me = this;
      me.$refs.form.validate();
      if (me.$refs.form.validate()) {
        me.addSign();
        // me.$refs.googleRecapcha.execute();
      }
    },
    // 獲得googleRecapcha 資料
    getGoogleRecapcha(val) {
      let me = this;
      me.form.gCAPTCHA_token = val;
      me.addSign();
    },

    // 新增表單資料
    addSign() {
      let me = this;
      me.form.zip = me.area?.find((x) => x.name === me.form.area)?.zip;
      if (me.form.signType == "0") {
        let { brandName, socialUrl, tel, ...newForm } = me.form;
        me.form = newForm;
      }

      let config = {
        method: "post",
        url:
          me.$apiUrl +
          `/API/AddData/${
            me.form.signType === "0"
              ? "0BAC825D6553409A8B174005A36AD935"
              : "DB3920253CF642A89D143E6F568EEC34"
          }`,
        data: new FormData(),
      };

      Object.keys(me.form).forEach((key) => {
        var value = me.form[key];
        if (typeof value === "boolean" || me.form[key]) {
          config.data.append(key, me.form[key]);
        }
      });

      axios(config)
        .then((res) => {
          if (res && res.data && res.data.success) {
            // location.reload();
            me.ParentData();
            me.cloudInvoice();
          } else {
            alert(res.data.message || "系統忙碌中，請稍後");
          }
        })
        .catch((error) => {
          alert("系統忙碌中，請稍後");
        });
    },
    ParentData() {
      let me = this;
      me.$emit("getParentData", true);
    },
    getArea() {
      let me = this;
      me.form.area = null;
      me.area = [].concat(
        ...cityJson
          .filter((x) => x.name === me.form.liveCity)
          .map((x) => x.districts)
      );
    },
  },
};
</script>
<style lang="scss" scoped>
#app {
  .formBox {
    .illustrate {
      text-align: left;
    }
    .underline {
      color: blue;
      text-decoration: underline;
      cursor: pointer;
    }
    .col,
    .name,
    .email {
      padding-left: 100px;
      padding-bottom: 0;
      position: relative;

      &.type,
      &.address .col {
        padding-left: 12px;
      }

      &::before {
        position: absolute;
        left: 10px;
        top: 18px;
        font-size: 1.2rem !important;
        font-weight: 800;
      }

      &.name::before {
        content: "姓名";
      }

      &.email::before {
        content: "E-mail";
      }

      &.say::before {
        content: "想說的話";
      }

      &.brand::before {
        content: "品牌名稱";
      }

      &.socialLink::before {
        content: "品牌網址";
      }

      &.mobile::before {
        content: "聯絡電話";
      }

      &.address {
        > .row > div:last-child {
          position: relative;
          top: -20px;
        }

        &::before {
          content: "聯絡地址";
        }
      }
    }
  }
  .illustrateBox {
    position: fixed;
  }
}
</style>