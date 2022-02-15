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
                .tab-name
                  span {{item.name}}
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
export default {
  components: {
    BannerSwiper,
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
  metaInfo() {
    return {
      title: this.$t(`Meta.title`),
      meta: [
        {
          name: "title",
          content: this.$t(`${this.$route.name}.meta.title`),
        },
        {
          name: "description",
          content: this.$t(`${this.$route.name}.meta.description`),
        },
        {
          name: "keyword",
          content: this.$t(`${this.$route.name}.meta.keyword`),
        },
        {
          name: "og:title",
          content: this.$t(`${this.$route.name}.meta.title`),
        },
        {
          name: "og:description",
          content: this.$t(`${this.$route.name}.meta.description`),
        },
      ],
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
      width: calc( (100% - 120px)/4 )
      margin: 10px
      padding: 0
      letter-spacing: 0
      text-decoration: none
      color: #000
      border: none
      border-radius: 0
      transition: .3s
      &:hover
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, .3)
    &-name
      padding: 10px
      font-size: 24px
      transition: .3s
    &-content
        margin-top: 60px
  &.certificate &-btn.active &
    &-name
      color: #fff
      background-color: #f0511d
  .en-style &.certificate &
    &-btn
      height: auto
    &-name
      position: relative
      box-sizing: border-box
      height: 92px
      span
        width: calc( 100% - 20px )
  @include rwd(960px)
    &.certificate &
      &-btn
        width: calc( (100% - 40px)/2 )
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, .3)
      &-name
        padding: 5px
        font-size: 15px
      &-content
        margin-top: 30px
    .en-style &.certificate &
      &-name
        height: 55px
        span
          width: calc( 100% - 10px )

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
  @include rwd(960px)
    &-item
      width: calc( (100% - 80px)/2 )
      margin: 0 20px 30px 20px
    &-title
      margin-top: 20px
      font-size: 14px
  @include rwd(540px)
    &-item
      width: calc( (100% - 60px)/2 )
      margin: 0 15px 30px 15px
</style>
