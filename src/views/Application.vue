<template lang="pug">
  #application
    //- h1 application
    //- p {{$route.params.material}}
    //- p {{ $t(`${$route.name}.${$route.params.material}.title`) }}
    .tab
      .tab-action
        a.tab-btn(href="#" :class="{'active': active == item.name}" v-for="item,index in $t(`${$route.name}.${$route.params.material}.content`)" @click="active = item.name" :key="index") {{item.name}}
      .tab-content(v-for="item,index in $t(`${$route.name}.${$route.params.material}.content`)" :key="index")
        .graphicIntro(v-for="el,index in item.data" v-if="active == item.name" :key="index")
          .graphicIntro-img
            img(:src="compileFilePath(`${$route.params.material}/${el.link}`)")
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
#application
  max-width: 1240px
  margin: auto

.graphicIntro
  font-size: 0
  &+&
    margin-top: 50px
  
  &-img,
  &-content
    display: inline-block
    vertical-align: top
  
  &-img
    width: 550px
  
  &-content
    width: calc( 100% - 550px - 80px )
    margin-left: 80px
    text-align: left
  
  &-title
    font-size: 30px
    font-weight: bold
  
  &-desc
    font-size: 24px
    margin-top: 20px
  @media only screen and (max-width: 1024px)
    &-img,
    &-content
      max-width: 550px
      width: 100%

    &-img
      img
        width: 100%

    &-content
      margin-top: 20px
      margin-left: 0

.tab  
  &-action
    padding: 0 20px
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

    &.active
      color: #f0511d
      border: 1px solid #f0511d

  &-btn + &-btn
    margin-left: 170px

  &-content
    margin-top: 110px

  @media only screen and (max-width: 1240px)
    &-btn + &-btn
      margin-left: 50px
  @media only screen and (max-width: 1024px)
    &-action
      padding: 0
    &-btn + &-btn
      margin-left: 13px
    &-btn
      width: 100px
      padding: 8px
      font-size: 15px
      letter-spacing: 2px
    &-content
      margin-top: 20px
</style>
