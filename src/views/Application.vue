<template lang="pug">
  article#application
    section.banner
      BannerSwiper(
        :pictureLink="bannerLink"
      )
    section.main
      .block
        .wrapper
          #swiper
            CustomSwiper(
              :title="pictureArr[val].title"
              :subTitle="pictureArr[val].subTitle"
              :dotNum = "5"
              :pictureLink="pictureArr[val].link"
              :key="`${$route.params.seats}-${val}`"
            )
              template(slot="option")
                .option-title {{$t(`${$route.name}.${$route.params.seats}.Swiper.option.title`)}}
                .option-items
                  .option-item(v-for="item,index in $t(`${$route.name}.${$route.params.seats}.Swiper.option.item`)" @click="val = index") {{item}}
      .block
        .wrapper
          .title {{$t(`${$route.name}.${$route.params.seats}.tab.title`)}}
          .tab
            .tab-action
              a.tab-btn(href="#" :class="{'active': active == index}" v-for="item,index in $t(`${$route.name}.${$route.params.seats}.tab.content`)" @click.prevent="active = index" :key="index") {{item.name}}
            .tab-content
              template(v-for="item,index in $t(`${$route.name}.${$route.params.seats}.tab.content`)")
                .graphicIntro(:class="{'certificate':index == '2'}" v-for="el,elIndex in item.data" v-if="active == index" :key="elIndex")
                  .graphicIntro-img
                    figure
                      img(v-if="index == 2" v-image-preview :src="compileFilePath(`${$route.params.seats}/${el.img}`)")
                      img(v-else :src="compileFilePath(`${$route.params.seats}/${el.img}`)")
                  .graphicIntro-content
                    .graphicIntro-title {{el.title}}
                    .graphicIntro-desc(v-if="el.desc") {{el.desc}}
</template>

<script>
import BannerSwiper from "@/components/BannerSwiper.vue";
import CustomSwiper from "@/components/CustomSwiper.vue";
export default {
  components: {
    BannerSwiper,
    CustomSwiper,
  },
  data() {
    return {
      bannerLink: [
        {
          1: this.$t(`${this.$route.params.seats}/banner-1.jpg`),
        },
        {
          1: this.$t(`${this.$route.params.seats}/banner-1-m.jpg`),
        },
      ],
      active: 0,
      val: 0,
      pictureArr: this.$t(`${this.$route.name}.${this.$route.params.seats}.Swiper.pic`),
    };
  },
  watch: {
    '$route.params.seats':function () {
      this.val = 0
    },
    lang() {
      this.pictureArr = this.$t(`${this.$route.name}.${this.$route.params.seats}.Swiper.pic`);
    },
    $route() {
      this.bannerLink = [
        {
          1: this.$t(`${this.$route.params.seats}/banner-1.jpg`),
        },
        {
          1: this.$t(`${this.$route.params.seats}/banner-1-m.jpg`),
        },
      ];
      this.pictureArr = this.$t(`${this.$route.name}.${this.$route.params.seats}.Swiper.pic`);
    }
  },
  methods: {},
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"
#application
  .option
    &-box
      text-align: left
    &-title
      display: inline-block
      vertical-align: top
      font-size: 25px
      margin: 0 40px 0 20px
    &-items
      display: inline-block
      vertical-align: top
    &-item
      position: relative
      margin-top: 25px
      font-size: 24px
      transition: .3s
      cursor: pointer
      &:first-of-type
        margin-top: 0
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
      &-box
        text-align: center
      &-title
        display: none
      &-items
        padding: 20px 0
      &-item
        font-size: 15px

.graphicIntro
  font-size: 0
  &+&
    margin-top: 50px

  &-img,
  &-content
    display: inline-block
    vertical-align: top

  &-img
    width: 45%
    pointer-events: none

  &-content
    width: 50%
    margin-left: 5%
    text-align: left

  &-title
    font-size: 28px
    font-weight: bold

  &-desc
    font-size: 24px
    margin-top: 20px

  &.certificate
    display: inline-block
    vertical-align: top
    width: calc( (100% - 180px)/3 )
    margin: 0 30px 60px 30px
    figure
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, .1)
  &.certificate &
    &-img
      width: 100%
      pointer-events: auto
      cursor: pointer
    &-content
      width: 100%
      display: block
      margin: 0
    &-title
      margin-top: 30px
      text-align: center
      color: $orange

  @include rwd(1280px)
    &-title
      font-size: 24px

    &-desc
      font-size: 18px
    &.certificate &
      &-title
        font-size: 26px
  @include rwd(960px)
    max-width: 640px
    margin: auto
    &+&
      margin-top: 20px
      padding-top: 20px
      border-top: 1px solid #adadad

    &-img,
    &-content
      width: 100%

    &-content
      box-sizing: border-box
      margin-top: 20px
      margin-left: 0
      padding: 0 20px

    &-title
      font-size: 15px

    &-desc
      font-size: 12px
      margin-top: 10px

    &.certificate
      width: calc( (100% - 80px)/2 )
      margin: 0 20px 40px 20px
      &+&
        padding-top: 0
        border-top: none
    &.certificate &
      &-title
        margin-top: 20px
        font-size: 14px

.tab
  &-desc
    margin-bottom: 60px
    font-size: 24px
    line-height: 1.3
    text-align: left
  &-btn
    box-sizing: border-box
    display: inline-block
    width: 240px
    padding: 16px
    font-size: 32px
    letter-spacing: 5px
    color: #828282
    text-decoration: none
    border: 1px solid #828282
    &+&
      margin-left: 120px

    &.active
      color: #f0511d
      border: 1px solid #f0511d

    &.solid
      width: calc( (100% - 60px)/4 )
      margin-left: 20px
      padding: 20px 10px
      font-size: 24px
      letter-spacing: 0
      transition: .3s
      &:hover
        color: #fff
        border: 1px solid #f0511d
        background-color: #f0511d
      &:nth-of-type(1)
        margin-left: 0

  &-content
    margin-top: 110px

  @include rwd(1280px)
    &-btn
      width: 200px
      font-size: 28px
      &+&
        margin-left: 100px
      &.solid
        margin-left: 20px
        font-size: 22px
        &:nth-of-type(1)
          margin-left: 0

  @include rwd(960px)
    &-desc
      margin-bottom: 30px
      font-size: 14px
    &-action
      padding: 0

    &-btn
      width: 90px
      padding: 8px
      font-size: 14px
      letter-spacing: 2px
      &+&
        margin-left: 10px
      &.solid
        width: calc( (100% - 10px)/2 )
        letter-spacing: 0
        margin-left: 10px
        margin-top: 10px
        padding: 12px 8px
        &:nth-of-type(2n-1)
          margin-left: 0

    &-content
      margin-top: 20px
  @include rwd(374px)
    &-btn
      &.solid
        font-size: 14px
</style>
