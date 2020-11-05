<template lang="pug">
  #custom-swiper
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
    .dot-carousel
      .pre-btn(
        @click="$refs.c2.prev()"
      )
      .next-btn(
        @click="$refs.c2.next()"
      )
      VueSlickCarousel(
        ref="c2"
        :asNavFor="$refs.c1"
        :slidesToShow="slidesToShow"
        :focusOnSelect="true"
        :arrows="false"
        :centerMode="true"
      )
        .carousel-item(v-for="(pic,index) in pictureLink" :key="index")
          //- img(:src="compileFilePath(pic)")
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
  props: ["dotNum", "pictureLink"],
  data() {
    return {
      slidesToShow: 0
    };
  },
  mounted() {
    console.log(this.compileFilePath(this.pictureLink[0]));
    this.slidesToShow = this.dotNum;
  },
  methods: {}
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/var.sass"

*:focus
  outline: none
#custom-swiper
  width: 100%
  .main-carousel
    width: 100%
    margin: auto
    box-sizing: border-box
  .dot-carousel
    width: calc(100% - 120px)
    margin: 15px auto
    box-sizing: border-box
    position: relative
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
    width: 0px
    height: 0px
    position: absolute
    top: 0
    bottom: 0
    margin: auto
    cursor: pointer
  .pre-btn
    left: -50px
    border-right: 30px solid $orange
    border-top: 30px solid transparent
    border-bottom: 30px solid transparent
    border-left: 0px solid transparent
  .next-btn
    right: -5%
    border-right: 00px solid transparent
    border-top: 30px solid transparent
    border-bottom: 30px solid transparent
    border-left: 30px solid $orange
</style>