<template lang="pug">
  article#application
    .wrapper
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
export default {
  data() {
    return {
      active: "產品簡介"
    };
  },
  methods: {}
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"
article
  .wrapper
    box-sizing: border-box
    max-width: 1240px
    margin: auto
    padding: 0 20px
    @include rwd(960px)
      max-width: 430px
      padding: 0 15px

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

  &-content
    margin-top: 110px

  @include rwd(1280px)
    &-btn
      width: 200px
      font-size: 30px
      &+&
        margin-left: 50px

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
      
    &-content
      margin-top: 20px
</style>
