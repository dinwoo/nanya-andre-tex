import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import { i18n } from './plugins/i18n'
import mixinMethod from "@/mixins/index.js";

import VueImageView from "vue-directive-image-previewer";
import "vue-directive-image-previewer/dist/assets/style.css";

Vue.mixin(mixinMethod);

router.afterEach(() => {
  window.scrollTo(0,300); //切换路由之后滚动条始终在最顶部
});

// 點擊圖片放大
Vue.use(VueImageView, {
  animate: {
    duration: 300
  },
  zIndex: "1000"
})


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
