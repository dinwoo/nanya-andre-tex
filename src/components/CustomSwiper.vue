<template lang="pug">
  #custom-swiper
    .title {{title}}
    .sub-title {{subTitle}}
    .option-btn(
      @click="showOption=!showOption"
    )
    .carousel-box
      .option-box(
        v-if="showOption"
      )
        slot(name="option")
          ul
            li test
            li test
      .main-carousel
        VueSlickCarousel(
          ref="c1"
          :asNavFor="$refs.c2"
          :focusOnSelect="true"
          :arrows="false"
          :autoplay="true"
          :autoplaySpeed="3000"
        )
          .carousel-item(v-for="(pic,index) in pictureLink" :key="index")
            //- img(:src="compileFilePath(pic)")
            .pic(
              :style="`background-image:url('${compileFilePath(pic)}')`"
            )
      .pre-btn(
        @click="$refs.c2.prev()"
      )
      .dot-carousel
        VueSlickCarousel(
          ref="c2"
          :asNavFor="$refs.c1"
          v-bind="dotSetting"
        )
          .carousel-item(v-for="(pic,index) in pictureLink" :key="index")
            //- img(:src="compileFilePath(pic)")
            .pic(
              :style="`background-image:url('${compileFilePath(pic)}')`"
            )
      .next-btn(
        @click="$refs.c2.next()"
      )
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  props: ["title", "subTitle", "dotNum", "pictureLink"],
  data() {
    return {
      slidesToShow: 0,
      showOption: false,
      dotSetting:{
          "slidesToShow":this.slidesToShow,
          "focusOnSelect":true,
          "arrows":false,
          "centerMode":true,
          "responsive": [
            {
              "breakpoint": 768,
              "settings": {
                "slidesToShow":2,
              }
            },
          ]
      }
    };
  },
  mounted() {
    this.slidesToShow = this.dotNum;
    this.dotSetting.slidesToShow = this.dotNum;
  },
  methods: {},
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/var.sass"

*
  // outline: 1px solid #f00
  &:focus
    outline: none
#custom-swiper
  width: 100%
  max-width: 1280px
  padding: 0 15px
  margin: 30px auto
  box-sizing: border-box
  .title
    +fontH1
    font-weight: bold
    margin-bottom: 20px
    border-bottom: 5px solid $orange
    display: inline-block
  .sub-title
    +fontH2
    margin-bottom: 20px
  .option-btn
    width: 0
    height: 0
    border-right: 30px solid transparent
    border-top: 30px solid $orange
    border-bottom: 0px solid transparent
    border-left: 30px solid transparent
    margin: 0 auto 20px
    cursor: pointer
  .option-item
    +fontH2
  .carousel-box
    padding: 25px 5% 0
    position: relative
    font-size: 0
    .option-box
      width: 100%
      padding: 15px
      background-color: rgba(#fff,.55)
      box-sizing: border-box
      box-shadow: 0px 16px 35px rgba(#000,.4)
      position: absolute
      top: 0
      left: 0
      right: 0
      margin: auto
      z-index: 1
      ul
        font-size: 0
        li
          width: 50%
          font-size: 24px
          padding: 20px 0
          list-style: disc
          cursor: pointer
          transition: .2s
          +dib
          +hover
            color: $orange
  .main-carousel
    width: 100%
    margin: auto
    box-sizing: border-box
  .dot-carousel
    width: 94%
    padding: 0 15px
    margin: 15px auto
    box-sizing: border-box
    position: relative
    +dib
  .carousel-item
    width: 100%
    padding: 0 10px
    box-sizing: border-box
    .pic
      width: 100%
      height: 0px
      padding-bottom: 57%
      background-size: cover
      background-position: center center
  .pre-btn,.next-btn
    width: 3%
    padding-bottom: 6%
    background-size: contain
    background-position: center center
    background-repeat: no-repeat
    position: relative
    cursor: pointer
    +dib
  .pre-btn
    background-image: url('../assets/images/arrow_pre.png')
  .next-btn
    background-image: url('../assets/images/arrow_next.png')
  @include rwd(960px)
    .title
      // margin-bottom: 20px
      // border-bottom: 5px solid $orange
    .sub-title
      // margin-bottom: 20px
    .option-btn
      border-right: 20px solid transparent
      border-top: 20px solid $orange
      border-bottom: 0px solid transparent
      border-left: 20px solid transparent
      // margin: 0 auto 20px
    .carousel-box
      // padding: 25px 5% 0
      .option-box
        // width: 100%
        padding: 30px 15px
        // box-shadow: 0px 16px 35px rgba(#000,.4)
        ul
          li
            // width: 50%
            font-size: 20px
            padding: 10px 0
      .option-item
    // .main-carousel
    .dot-carousel
      // padding: 0 15px
      // margin: 15px auto
    .carousel-item
      // padding: 0 10px
    //   .pic
    // .pre-btn,.next-btn
  @include rwd(540px)
    .title
      // font-size: 25px
      margin-bottom: 10px
      border-bottom: 2px solid $orange
    .sub-title
      // font-size: 15px
      margin-bottom: 10px
    .option-btn
      border-right: 10px solid transparent
      border-top: 10px solid $orange
      border-bottom: 0px solid transparent
      border-left: 10px solid transparent
      margin: 0 auto
    .carousel-box
      padding: 15px 5% 0
      .option-box
        // width: 100%
        padding: 10px 15px
        // box-shadow: 0px 16px 35px rgba(#000,.4)
        ul
          li
            // width: 50%
            font-size: 16px
            padding: 5px 0
    // .main-carousel
    .dot-carousel
      width: 90%
      padding: 0 5px
      margin: 5px auto
    .carousel-item
      padding: 0 2px
    //   .pic
    .pre-btn,.next-btn
      width: 5%
      padding-bottom: 10%
</style>
