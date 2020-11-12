<template lang="pug">
  article#examples
    section.banner
      BannerSwiper(
        :pictureLink="bannerLink"
      )
    section.main
      .block.grey
        .wrapper
          .title 成功案例
          btnCard(:cardData="$t(`${$route.name}.card`)" :className="`examples`" v-on:swiperClick="cardVal")
      .block#swiperTarget
        .wrapper
          #swiper
            CustomSwiper(
              :title="pictureArr[val].title"
              :subTitle="pictureArr[val].subTitle"
              :dotNum = "5"
              :pictureLink="pictureArr[val].link"
              :key="val"
            )
              template(slot="option")
              .option-items
                .option-item(@click="cardVal(), valChange(0)") 桃園 芙蓉匯
                .option-item(@click="cardVal(), valChange(1)") 新莊 麗寶雙璽
                .option-item(@click="cardVal(), valChange(2)") 遠雄95大樓
                .option-item(@click="cardVal(), valChange(3)") 海上皇宮
                .option-item(@click="cardVal(), valChange(4)") 海洋都心三期
</template>

<script>
import BannerSwiper from "@/components/BannerSwiper.vue";
import btnCard from "@/components/btnCard.vue";
import CustomSwiper from "@/components/CustomSwiper.vue";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    BannerSwiper,
    btnCard,
    CustomSwiper
  },
  data() {
    return {
      bannerLink: [
        {
          1: "banner-1.jpg",
          2: "banner-1.jpg",
          3: "banner-1.jpg"
        },
        {
          1: "banner-1-m.jpg",
          2: "banner-1-m.jpg",
          3: "banner-1-m.jpg"
        },
      ],
      val: 0,
      pictureArr: [
        {
          title: "桃園 芙蓉匯",
          link: ["taoyuan.jpg", "taoyuan.jpg", "taoyuan.jpg"]
        },
        {
          title: "新莊 麗寶雙璽",
          link: ["xinzhuang.jpg", "xinzhuang.jpg", "xinzhuang.jpg", "xinzhuang.jpg"]
        },
        {
          title: "遠雄95大樓",
          link: ["building95.jpg", "building95.jpg", "building95.jpg", "building95.jpg"]
        },
        {
          title: "海上皇宮",
          link: ["seaPalace.jpg", "seaPalace.jpg"]
        },
        {
          title: "海洋都心三期",
          link: ["sea.jpg", "sea.jpg"]
        }
      ]
    };
  },
  methods: {
    cardVal: function(card){
      return this.val = card
    },
    valChange: function(swiperVal){
      return this.val = swiperVal
    }
  }
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"
</style>
