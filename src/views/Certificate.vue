<template lang="pug">
  article#certificate
    section.banner
      BannerSwiper(
        :pictureLink="bannerLink"
      )
    section.main
      .block
        .wrapper
          .tab.certificate
            .tab-action
              a.tab-btn(href="#" :class="{'active': active == index}" v-for="item,index in $t(`${$route.name}.content`)" @click.prevent="active = index" :key="index")
                .tab-img
                  img(:src="compileFilePath(item.btnImg)")
                .tab-name {{item.name}}
            .tab-content
              .certificate-items
                template(v-for="item,itemIndex in $t(`${$route.name}.content`)")
                  .certificate-item(href="#" v-for="el,index in item.data" v-if="active == itemIndex" :key="index")
                    figure
                      img(v-image-preview :src="compileFilePath(el.img)")
                    .certificate-title {{el.title}}
</template>

<script>
import BannerSwiper from "@/components/BannerSwiper.vue";
import btnCard from "@/components/btnCard.vue";
export default {
  components: {
    BannerSwiper,
    btnCard,
  },
  data() {
    return {
      bannerLink: [
        {
          1: "banner-1.jpg",
        },
        {
          1: "banner-1-m.jpg",
        },
      ],
      active: 0,
    };
  },
  methods: {},
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"
.tab
  &.certificate &
    &-action
      margin: -10px
      font-size: 0
    &-btn
      display: inline-block
      vertical-align: top
      width: calc( (100% - 120px)/6 )
      margin: 10px
      padding: 0
      letter-spacing: 0
      text-decoration: none
      color: #000
      border: none
      transition: .3s
      &:hover
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, .3)
    &-name
      padding: 10px
      font-size: 18px
      transition: .3s
    &-content
        margin-top: 60px
  &.certificate &-btn.active &
    &-name
      color: #fff
      background-color: #f0511d
  @include rwd(1280px)
    &.certificate &
      &-action
        margin: -5px
      &-btn
        width: calc( (100% - 60px)/6 )
        margin: 5px
      &-name
        font-size: 15px
  @include rwd(960px)
    &.certificate &
      &-btn
        width: calc( (100% - 30px)/3 )
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, .3)
      &-name
        padding: 5px
        font-size: 12px
      &-content
        margin-top: 30px
  @include rwd(374px)
    &.certificate &
      &-name
        box-sizing: border-box
        min-height: 34px

.certificate
  &-items
    font-size: 0
    text-align: left
  &-item
    display: inline-block
    vertical-align: top
    width: calc( (100% - 252px)/3 )
    margin: 0 42px 42px 42px
    cursor: pointer
    figure
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, .1)
  &-title
    margin-top: 45px
    font-size: 30px
    text-align: center
    color: $orange
  @include rwd(1280px)
    &-title
      font-size: 26px
  @include rwd(960px)
    &-items
      margin: 0 -20px -30px -20px
    &-item
      width: calc( (100% - 80px)/2 )
      margin: 0 20px 30px 20px
    &-title
      margin-top: 20px
      font-size: 14px
</style>
