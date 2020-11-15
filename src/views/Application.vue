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
              :key="val"
            )
              template(slot="option")
                .option-title 座椅內用防火材
                .option-items
                  .option-item(@click="val=0") 飛機座椅
                  .option-item(@click="val=1") 高鐵座椅
                  .option-item(@click="val=2") 電影院座椅
      .block
        .wrapper
          .title 內容
          .tab
            .tab-action
              a.tab-btn(href="#" :class="{'active': active == item.name}" v-for="item,index in $t(`${$route.name}.${$route.params.seats}.content`)" @click.prevent="active = item.name" :key="index") {{item.name}}
            .tab-content
              template(v-for="item in $t(`${$route.name}.${$route.params.seats}.content`)")
                .graphicIntro(v-for="el,index in item.data" v-if="active == item.name" :key="index")
                  .graphicIntro-img
                    figure
                      img(:src="compileFilePath(`${$route.params.seats}/${el.img}`)")
                  .graphicIntro-content
                    .graphicIntro-title {{el.title}}
                    .graphicIntro-desc {{el.desc}}
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
          1: "seats/banner-1.jpg",
        },
        {
          1: "seats/banner-1-m.jpg",
        },
      ],
      active: "產品簡介",
      val: 0,
      pictureArr: [
        {
          title: "座椅內用防火材",
          subTitle: "飛機座椅",
          link: [
            "seats/airplane-1.jpg",
            "seats/airplane-2.jpg",
            "seats/airplane-3.jpg",
            "seats/airplane-4.jpg",
            "seats/airplane-5.jpg",
            "seats/airplane-6.jpg",
          ],
        },
        {
          title: "座椅內用防火材",
          subTitle: "高鐵座椅",
          link: [
            "seats/airplane-1.jpg",
            "seats/airplane-2.jpg",
            "seats/airplane-3.jpg",
            "seats/airplane-4.jpg",
            "seats/airplane-5.jpg",
            "seats/airplane-6.jpg",
          ],
        },
        {
          title: "座椅內用防火材",
          subTitle: "電影院座椅",
          link: [
            "seats/airplane-1.jpg",
            "seats/airplane-2.jpg",
            "seats/airplane-3.jpg",
            "seats/airplane-4.jpg",
            "seats/airplane-5.jpg",
            "seats/airplane-6.jpg",
          ],
        },
      ],
    };
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

  &-content
    width: 50%
    margin-left: 5%
    text-align: left

  &-title
    font-size: 30px
    font-weight: bold

  &-desc
    font-size: 24px
    margin-top: 20px

  @include rwd(1280px)
    &-title
      font-size: 24px

    &-desc
      font-size: 18px
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

.tab
  &-desc
    margin-bottom: 60px
    font-size: 26px
    line-height: 1.3
    text-align: left
  &-btn
    box-sizing: border-box
    display: inline-block
    width: 280px
    padding: 16px
    font-size: 36px
    letter-spacing: 5px
    color: #828282
    text-decoration: none
    border: 1px solid #828282
    &+&
      margin-left: 170px

    &.active
      color: #f0511d
      border: 1px solid #f0511d

    &.solid
      width: calc( (100% - 60px)/4 )
      margin-left: 20px
      padding: 20px 10px
      font-size: 26px
      letter-spacing: 3px
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
      font-size: 30px
      &+&
        margin-left: 50px
      &.solid
        margin-left: 20px
        font-size: 18px
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
