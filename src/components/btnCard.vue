<template lang="pug">
  .btnCard(:class="className")
    a.btnCard-item(:href="`#`" v-for="item,index in cardData" :key="index" @click.prevent="cardIndex(index), swiperChange(), goAnchor(item.link)")
      .btnCard-img
        img(:src="compileFilePath(item.img)")
        img(:src="compileFilePath(item.imgMob)")
      .btnCard-content
        .btnCard-title {{item.title}}
        .btnCard-desc(v-if="item.desc") {{item.desc}}
</template>

<script>
export default {
  props: ["cardData", "className"],
  data() {
    return {
      swiperVal: 1
    };
  },
  methods: {
    swiperChange: function(){
      this.$emit('swiperClick', this.swiperVal)
    },
    cardIndex: function(index){
      return this.swiperVal = index
    },
    goAnchor(link) {
      if (this.$el.classList.contains('examples')) {
        var anchor = document.querySelector('#swiperTarget').offsetTop - 93;
        window.scrollTo(0, anchor);
      } else {
        window.location.href = link;
      }
    }
  }
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"
.btnCard
  margin: -10px
  font-size: 0
  &-item
    display: inline-block
    vertical-align: top
    width: calc( (100% - 80px)/4 )
    margin: 10px
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, .2)
    text-decoration: none
    color: #000
    img
      transition: .5s
      &:hover
        transform: scale(1.2)
      &:nth-of-type(2)
        display: none
  &-img
    overflow: hidden
  &-content
    min-height: 100px
    padding: 10px 18px
  &-title
    font-size: 26px
    font-weight: bold
    text-align: center
  &-desc
    margin-top: 5px
    font-size: 18px
    text-align: left
  &.examples
    margin: -20px
    text-align: left
  &.examples &
    &-item
      width: calc( (100% - 120px)/3 )
      max-width: none
      margin: 20px
    &-content
      min-height: auto
      padding: 20px
  .en-style &.examples &
    &-content
      position: relative
      box-sizing: border-box
      height: 98px
      padding: 10px
    &-title
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      width: calc( 100% - 20px )
  @include rwd(960px)
    &-item
      width: calc( (100% - 40px)/2 )
      max-width: 300px
      img
        &:nth-of-type(1)
          display: none
        &:nth-of-type(2)
          display: block
    &-content
      padding: 5px 10px
      min-height: 60px
    &-title
      font-size: 14px
    &-desc
      font-size: 12px
    &.examples
      margin: -10px
      text-align: center
    &.examples &
      &-item
        width: calc( 100% - 20px )
        max-width: 360px
        margin: 10px
      &-title
        font-size: 22px
    .en-style &.examples &
      &-content
        height: 75px
</style>
