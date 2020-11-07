<template lang="pug">
  .btnCard
    a.btnCard-item(href="#" v-for="item,index in cardData" :key="index")
      .btnCard-img
        img(:src="compileFilePath(item.link)")
        img(:src="compileFilePath(item.linkMob)")
      .btnCard-content
        .btnCard-title {{item.title}}
        .btnCard-desc(v-if="item.desc") {{item.desc}}
</template>

<script>
export default {
  props: ["cardData"],
  data() {
    return {
    };
  },
  methods: {}
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"
.btnCard
  font-size: 0
  margin: -10px
  &-item
    display: inline-block
    vertical-align: top
    width: calc( (100% - 80px)/4 )
    margin: 10px
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, .2)
    text-decoration: none
    color: #000
    img
      &:nth-of-type(2)
        display: none
  &-content
    min-height: 100px
    padding: 10px 18px
  &-title
    font-size: 26px
    font-weight: bold
  &-desc
    margin-top: 5px
    font-size: 18px
    text-align: left
  &.case
    text-align: left
  &.case &
    &-item
      width: calc( (100% - 80px)/3 )
  @include rwd(960px)
    margin: -5px
    &-item
      width: calc( (100% - 40px)/2 )
      max-width: 300px
      margin: 5px
      img
        &:nth-of-type(1)
          display: none
        &:nth-of-type(2)
          display: block
    &-content
      min-height: 100px
      padding: 5px 10px
    &-title
      font-size: 14px
    &-desc
      font-size: 12px
    &.case &
      &-item
        width: calc( 100% - 40px )
        max-width: 460px
</style>
