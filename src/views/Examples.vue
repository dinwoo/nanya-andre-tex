<template lang="pug">
  article#examples
    section.banner
      BannerSwiper(
        :pictureLink="bannerLink"
      )
    section.main
      .block.grey
        .wrapper
          .title {{$t(`${$route.name}.${$route.params.pipe}.title`)}}
          btnCard(:cardData="$t(`${$route.name}.${$route.params.pipe}.card`)" :className="`examples`" v-on:swiperClick="cardVal")
      .block#swiperTarget
        .wrapper
          #swiper
            CustomSwiper(
              :title="pictureArr[val].title"
              :subTitle="pictureArr[val].subTitle"
              :dotNum = "5"
              :pictureLink="pictureArr[val].link"
              :key="`${$route.params.pipe}-${val}`"
            )
              template(slot="option")
                .option-items
                  .option-item(v-for="item,index in $t(`${$route.name}.${$route.params.pipe}.Swiper.option`)" @click="cardVal(), valChange(index)" :key="index") {{item}}
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
          1: this.$t(`${this.$route.params.pipe}/banner-1.jpg`),
        },
        {
          1: this.$t(`${this.$route.params.pipe}/banner-1-m.jpg`),
        },
      ],
      active: 0,
      val: 0,
      pictureArr: this.$t(`${this.$route.name}.${this.$route.params.pipe}.Swiper.pic`),
    };
  },
  watch: {
    '$route.params.pipe':function () {
      this.val = 0
    },
    lang() {
      this.pictureArr = this.$t(`${this.$route.name}.${this.$route.params.pipe}.Swiper.pic`);
    },
    $route() {
      this.bannerLink = [
        {
          1: this.$t(`${this.$route.params.pipe}/banner-1.jpg`),
        },
        {
          1: this.$t(`${this.$route.params.pipe}/banner-1-m.jpg`),
        },
      ];
      this.pictureArr = this.$t(`${this.$route.name}.${this.$route.params.pipe}.Swiper.pic`);
    }
  },
  methods: {
    cardVal: function(card) {
      return (this.val = card);
    },
    valChange: function(swiperVal) {
      return (this.val = swiperVal);
    }
  },
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"
#examples
  .option
    &-box
      text-align: left
    &-items
      display: flex
      flex-direction: column
      flex-wrap: wrap
      max-height: 120px
      padding: 0 80px
    &-item
      position: relative
      margin-top: 15px
      transition: .3s
      cursor: pointer
      &:nth-of-type(3n+1)
        margin-top: 0
      &:before
        content: ''
        display: inline-block
        vertical-align: middle
        width: 12px
        height: 12px
        margin-right: 15px
        margin-bottom: 3px
        border-radius: 50%
        background-color: #2f2f2f
        transition: .3s
      &:hover
        color: #f0511d
        &:before
          background-color: #f0511d
    @include rwd(960px)
      &-box
        text-align: center
      &-title
        display: none
      &-items
        display: block
        max-height: none
        padding: 0 0 15px 0
      &-item
        text-align: left
        &:nth-of-type(3n+1)
          margin-top: 15px

</style>
