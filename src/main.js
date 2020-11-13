import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueI18n from "vue-i18n"; // 引入 Vue I18n
import zh from "./lang/zh"; // 存放中文語系檔
import en from "./lang/en"; // 存放英文語系檔

import mixinMethod from "@/mixins/index.js";

import VueImageView from "vue-directive-image-previewer";
import "vue-directive-image-previewer/dist/assets/style.css";

Vue.use(VueI18n);
Vue.mixin(mixinMethod);
// 預設使用的語系
let locale = "zh";

// 檢查 localStorage 是否已有保存使用者選用的語系資訊
if (localStorage.getItem("footmark-lang")) {
  locale = localStorage.getItem("footmark-lang");
  store.commit("setLang", locale);
} else {
  store.commit("setLang", locale);
}

const i18n = new VueI18n({
  locale: locale,
  messages: {
    zh,
    en
  }
});


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");

// 點擊圖片放大
Vue.use(VueImageView, {
  animate: {
    duration: 300
  },
  zIndex: 1000
})