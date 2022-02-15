<template lang="pug">
  article#application
    section.banner
      BannerSwiper(
        :pictureLink="bannerLink"
      )
    section.main
      .block
        .wrapper
          .textContent
            .title {{$t(`${$route.name}.${$route.params.seats}.title`)}}
            p {{$t(`${$route.name}.${$route.params.seats}.text`)}}
          .textContent
            .subTitle {{$t(`${$route.name}.${$route.params.seats}.subTitle`)}}
            p {{$t(`${$route.name}.${$route.params.seats}.subText`)}}
      .block.grey
        .wrapper
          #swiper
            CustomSwiper(
              :title="pictureArr[val].title"
              :subTitle="pictureArr[val].subTitle"
              :dotNum = "5"
              :pictureLink="pictureArr[val].link"
              :key="`${$route.params.seats}-${val}`"
              :pictureArrLength="pictureArr.length"
            )
              template(slot="option")
                .option-items
                  .option-item(v-for="item,index in $t(`${$route.name}.${$route.params.seats}.Swiper.option.item`)" @click="val = index") {{item}}
      .block
        .wrapper
          .title {{$t(`${$route.name}.${$route.params.seats}.tab.title`)}}
          .tab
            .tab-action
              a.tab-btn(href="#" :class="{'active': active == index}" v-for="item,index in $t(`${$route.name}.${$route.params.seats}.tab.content`)" @click.prevent="active = index" :key="index")
                span {{item.name}}
            .tab-content
              template(v-for="item,index in $t(`${$route.name}.${$route.params.seats}.tab.content`)")
                .graphicIntro(:class="{'certificate':index == '2'}" v-for="el,elIndex in item.data" v-if="active == index" :key="elIndex")
                  .graphicIntro-img
                    figure
                      img(v-if="index == 2" v-image-preview :src="compileFilePath(`${$route.params.seats}/${el.img}`)")
                      img(v-else :src="compileFilePath(`${$route.params.seats}/${el.img}`)")
                  .graphicIntro-content
                    .graphicIntro-title {{el.title}}
                    .graphicIntro-desc(v-if="el.desc") {{el.desc}}
      .block
        .wrapper
          .title {{$t(`${$route.name}.${$route.params.seats}.video.title`)}}
          .video
            iframe(:src="$t(`${$route.name}.${$route.params.seats}.video.link`)" title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen='')
</template>

<script>
import BannerSwiper from "@/components/BannerSwiper.vue";
import CustomSwiper from "@/components/CustomSwiper.vue";
export default {
  components: {
    BannerSwiper,
    CustomSwiper,
  },
  data() {
    return {
      bannerLink: [
        {
          1: this.$t(`${this.$route.params.seats}/banner-1.jpg`),
        },
        {
          1: this.$t(`${this.$route.params.seats}/banner-1-m.jpg`),
        },
      ],
      active: 0,
      val: 0,
      pictureArr: this.$t(
        `${this.$route.name}.${this.$route.params.seats}.Swiper.pic`
      ),
    };
  },
  metaInfo() {
    return {
      title: this.$t(`Meta.title`),
      meta: [
        {
          name: "title",
          content: this.$t(
            `${this.$route.name}.${this.$route.params.seats}.meta.title`
          ),
        },
        {
          name: "description",
          content: this.$t(
            `${this.$route.name}.${this.$route.params.seats}.meta.description`
          ),
        },
        {
          name: "keyword",
          content: this.$t(
            `${this.$route.name}.${this.$route.params.seats}.meta.keyword`
          ),
        },
        {
          name: "og:title",
          content: this.$t(
            `${this.$route.name}.${this.$route.params.seats}.meta.title`
          ),
        },
        {
          name: "og:description",
          content: this.$t(
            `${this.$route.name}.${this.$route.params.seats}.meta.description`
          ),
        },
      ],
    };
  },
  watch: {
    "$route.params.seats": function() {
      this.val = 0;
    },
    lang() {
      this.pictureArr = this.$t(
        `${this.$route.name}.${this.$route.params.seats}.Swiper.pic`
      );
    },
    $route() {
      this.bannerLink = [
        {
          1: this.$t(`${this.$route.params.seats}/banner-1.jpg`),
        },
        {
          1: this.$t(`${this.$route.params.seats}/banner-1-m.jpg`),
        },
      ];
      this.pictureArr = this.$t(
        `${this.$route.name}.${this.$route.params.seats}.Swiper.pic`
      );
    },
  },
  methods: {},
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"
#application
  .textContent
    p
      +fontP
      line-height: 1.5
      text-align: left
  .textContent+.textContent
    margin-top: 60px
  .subTitle
    +fontH2
    font-weight: bold
    text-align: left
    margin-bottom: 15px
  .option
    &-box
      text-align: left
    &-items
      display: flex
      flex-direction: column
      flex-wrap: wrap
      max-height: 120px
      padding: 0 80px
    &-item
      position: relative
      margin-top: 15px
      transition: .3s
      cursor: pointer
      &:nth-of-type(3n+1)
        margin-top: 0
      &:before
        content: ''
        display: inline-block
        vertical-align: middle
        width: 12px
        height: 12px
        margin-right: 15px
        margin-bottom: 3px
        border-radius: 50%
        background-color: #2f2f2f
        transition: .3s
      &:hover
        color: #f0511d
        &:before
          background-color: #f0511d
    .en-style &
      &-items
        padding: 0 30px
    @include rwd(960px)
      &-box
        text-align: center
      &-title
        display: none
      &-items
        display: block
        max-height: none
        padding: 0 0 15px 0
      &-item
        text-align: left
        &:nth-of-type(3n+1)
          margin-top: 15px

.graphicIntro
  display: inline-block
  vertical-align: top
  width: calc( (100% - 30px)/2 )
  font-size: 0
  margin-left: 30px
  margin-top: 60px
  &:nth-of-type(odd)
    margin-left: 0

  &-img,
  &-content
    display: inline-block
    vertical-align: top

  &-img
    position: relative
    box-sizing: border-box
    width: 45%
    padding: 2%
    pointer-events: none
    &::after
      content: ''
      position: absolute
      top: -6px
      right: -6px
      bottom: -6px
      left: -6px
      background-image: url(../assets/images/frame.png)
      background-size: 100% 100%

  &-content
    width: 50%
    margin-left: 5%
    text-align: left

  &-title
    +fontH2
    font-weight: bold

  &-desc
    +fontP
    margin-top: 10px
    line-height: 1.2

  &.certificate
    display: inline-block
    vertical-align: top
    width: calc( (100% - 180px)/3 )
    margin: 60px 30px 0 30px
    figure
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, .1)
  &.certificate &
    &-img
      width: 100%
      padding: 0
      pointer-events: auto
      cursor: pointer
      &::after
        content: none
    &-content
      width: 100%
      display: block
      margin: 0
    &-title
      margin-top: 30px
      text-align: center
      color: $orange
  @include rwd(960px)
    width: 100%
    max-width: 640px
    margin: 20px auto 0 auto
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
      // padding: 0 20px

    &-desc
      margin-top: 10px

    &.certificate
      width: calc( (100% - 80px)/2 )
      margin: 30px 20px 40px 20px
      &+&
        padding-top: 0
        border-top: none
    &.certificate &
      &-title
        margin-top: 20px
        font-size: 20px

