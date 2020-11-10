<template lang="pug">
  article#application
    .block
      .wrapper
        #swiper
          select(v-model="val")
            option(value="0") 0
            option(value="1") 1
          CustomSwiper(
            :dotNum = "6"
            :pictureLink="pictureArr[val]"
            :key="val"
          )
    .block
      .wrapper
        .title 內容
        .tab
          .tab-action
            a.tab-btn(href="#" :class="{'active': active == item.name}" v-for="item,index in $t(`${$route.name}.${$route.params.seats}.content`)" @click="active = item.name" :key="index") {{item.name}}
          .tab-content(v-for="item,index in $t(`${$route.name}.${$route.params.seats}.content`)" :key="index")
            .graphicIntro(v-for="el,index in item.data" v-if="active == item.name" :key="index")
              .graphicIntro-img
                figure
                  img(:src="compileFilePath(`${$route.params.seats}/${el.img}`)")
              .graphicIntro-content
                .graphicIntro-title {{el.title}}
                .graphicIntro-desc {{el.desc}}
</template>

<script>
import CustomSwiper from "@/components/CustomSwiper.vue";
export default {
  components: {
    CustomSwiper
  },
  data() {
    return {
      active: "產品簡介",
      val: 0,
      pictureArr: [
        {
          0: "seats/airplane01.jpg",
          1: "seats/airplane02.jpg",
          2: "seats/airplane03.jpg",
          3: "seats/airplane04.jpg",
          4: "seats/airplane05.jpg",
          5: "seats/airplane06.jpg"
        },
        {
          0: "test.jpg",
          1: "test2.png",
          2: "test3.png",
          3: "test4.png"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"

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
    &-action
      padding: 0

    &-btn
      width: 100px
      padding: 8px
      font-size: 15px
      letter-spacing: 2px
      &+&
        margin-left: 13px
      &.solid
        width: calc( (100% - 10px)/2 )
        font-size: 14px
        letter-spacing: 0
        margin-left: 10px
        margin-top: 10px
        padding: 12px 8px
        &:nth-of-type(2n-1)
          margin-left: 0
      
    &-content
      margin-top: 20px
</style>
