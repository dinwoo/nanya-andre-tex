<template>
  <div>
    <VueSlickCarousel
      ref="c1"
      :asNavFor="$refs.c2"
      :focusOnSelect="true"
      v-bind="settings"
    >
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </VueSlickCarousel>
    <br />
    <br />
    <br />
    <br />
    <VueSlickCarousel
      ref="c2"
      :asNavFor="$refs.c1"
      :slidesToShow="4"
      :focusOnSelect="true"
    >
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div>
    </VueSlickCarousel>
  </div>
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
  data() {
    return {
      settings: {
        // dots: true,
        // focusOnSelect: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 3,
        // slidesToScroll: 3,
        // touchThreshold: 5
      }
    };
  },
  methods: {}
};
</script>

<style lang="sass">
.slick-arrow
  width: 50px
  background-color: #faa
  &:hover
    background-color: #faa
.txt
  font-size: 50px
</style>