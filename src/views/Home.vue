<template lang="pug">
  //- <div class="home">
  //-   <img alt="Vue logo" src="../assets/logo.png" />
  //-   <HelloWorld msg="Welcome to Your Vue.js App" />
  //-   <div class="btnCard">
  //-     <div class="btnCard-item">
  //-       <div class="btnCard-img">
  //-         <img :src="compileFilePath(`01.jpg`)" alt="">
  //-       </div>
  //-       <div class="btnCard-content">
  //-         <div class="btnCard-title">塑膠管材{{ $t(`${$route.name}.card.title`) }}</div>
  //-         <div class="btnCard-desc"></div>
  //-       </div>
  //-     </div>
  //-   </div>
  //- </div>
  #home
    .title-index
      img(:src="compileFilePath(`cardTitle.png`)")
      img(:src="compileFilePath(`cardTitle_m.png`)")
    .btnCard
      a.btnCard-item(href="#" v-for="item in $t(`${$route.name}.card`)")
        .btnCard-img
          img(:src="compileFilePath(item.link)")
          img(:src="compileFilePath(item.linkMob)")
        .btnCard-content
          .btnCard-title {{item.title}}
          .btnCard-desc {{item.desc}}
</template>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="sass">
body
  margin: 0
#home
  box-sizing: border-box
  max-width: 1240px
  margin: auto
  padding: 0 20px
  @media only screen and (max-width: 1024px)
    padding: 0 15px
.title-index
  margin-bottom: 45px
  img
    margin: auto
    &:nth-of-type(2)
      display: none
  @media only screen and (max-width: 960px)
    img
      width: 100%
      max-width: 355px
      &:nth-of-type(1)
        display: none
      &:nth-of-type(2)
          display: block
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
      width: 100%
      &:nth-of-type(2)
        display: none
  &-content
    min-height: 100px
    padding: 10px 20px
  &-title
    font-size: 22px
    font-weight: bold
  &-desc
    font-size: 17px
    text-align: left
  @media only screen and (max-width: 1240px)
    &-title
      font-size: 20px
    &-desc
      font-size: 16px
  @media only screen and (max-width: 960px)
    &-item
      width: calc( (100% - 40px)/2 )
      max-width: 300px
      img
        &:nth-of-type(1)
          display: none
        &:nth-of-type(2)
          display: block
  @media only screen and (max-width: 480px)
    margin: -5px
    &-item
      margin: 5px
    &-content
      min-height: 100px
      padding: 5px 10px
    &-title
      font-size: 14px
    &-desc
      font-size: 12px
</style>
