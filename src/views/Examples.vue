<template lang="pug">
  article#examples
    section.banner
      BannerSwiper(
        :pictureLink="bannerLink"
      )
    section.main
      .block.grey
        .wrapper
          .title {{$t(`${$route.name}.title`)}}
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
                  .option-item(v-for="item,index in $t(`${$route.name}.Swiper.option`)" @click="cardVal(), valChange(index)" :key="index") {{item}}
</template>

<script>
import BannerSwiper from "@/components/BannerSwiper.vue";
import btnCard from "@/components/btnCard.vue";
import CustomSwiper from "@/components/CustomSwiper.vue";
export default {
  components: {
    BannerSwiper,
    btnCard,
    CustomSwiper,
  },
  data() {
    return {
      bannerLink: [
        {
          1: "banner-1.jpg",
        },
        {
          1: "banner-1-m.jpg",
        },
      ],
      val: 0,
      pictureArr: this.$t(`${this.$route.name}.Swiper.pic`),
    };
  },
  watch: {
    lang() {
      this.pictureArr = this.$t(`${this.$route.name}.Swiper.pic`);
    },
  },
  methods: {
    cardVal: function(card) {
      return (this.val = card);
    },
    valChange: function(swiperVal) {
      return (this.val = swiperVal);
    },
  },
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"
#examples
  .option
    &-items
      padding: 20px 0
      font-size: 0
    &-item
      position: relative
      display: inline-block
      vertical-align: top
      margin-left: 45px
      font-size: 22px
      transition: .3s
      cursor: pointer
      &:first-of-type
        margin-left: 0
      &:before
        content: ''
        display: inline-block
        vertical-align: middle
        width: 3px
        height: 3px
        margin-right: 10px
        margin-bottom: 3px
        border-radius: 50%
        background-color: #2f2f2f
        transition: .3s
      &:hover
        color: #f0511d
        &:before
          background-color: #f0511d
    @include rwd(960px)
      &-item
        width: 100%
        font-size: 15px
        margin-left: 0
        margin-top: 20px
        &:first-of-type
          margin-top: 0
</style>
