import Vue from "vue";
import store from "../store";
import VueI18n from "vue-i18n"; // 引入 Vue I18n
import zh from "../lang/zh"; // 存放中文語系檔
import en from "../lang/en"; // 存放英文語系檔
import ch from "../lang/ch"; // 存放英文語系檔

Vue.use(VueI18n);


// 預設使用的語系
let locale = "zh";

// 檢查 localStorage 是否已有保存使用者選用的語系資訊
if (localStorage.getItem("footmark-lang")) {
  locale = localStorage.getItem("footmark-lang");
  store.commit("setLang", locale);
} else {
  store.commit("setLang", locale);
}

export const i18n = new VueI18n({
  locale: locale,
  messages: {
    zh,
    en,
    ch
  }
});