.tab
  &-desc
    margin-bottom: 60px
    +fontP
    line-height: 1.3
    text-align: left
  &-btn
    box-sizing: border-box
    display: inline-block
    width: 214px
    padding: 10px 16px
    +fontH2
    letter-spacing: 3px
    color: #d53d26
    text-decoration: none
    border-radius: 8px
    border: 1px solid #d53d26
    &+&
      margin-left: 90px
    span
      display: inline-block
      width: 100%

    &.active
      color: #ffffff
      background-color: #d53d26

    &.solid
      position: relative
      vertical-align: middle
      width: calc( (100% - 45px)/4 )
      margin-left: 15px
      padding: 20px 0
      font-size: 24px
      letter-spacing: 0
      color: #828282
      border-radius: 0
      border: 1px solid #828282
      transition: .3s
      &:hover
        color: #fff
        border: 1px solid #f0511d
        background-color: #f0511d
      &:nth-of-type(1)
        margin-left: 0
  .en-style &
    &-btn
      position: relative
      vertical-align: middle
      width: 240px
      height: 82px
      letter-spacing: 0
      span
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        width: calc( 100% - 32px )
      &.solid
        width: calc( (100% - 45px)/4 )
        span
          width: 100%

  @include rwd(960px)
    &-desc
      margin-bottom: 30px
    &-action
      padding: 0

    &-btn
      width: 90px
      padding: 8px
      font-size: 18px
      letter-spacing: 0
      &+&
        margin-left: 10px
      &.solid
        width: calc( (100% - 10px)/2 )
        font-size: 20px
        letter-spacing: 0
        margin-left: 10px
        margin-top: 10px
        padding: 12px 8px
        &:nth-of-type(2n-1)
          margin-left: 0
    .en-style &
      &-btn
        width: 132px
        height: 55px
        span
          width: calc( 100% - 16px )
        &.solid
          display: inline-block
          width: calc( (100% - 10px)/2 )
          height: 80px
          margin-left: 10px
          margin-top: 10px
          &:nth-of-type(2n-1)
            margin-left: 0
          span
            padding: 12px 0

  @include rwd(540px)
    &-btn
      &.solid
        height: 66px
        span
          position: absolute
          top: 50%
          left: 50%
          transform: translate(-50%, -50%)
          box-sizing: border-box
          width: 100%
          padding: 12px 8px
    .en-style &
      &-btn
        display: block
        margin: auto
    .en-style &-btn + &-btn
      margin-top: 10px

.video
  position: relative
  box-sizing: border-box
  margin: 0 60px
  padding-bottom: 49.2%
  iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
  @include rwd(960px)
    margin: 0
    padding-bottom: 56.2%
</style>
