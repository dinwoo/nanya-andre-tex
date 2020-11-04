<template lang="pug">
  #custom-swiper
    .main-carousel
      VueSlickCarousel(
        ref="c1"
        :asNavFor="$refs.c2"
        :focusOnSelect="true"
        :arrows="false"
        :autoplay="true"
        :autoplaySpeed="2000"
      )
        .carousel-item(v-for="(pic,index) in pictureLink" :key="index")
          //- img(:src="compileFilePath(pic)")
          .pic(
            :style="`background-image:url('${compileFilePath(pic)}')`"
          )
    .dot-carousel
      .pre-btn(
        @click="$refs.c2.prev()"
      ) prev
      .next-btn(
        @click="$refs.c2.next()"
      ) next
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
*:focus
  outline: none
#custom-swiper
  width: 100%
  .main-carousel
    width: 100%
  .dot-carousel
    width: 90%
    margin: 15px auto
    position: relative
  .carousel-item
    width: 100%
    .pic
      width: 100%
      height: 0px
      padding-bottom: 50%
      background-size: cover
      background-position: center center
  .pre-btn,.next-btn
    width: 5%
    height: 0%
    padding-bottom: 5%
    background-color: #666
    position: absolute
    top: 0
    bottom: 0
    margin: auto
    cursor: pointer
  .pre-btn
    left: -5%
  .next-btn
    right: -5%
</style>