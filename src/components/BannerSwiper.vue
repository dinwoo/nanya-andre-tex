<template lang="pug">
  #banner-swiper
    VueSlickCarousel(
      v-bind="settings"
    )
      .banner-pic(
        v-for="(pic,index) in pictureLink" :key="index"
      )
        .pic(
          :style="`background-image:url('${compileFilePath(pic)}')`"
        )
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel
  },
  props: ["pictureLink"],
  data() {
    return {
      settings:{
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class banner-dots",
        "edgeFriction": 0.35,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true
      },
      slidesToShow: 0,
      showOption: false
    };
  },
  mounted() {
    // this.slidesToShow = this.dotNum;
  },
  methods: {}
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"

.banner-dots
  li
    button
      &:before
        color: #eee
        opacity: 1
    &.slick-active
      button
        &:before
          color: $orange
</style>

<style lang="sass" scoped>
@import "../assets/sass/var.sass"

*
  // outline: 1px solid #f00
  &:focus
    outline: none
#banner-swiper
  width: 100%
  padding-bottom: 40px
  overflow: hidden
  .banner-pic
    width: 100%
    padding-bottom: 38%
    position: relative
    .pic
      width: 100%
      height: 100%
      background-size: cover
      background-position: center center
      background-repeat: no-repeat
      +pstc0
</style>