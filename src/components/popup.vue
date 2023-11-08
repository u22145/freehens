<template>
  <v-dialog v-model="dialog" max-width="1000" persistent>
    <v-card>
      <v-card-actions>
        <div id="freeHenItemTitle" class="item">
          <div @click="closePopup()">
            <i class="fa-solid fa-xmark fa-2x"></i>
          </div>
          <h6>{{ freeHenItem.title }}</h6>
          <p>{{ freeHenItem.txt }}</p>
          <br /><br />
          <a
            :href="list.url"
            target="_blank"
            v-for="list in freeHenItem.link"
            :key="list"
          >
            {{ list.title }} </a
          ><br />
          <span
            v-if="freeHenItem.itemsId < 9"
            class="next"
            @click="next(freeHenItem.itemsId), $urlHash('freeHenItemTitle')"
            >下一章 <i class="fa-solid fa-arrow-right fa-1x"></i
          ></span>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import store from "@/store/index";
// import { markRaw } from "vue";
export default {
  name: "popupBox",
  props: ["itemsId", "itemsTitle", "illustrate"],
  data: () => ({
    dialog: true,
    gCAPTCHA_token: "",
    nextItem: "",
  }),
  computed: {
    popupTags() {
      //愛酷標籤
      return store.state.popupTags;
    },
    freeHenList() {
      // 解放母雞item list
      return store.state.freeHenList;
    },
    freeHenItem() {
      if (this.itemsId < this.nextItem) {
        return store.state.freeHenItems.find(
          (item) => item.itemsId === this.nextItem
        );
      }
      return store.state.freeHenItems.find(
        (item) => item.itemsId === this.itemsId
      );
    },
  },
  methods: {
    closePopup() {
      // 關閉彈窗
      this.$emit("popupStatus", false);
    },
    next(val) {
      this.nextItem = val + 1;
    },
  },
};
</script>
<style lang="scss" scoped>
#app {
  .v-btn {
    cursor: pointer;
    border-radius: 20px;
    width: 100%;
    padding: 8px 20px;
    font-weight: 500;
    font-size: 18px;
    margin: 0 auto 20px auto;
    text-align: center;

    &.closePopup {
      color: #b56d21;
    }
  }
}

.v-dialog {
  overflow-y: inherit;
  box-shadow: none;
  border-radius: 0;

  .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
  }

  .v-card__actions {
    background-color: #ffffff;

    .item {
      display: flex;
      flex-direction: column;
      padding: 60px 30px;
      position: relative;

      .fa-2x {
        position: absolute;
        right: 15px;
        top: 15px;

        &:hover {
          color: #ffffff;
        }
      }

      h6 {
        font-size: 28px;
        font-weight: 900;
        margin-bottom: 20px;
        text-align: center;
      }

      p {
        font-size: 18px;
        margin-bottom: 20px;
        color: #212121;
      }

      a {
        font-size: 15px;
        transition: all 0.3s;
        color: #555555;
        margin-left: 85px;
        position: relative;

        &::before {
          content: "延伸閱讀：";
          position: absolute;
          left: -70px;
        }

        &::after {
          content: "●";
          position: absolute;
          left: -90px;
          top: 2px;
          color: #a81e22;
          font-size: 12px;
        }
      }

      .next {
        background-color: #a81e22;
        color: #ffffff;
        border-radius: 20px;
        width: 136px;
        text-align: center;
        line-height: 2.5;
        position: absolute;
        right: 50px;
        bottom: 50px;
      }

      .fa-2x,
      .next {
        transition: all 0.3s;
      }

      .fa-2x,
      h6 {
        color: #a81e22;
      }
    }
  }
}

@media screen and (min-width: 960px) and (max-width: 9999px) {
  .v-dialog .v-card__actions .item {
    .next {
      &:hover {
        background-color: #edae33;
      }
    }

    .fa-2x,
    .next {
      &:hover {
        cursor: pointer;
        transition: all 0.3s;
      }
    }

    .fa-2x:hover,
    a:hover {
      transition: all 0.3s;
      color: #edae33;
    }
  }
}

@media screen and (min-width: 0px) and (max-width: 599px) {
  .v-dialog {
    .v-card__actions .item {
      padding: 60px 5px;

      h6 {
        font-size: 20px;
      }

      p,
      a {
        padding: 0 !important;
      }

      p {
        font-size: 16px !important;
      }

      a {
        font-size: 14px !important;
        margin-bottom: 5px;
      }

      .next {
        right: 0;
        bottom: 20px;
      }
    }
  }
}
</style>