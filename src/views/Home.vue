<template lang="pug">
  article#home
    BannerSwiper(
      :pictureLink="bannerLink"
    )
    .block.block-thermometer
      .wrapper
        .title
          figure.thermometer-title
            img(:src="compileFilePath(`thermometer-title.png`)")
            img(:src="compileFilePath(`thermometer-title-m.png`)")
        .mobile-content
          .thermometer(
            :style="`background-image:url('${compileFilePath(thermometerMobileLink)}')`"
          )
          .change-btn(@click="thermometerMobileLink='thermometer-img8-1.png'")
          .change-btn(@click="thermometerMobileLink='thermometer-img8-2.png'")
          .change-btn(@click="thermometerMobileLink='thermometer-img8-3.png'")
        .content
          .top
            .item(
              @mouseenter="thermometerLink='thermometer-img7-3.jpg'"
            )
              .pic-box
                figure.pic
                  img(:src="compileFilePath(`thermometer-img1-1.png`)")
                .info
                  p.title {{ $t(`${$route.name}.thermometer[0].title`) }}
                  p.detail {{ $t(`${$route.name}.thermometer[0].detail1`) }}
                  p.detail
                    | {{ $t(`${$route.name}.thermometer[0].detail2`) }}
                    span 2
                  p.detail {{ $t(`${$route.name}.thermometer[0].detail3`) }}
              figure.name
                img(:src="compileFilePath(`thermometer-img1-2.png`)")
              figure.arrow
                img(:src="compileFilePath(`thermometer-arrow-1.png`)")
            .item(
              @mouseenter="thermometerLink='thermometer-img7-2.jpg'"
            )
              .pic-box
                figure.pic
                  img(:src="compileFilePath(`thermometer-img2-1.png`)")
                .info
                  p.title {{ $t(`${$route.name}.thermometer[1].title`) }}
                  p.detail {{ $t(`${$route.name}.thermometer[1].detail1`) }}
                  p.detail
                    | {{ $t(`${$route.name}.thermometer[1].detail2`) }}
                    span 2
                  p.detail {{ $t(`${$route.name}.thermometer[1].detail3`) }}
              figure.name
                img(:src="compileFilePath(`thermometer-img2-2.png`)")
              figure.arrow
                img(:src="compileFilePath(`thermometer-arrow-1.png`)")
            .item(
              @mouseenter="thermometerLink='thermometer-img7-1.jpg'"
            )
              .pic-box
                figure.pic
                  img(:src="compileFilePath(`thermometer-img3-1.png`)")
                .info
                  p.title {{ $t(`${$route.name}.thermometer[2].title`) }}
                  p.detail {{ $t(`${$route.name}.thermometer[2].detail1`) }}
                  p.detail
                    | {{ $t(`${$route.name}.thermometer[2].detail2`) }}
                    span 2
                  p.detail {{ $t(`${$route.name}.thermometer[2].detail3`) }}
              figure.name
                img(:src="compileFilePath(`thermometer-img3-2.png`)")
              figure.arrow
                img(:src="compileFilePath(`thermometer-arrow-1.png`)")
          .thermometer(
            :style="`background-image:url('${compileFilePath(thermometerLink)}')`"
          )
          .bottom
            .item(
              @mouseenter="thermometerLink='thermometer-img7-3.jpg'"
            )
              figure.arrow
                img(:src="compileFilePath(`thermometer-arrow-2.png`)")
              .pic-box
                figure.pic
                  img(:src="compileFilePath(`thermometer-img4-1.png`)")
                .info
                  p.title {{ $t(`${$route.name}.thermometer[3].title`) }}
                  p.detail {{ $t(`${$route.name}.thermometer[3].detail1`) }}
                  p.detail
                    | {{ $t(`${$route.name}.thermometer[3].detail2`) }}
                    span 2
                  p.detail {{ $t(`${$route.name}.thermometer[3].detail3`) }}
              figure.name
                img(:src="compileFilePath(`thermometer-img4-2.png`)")
            .item(
              @mouseenter="thermometerLink='thermometer-img7-2.jpg'"
            )
              figure.arrow
                img(:src="compileFilePath(`thermometer-arrow-2.png`)")
              .pic-box
                figure.pic
                  img(:src="compileFilePath(`thermometer-img5-1.png`)")
                .info
                  p.title {{ $t(`${$route.name}.thermometer[4].title`) }}
                  p.detail {{ $t(`${$route.name}.thermometer[4].detail1`) }}
                  p.detail
                    | {{ $t(`${$route.name}.thermometer[4].detail2`) }}
                    span 2
                  p.detail {{ $t(`${$route.name}.thermometer[4].detail3`) }}
              figure.name
                img(:src="compileFilePath(`thermometer-img5-2.png`)")
            .item(
              @mouseenter="thermometerLink='thermometer-img7-1.jpg'"
            )
              figure.arrow
                img(:src="compileFilePath(`thermometer-arrow-2.png`)")
              .pic-box
                figure.pic
                  img(:src="compileFilePath(`thermometer-img6-1.png`)")
                .info
                  p.title {{ $t(`${$route.name}.thermometer[5].title`) }}
                  p.detail {{ $t(`${$route.name}.thermometer[5].detail1`) }}
                  p.detail
                    | {{ $t(`${$route.name}.thermometer[5].detail2`) }}
                    span 2
                  p.detail {{ $t(`${$route.name}.thermometer[5].detail3`) }}
              figure.name
                img(:src="compileFilePath(`thermometer-img6-2.png`)")
            


    .block
      .wrapper
        .title
          figure.application
            img(:src="compileFilePath(`application-title.png`)")
            img(:src="compileFilePath(`application-title-m.png`)")
        btnCard(:cardData="$t(`${$route.name}.card`)")
    .block.recommend-block
      .wrapper
        .recommend
          .title {{ $t(`${$route.name}.recommend.title`) }}
          .content.content-slick
            .arrow.arrow-pre(
              @click="$refs.recommendSlick.prev()"
            )
            .recommend-slick
              VueSlickCarousel(
                ref="recommendSlick"
                v-bind="settings"
                @beforeChange="changeIndex"
              )
                .recommend-pic(
                  v-for="(pic,index) in recommendLink" :key="index"
                )
                  .pic(
                    :style="`background-image:url('${compileFilePath(pic)}')`"
                  )
            .arrow.arrow-next(
              @click="$refs.recommendSlick.next()"
            )
          .content.content-info
            .info(
              v-for="(product,index) in $t(`${$route.name}.recommend.product`)" :key="index"
              v-if="recommendSlickIndex==index"
            )
              .name {{ product.name }}
              .description(
                v-html="product.description"
              )
    .contact-block
      router-link.wrapper(:to="{ name:'Contact'}")
        .title {{ $t(`${$route.name}.contact.title`) }}
        figure.contact
          img(src="@/assets/images/home-contact.png")
          img(src="@/assets/images/home-contact-m.png")

</template>

<script>
// @ is an alias to /src
import BannerSwiper from "@/components/BannerSwiper.vue";
import btnCard from "@/components/btnCard.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Home",
  components: {
    BannerSwiper,
    btnCard,
    VueSlickCarousel,
  },
  data() {
    return {
      bannerLink: [
        {
          1: "banner-tc1.jpg",
          2: "banner-tc2.jpg",
          3: "banner-tc3.jpg",
          4: "banner-tc4.jpg",
          5: "banner-tc5.jpg",
        },
        {
          1: "banner-tc1-m.jpg",
          2: "banner-tc2-m.jpg",
          3: "banner-tc3-m.jpg",
          4: "banner-tc4-m.jpg",
          5: "banner-tc5-m.jpg",
        },
      ],
      thermometerLink: "thermometer-img7-1.jpg",
      thermometerMobileLink: "thermometer-img8-1.png",
      recommendLink: [
        "recommed-img1.jpg", 
        "recommed-img2.jpg",
        "recommed-img3.jpg",
        "recommed-img4.jpg",
        "recommed-img5.jpg",
        "recommed-img6.jpg",
        "recommed-img7.jpg",
        "recommed-img8.jpg",
        "recommed-img9.jpg",
        "recommed-img10.jpg",
        ],
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class recommend-dots",
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
      },
      recommendSlickIndex: 0,
    };
  },
  methods: {
    changeIndex(index) {
      let sum = this.$t(`${this.$route.name}.recommend.product`).length;
      this.recommendSlickIndex = (index + 1 + sum) % sum;
    },
  },
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"

.recommend-dots
  bottom: 0px
  li
    width: 5%
    button
      &:before
        color: #eee
        opacity: 1
    &.slick-active
      button
        &:before
          color: $orange
</style>
<style lang="sass" scoped>
@import "../assets/sass/var.sass"
*
  vertical-align: top
.block-thermometer
  .title
    figure.thermometer-title
      width: 545px
      margin: auto
      img
        &:nth-child(1)
          display: block
        &:nth-child(2)
          display: none
  .mobile-content
    display: none
  .content
    width: 100%
    position: relative
    .top
      padding-bottom: 11%
      position: relative
      z-index: 1
    .bottom
      position: relative
      z-index: 1
    .thermometer
      width: 100%
      padding-bottom: 46.428571%
      // background-image: url('../assets/images/thermometer-img7-1.jpg')
      background-size: contain
      background-position: center center
      background-repeat: no-repeat
      +pstc5
      top: 53%
    .item
      width: 33.333333%
      padding: 0 2%
      box-sizing: border-box
      +dib
      .pic-box
        position: relative
        // figure.pic
        .info
          opacity: 0
          width: 100%
          height: 100%
          padding: 20px
          box-sizing: border-box
          background-color: rgba(183,23,0,0.8)
          transition: .3s
          position: absolute
          top: 0
          left: 0
          p.title
            font-size: 26px
            color: #fff
            margin-bottom: 20px
          p.detail
            font-size: 20px
            color: #fff
            margin-bottom: 10px
            text-align: left
            span
              font-size: 16px
              vertical-align: super
        @include hover
          .info
            opacity: 1
      figure.name
        width: 91%
        margin: 2% auto
      figure.arrow
        width: 50px
        margin: auto
  @include rwd(768px)
    .title
      figure.thermometer-title
        width: 46vw
        img
          &:nth-child(1)
            display: none
          &:nth-child(2)
            display: block
    .content
      display: none
    .mobile-content
      display: block
      position: relative
      .thermometer
        width: 100%
        padding-bottom: 208.8%
        background-size: contain
        background-position: center center
        background-repeat: no-repeat
      .change-btn
        width: 60%
        height: 33.333333%
        position: absolute
        right: 0
        &:nth-child(2)
          top: 0
        &:nth-child(3)
          top: 0
          bottom: 0
          margin: auto
        &:nth-child(4)
          bottom: 0
.en-style
  .title
      figure.thermometer-title
        width: 940px
        @include rwd(960px)
          width: 740px
        @include rwd(768px)
          width: 57vw

.recommend-block
  padding-bottom: 8%
  background-color: #fee4d5

.recommend
  .title
    +fontH1
  .content
    width: 50%
    text-align: left
    box-sizing: border-box
    +dib
    // &.content-slick
    &.content-info
      padding: 30px 35px
    .arrow
      width: 40px
      height: 85px
      background-size: contain
      background-position: center center
      background-repeat: no-repeat
      cursor: pointer
      +dib
      &.arrow-pre
        background-image: url("../assets/images/home-pre.png")
      &.arrow-next
        background-image: url("../assets/images/home-next.png")
    .recommend-slick
      width: calc(100% - 80px)
      box-shadow: 5px 12px 10px rgba(#7e7e7e,.31)
      +dib
      .recommend-pic
        .pic
          width: 100%
          padding-bottom: 56.338028%
          background-size: cover
          background-position: center center
          background-repeat: no-repeat
    .name
      +fontH2
      font-weight: bold
      margin-bottom: 50px
    .description
      +fontP
      line-height: 1.2
@include rwd(768px)
  .recommend
    .content
      width: 100%
      // &.content-slick
      &.content-info
        padding: 30px 35px
      .arrow
        width: 20px
        height: 42.5px
      .recommend-slick
        width: calc(100% - 40px)
      .name
        font-size: 18px
        margin-bottom: 15px
        text-align: center
      .description
        font-size: 14px
.contact-block
  margin-top: -8%
  margin-bottom: 8%
  .wrapper
    position: relative
    .title
      width: 100%
      font-size: 3.5vw
      color: #fff
      text-shadow: 0px 0px 50px $orange
      text-align: center
      position: absolute
      top: 45%
      left: 0
      z-index: 1
    figure.contact
      img
        &:nth-child(1)
          display: block
        &:nth-child(2)
          display: none
  @include rwd(768px)
    .wrapper
      .title
        font-size: 7vw
        top: 40%
      figure.contact
        img
          &:nth-child(1)
            display: none
          &:nth-child(2)
            display: block
</style>

<style scoped>
.clear {
  margin: 0px -10px 10px -10px;
}

.clear::after {
  content: ".";
  display: block;
  clear: both;
  visibility: hidden;
  line-height: 0;
  height: 0;
}

body {
  position: relative;
  margin: 0;
  padding: 0;
  height: 100%;
  font-size: 100%;
  font-family: Arial, "Microsoft JhengHei";
}

body .col-xs-1,
body .col-sm-1,
body .col-md-1,
body .col-lg-1,
body .col-xs-2,
body .col-sm-2,
body .col-md-2,
body .col-lg-2,
body .col-xs-3,
body .col-sm-3,
body .col-md-3,
body .col-lg-3,
body .col-xs-4,
body .col-sm-4,
body .col-md-4,
body .col-lg-4,
body .col-xs-5,
body .col-sm-5,
body .col-md-5,
body .col-lg-5,
body .col-xs-6,
body .col-sm-6,
body .col-md-6,
body .col-lg-6,
body .col-xs-7,
body .col-sm-7,
body .col-md-7,
body .col-lg-7,
body .col-xs-8,
body .col-sm-8,
body .col-md-8,
body .col-lg-8,
body .col-xs-9,
body .col-sm-9,
body .col-md-9,
body .col-lg-9,
body .col-xs-10,
body .col-sm-10,
body .col-md-10,
body .col-lg-10,
body .col-xs-11,
body .col-sm-11,
body .col-md-11,
body .col-lg-11,
body .col-xs-12,
body .col-sm-12,
body .col-md-12,
body .col-lg-12,
body .col-xs-20percent,
body .col-sm-20percent,
body .col-md-20percent,
body .col-lg-20percent {
  position: relative;
  min-height: 1px;
  padding-left: 10px !important;
  padding-right: 10px !important;
}

body .col-xs-1,
body .col-xs-2,
body .col-xs-3,
body .col-xs-4,
body .col-xs-5,
body .col-xs-6,
body .col-xs-7,
body .col-xs-8,
body .col-xs-9,
body .col-xs-10,
body .col-xs-11,
body .col-xs-12,
body .col-xs-20percent {
  float: left;
}

body .col-xs-12 {
  width: 100%;
}

body .col-xs-11 {
  width: 91.66667%;
}

body .col-xs-10 {
  width: 83.33333%;
}

body .col-xs-9 {
  width: 75%;
}

body .col-xs-8 {
  width: 66.66667%;
}

body .col-xs-7 {
  width: 58.33333%;
}

body .col-xs-6 {
  width: 50%;
}

body .col-xs-5 {
  width: 41.66667%;
}

body .col-xs-4 {
  width: 33.33333%;
}

body .col-xs-3 {
  width: 25%;
}

body .col-xs-2 {
  width: 16.66667%;
}

body .col-xs-1 {
  width: 8.33333%;
}

body .col-xs-20percent {
  width: 20%;
}

body .col-xs-pull-12 {
  right: 100%;
}

body .col-xs-pull-11 {
  right: 91.66667%;
}

body .col-xs-pull-10 {
  right: 83.33333%;
}

body .col-xs-pull-9 {
  right: 75%;
}

body .col-xs-pull-8 {
  right: 66.66667%;
}

body .col-xs-pull-7 {
  right: 58.33333%;
}

body .col-xs-pull-6 {
  right: 50%;
}

body .col-xs-pull-5 {
  right: 41.66667%;
}

body .col-xs-pull-4 {
  right: 33.33333%;
}

body .col-xs-pull-3 {
  right: 25%;
}

body .col-xs-pull-2 {
  right: 16.66667%;
}

body .col-xs-pull-1 {
  right: 8.33333%;
}

body .col-xs-pull-0 {
  right: auto;
}

body .col-xs-pull-20percent-1 {
  right: 20%;
}

body .col-xs-pull-20percent-2 {
  right: 40%;
}

body .col-xs-pull-20percent-3 {
  right: 60%;
}

body .col-xs-pull-20percent-4 {
  right: 80%;
}

body .col-xs-push-12 {
  left: 100%;
}

body .col-xs-push-11 {
  left: 91.66667%;
}

body .col-xs-push-10 {
  left: 83.33333%;
}

body .col-xs-push-9 {
  left: 75%;
}

body .col-xs-push-8 {
  left: 66.66667%;
}

body .col-xs-push-7 {
  left: 58.33333%;
}

body .col-xs-push-6 {
  left: 50%;
}

body .col-xs-push-5 {
  left: 41.66667%;
}

body .col-xs-push-4 {
  left: 33.33333%;
}

body .col-xs-push-3 {
  left: 25%;
}

body .col-xs-push-2 {
  left: 16.66667%;
}

body .col-xs-push-1 {
  left: 8.33333%;
}

body .col-xs-push-0 {
  left: auto;
}

body .col-xs-push-20percent-1 {
  left: 20%;
}

body .col-xs-push-20percent-2 {
  left: 40%;
}

body .col-xs-push-20percent-3 {
  left: 60%;
}

body .col-xs-push-20percent-4 {
  left: 80%;
}

body .col-xs-offset-12 {
  margin-left: 100%;
}

body .col-xs-offset-11 {
  margin-left: 91.66667%;
}

body .col-xs-offset-10 {
  margin-left: 83.33333%;
}

body .col-xs-offset-9 {
  margin-left: 75%;
}

body .col-xs-offset-8 {
  margin-left: 66.66667%;
}

body .col-xs-offset-7 {
  margin-left: 58.33333%;
}

body .col-xs-offset-6 {
  margin-left: 50%;
}

body .col-xs-offset-5 {
  margin-left: 41.66667%;
}

body .col-xs-offset-4 {
  margin-left: 33.33333%;
}

body .col-xs-offset-3 {
  margin-left: 25%;
}

body .col-xs-offset-2 {
  margin-left: 16.66667%;
}

body .col-xs-offset-1 {
  margin-left: 8.33333%;
}

body .col-xs-offset-0 {
  margin-left: 0%;
}

body .col-xs-offset-20percent-1 {
  margin-left: 20%;
}

body .col-xs-offset-20percent-2 {
  margin-left: 40%;
}

body .col-xs-offset-20percent-3 {
  margin-left: 60%;
}

body .col-xs-offset-20percent-4 {
  margin-left: 80%;
}

body .padding-0-xs {
  padding: 0 !important;
}

body .padding-left-0-xs {
  padding-left: 0px !important;
  padding-right: 10px !important;
}

body .padding-right-0-xs {
  padding-right: 0px !important;
  padding-left: 10px !important;
}

body .margin-0-xs {
  margin: 0;
}

body .absolute-center-xs {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

body .text-left-xs {
  text-align: left;
}

body .text-center-xs {
  text-align: center;
}

body .text-right-xs {
  text-align: right;
}

body .text-justify-xs {
  text-align: justify;
  text-justify: distribute-all-lines;
  text-align-last: justify;
}

body .text-justify-xs::after {
  content: ".";
  display: inline-block;
  position: absolute;
  width: 100%;
  visibility: hidden;
  height: 0;
  overflow: hidden;
}

body .float-left-xs {
  float: left;
}

body .float-right-xs {
  float: right;
}

body .hidden-xs {
  display: none !important;
}

@media (min-width: 768px) {
  body .col-sm-1,
  body .col-sm-2,
  body .col-sm-3,
  body .col-sm-4,
  body .col-sm-5,
  body .col-sm-6,
  body .col-sm-7,
  body .col-sm-8,
  body .col-sm-9,
  body .col-sm-10,
  body .col-sm-11,
  body .col-sm-12,
  body .col-sm-20percent {
    float: left;
  }
  body .col-sm-12 {
    width: 100%;
  }
  body .col-sm-11 {
    width: 91.66667%;
  }
  body .col-sm-10 {
    width: 83.33333%;
  }
  body .col-sm-9 {
    width: 75%;
  }
  body .col-sm-8 {
    width: 66.66667%;
  }
  body .col-sm-7 {
    width: 58.33333%;
  }
  body .col-sm-6 {
    width: 50%;
  }
  body .col-sm-5 {
    width: 41.66667%;
  }
  body .col-sm-4 {
    width: 33.33333%;
  }
  body .col-sm-3 {
    width: 25%;
  }
  body .col-sm-2 {
    width: 16.66667%;
  }
  body .col-sm-1 {
    width: 8.33333%;
  }
  body .col-sm-20percent {
    width: 20%;
  }
  body .col-sm-pull-12 {
    right: 100%;
  }
  body .col-sm-pull-11 {
    right: 91.66667%;
  }
  body .col-sm-pull-10 {
    right: 83.33333%;
  }
  body .col-sm-pull-9 {
    right: 75%;
  }
  body .col-sm-pull-8 {
    right: 66.66667%;
  }
  body .col-sm-pull-7 {
    right: 58.33333%;
  }
  body .col-sm-pull-6 {
    right: 50%;
  }
  body .col-sm-pull-5 {
    right: 41.66667%;
  }
  body .col-sm-pull-4 {
    right: 33.33333%;
  }
  body .col-sm-pull-3 {
    right: 25%;
  }
  body .col-sm-pull-2 {
    right: 16.66667%;
  }
  body .col-sm-pull-1 {
    right: 8.33333%;
  }
  body .col-sm-pull-0 {
    right: auto;
  }
  body .col-sm-pull-20percent-1 {
    right: 20%;
  }
  body .col-sm-pull-20percent-2 {
    right: 40%;
  }
  body .col-sm-pull-20percent-3 {
    right: 60%;
  }
  body .col-sm-pull-20percent-4 {
    right: 80%;
  }
  body .col-sm-push-12 {
    left: 100%;
  }
  body .col-sm-push-11 {
    left: 91.66667%;
  }
  body .col-sm-push-10 {
    left: 83.33333%;
  }
  body .col-sm-push-9 {
    left: 75%;
  }
  body .col-sm-push-8 {
    left: 66.66667%;
  }
  body .col-sm-push-7 {
    left: 58.33333%;
  }
  body .col-sm-push-6 {
    left: 50%;
  }
  body .col-sm-push-5 {
    left: 41.66667%;
  }
  body .col-sm-push-4 {
    left: 33.33333%;
  }
  body .col-sm-push-3 {
    left: 25%;
  }
  body .col-sm-push-2 {
    left: 16.66667%;
  }
  body .col-sm-push-1 {
    left: 8.33333%;
  }
  body .col-sm-push-0 {
    left: auto;
  }
  body .col-sm-push-20percent-1 {
    left: 20%;
  }
  body .col-sm-push-20percent-2 {
    left: 40%;
  }
  body .col-sm-push-20percent-3 {
    left: 60%;
  }
  body .col-sm-push-20percent-4 {
    left: 80%;
  }
  body .col-sm-offset-12 {
    margin-left: 100%;
  }
  body .col-sm-offset-11 {
    margin-left: 91.66667%;
  }
  body .col-sm-offset-10 {
    margin-left: 83.33333%;
  }
  body .col-sm-offset-9 {
    margin-left: 75%;
  }
  body .col-sm-offset-8 {
    margin-left: 66.66667%;
  }
  body .col-sm-offset-7 {
    margin-left: 58.33333%;
  }
  body .col-sm-offset-6 {
    margin-left: 50%;
  }
  body .col-sm-offset-5 {
    margin-left: 41.66667%;
  }
  body .col-sm-offset-4 {
    margin-left: 33.33333%;
  }
  body .col-sm-offset-3 {
    margin-left: 25%;
  }
  body .col-sm-offset-2 {
    margin-left: 16.66667%;
  }
  body .col-sm-offset-1 {
    margin-left: 8.33333%;
  }
  body .col-sm-offset-0 {
    margin-left: 0%;
  }
  body .col-sm-offset-20percent-1 {
    margin-left: 20%;
  }
  body .col-sm-offset-20percent-2 {
    margin-left: 40%;
  }
  body .col-sm-offset-20percent-3 {
    margin-left: 60%;
  }
  body .col-sm-offset-20percent-4 {
    margin-left: 80%;
  }
  body .padding-0-sm {
    padding: 0 !important;
  }
  body .padding-left-0-sm {
    padding-left: 0px !important;
    padding-right: 10px !important;
  }
  body .padding-right-0-sm {
    padding-right: 0px !important;
    padding-left: 10px !important;
  }
  body .margin-0-sm {
    margin: 0;
  }
  body .absolute-center-sm {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  body .text-left-sm {
    text-align: left;
  }
  body .text-center-sm {
    text-align: center;
  }
  body .text-right-sm {
    text-align: right;
  }
  body .text-justify-sm {
    text-align: justify;
    text-justify: distribute-all-lines;
    text-align-last: justify;
  }
  body .text-justify-sm::after {
    content: ".";
    display: inline-block;
    position: absolute;
    width: 100%;
    visibility: hidden;
    height: 0;
    overflow: hidden;
  }
  body .float-left-sm {
    float: left;
  }
  body .float-right-sm {
    float: right;
  }
  body .hidden-sm {
    display: none !important;
  }
}

@media (min-width: 992px) {
  body .col-md-1,
  body .col-md-2,
  body .col-md-3,
  body .col-md-4,
  body .col-md-5,
  body .col-md-6,
  body .col-md-7,
  body .col-md-8,
  body .col-md-9,
  body .col-md-10,
  body .col-md-11,
  body .col-md-12,
  body .col-md-20percent {
    float: left;
  }
  body .col-md-12 {
    width: 100%;
  }
  body .col-md-11 {
    width: 91.66667%;
  }
  body .col-md-10 {
    width: 83.33333%;
  }
  body .col-md-9 {
    width: 75%;
  }
  body .col-md-8 {
    width: 66.66667%;
  }
  body .col-md-7 {
    width: 58.33333%;
  }
  body .col-md-6 {
    width: 50%;
  }
  body .col-md-5 {
    width: 41.66667%;
  }
  body .col-md-4 {
    width: 33.33333%;
  }
  body .col-md-3 {
    width: 25%;
  }
  body .col-md-2 {
    width: 16.66667%;
  }
  body .col-md-1 {
    width: 8.33333%;
  }
  body .col-md-20percent {
    width: 20%;
  }
  body .col-md-pull-12 {
    right: 100%;
  }
  body .col-md-pull-11 {
    right: 91.66667%;
  }
  body .col-md-pull-10 {
    right: 83.33333%;
  }
  body .col-md-pull-9 {
    right: 75%;
  }
  body .col-md-pull-8 {
    right: 66.66667%;
  }
  body .col-md-pull-7 {
    right: 58.33333%;
  }
  body .col-md-pull-6 {
    right: 50%;
  }
  body .col-md-pull-5 {
    right: 41.66667%;
  }
  body .col-md-pull-4 {
    right: 33.33333%;
  }
  body .col-md-pull-3 {
    right: 25%;
  }
  body .col-md-pull-2 {
    right: 16.66667%;
  }
  body .col-md-pull-1 {
    right: 8.33333%;
  }
  body .col-md-pull-0 {
    right: auto;
  }
  body .col-md-pull-20percent-1 {
    right: 20%;
  }
  body .col-md-pull-20percent-2 {
    right: 40%;
  }
  body .col-md-pull-20percent-3 {
    right: 60%;
  }
  body .col-md-pull-20percent-4 {
    right: 80%;
  }
  body .col-md-push-12 {
    left: 100%;
  }
  body .col-md-push-11 {
    left: 91.66667%;
  }
  body .col-md-push-10 {
    left: 83.33333%;
  }
  body .col-md-push-9 {
    left: 75%;
  }
  body .col-md-push-8 {
    left: 66.66667%;
  }
  body .col-md-push-7 {
    left: 58.33333%;
  }
  body .col-md-push-6 {
    left: 50%;
  }
  body .col-md-push-5 {
    left: 41.66667%;
  }
  body .col-md-push-4 {
    left: 33.33333%;
  }
  body .col-md-push-3 {
    left: 25%;
  }
  body .col-md-push-2 {
    left: 16.66667%;
  }
  body .col-md-push-1 {
    left: 8.33333%;
  }
  body .col-md-push-0 {
    left: auto;
  }
  body .col-md-push-20percent-1 {
    left: 20%;
  }
  body .col-md-push-20percent-2 {
    left: 40%;
  }
  body .col-md-push-20percent-3 {
    left: 60%;
  }
  body .col-md-push-20percent-4 {
    left: 80%;
  }
  body .col-md-offset-12 {
    margin-left: 100%;
  }
  body .col-md-offset-11 {
    margin-left: 91.66667%;
  }
  body .col-md-offset-10 {
    margin-left: 83.33333%;
  }
  body .col-md-offset-9 {
    margin-left: 75%;
  }
  body .col-md-offset-8 {
    margin-left: 66.66667%;
  }
  body .col-md-offset-7 {
    margin-left: 58.33333%;
  }
  body .col-md-offset-6 {
    margin-left: 50%;
  }
  body .col-md-offset-5 {
    margin-left: 41.66667%;
  }
  body .col-md-offset-4 {
    margin-left: 33.33333%;
  }
  body .col-md-offset-3 {
    margin-left: 25%;
  }
  body .col-md-offset-2 {
    margin-left: 16.66667%;
  }
  body .col-md-offset-1 {
    margin-left: 8.33333%;
  }
  body .col-md-offset-0 {
    margin-left: 0%;
  }
  body .col-md-offset-20percent-1 {
    margin-left: 20%;
  }
  body .col-md-offset-20percent-2 {
    margin-left: 40%;
  }
  body .col-md-offset-20percent-3 {
    margin-left: 60%;
  }
  body .col-md-offset-20percent-4 {
    margin-left: 80%;
  }
  body .padding-0-md {
    padding: 0 !important;
  }
  body .padding-left-0-md {
    padding-left: 0px !important;
    padding-right: 10px !important;
  }
  body .padding-right-0-md {
    padding-right: 0px !important;
    padding-left: 10px !important;
  }
  body .margin-0-md {
    margin: 0;
  }
  body .absolute-center-md {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  body .text-left-md {
    text-align: left;
  }
  body .text-center-md {
    text-align: center;
  }
  body .text-right-md {
    text-align: right;
  }
  body .text-justify-md {
    text-align: justify;
    text-justify: distribute-all-lines;
    text-align-last: justify;
  }
  body .text-justify-md::after {
    content: ".";
    display: inline-block;
    position: absolute;
    width: 100%;
    visibility: hidden;
    height: 0;
    overflow: hidden;
  }
  body .float-left-md {
    float: left;
  }
  body .float-right-md {
    float: right;
  }
  body .hidden-md {
    display: none !important;
  }
}

@media (min-width: 1200px) {
  body .col-lg-1,
  body .col-lg-2,
  body .col-lg-3,
  body .col-lg-4,
  body .col-lg-5,
  body .col-lg-6,
  body .col-lg-7,
  body .col-lg-8,
  body .col-lg-9,
  body .col-lg-10,
  body .col-lg-11,
  body .col-lg-12,
  body .col-lg-20percent {
    float: left;
  }
  body .col-lg-12 {
    width: 100%;
  }
  body .col-lg-11 {
    width: 91.66667%;
  }
  body .col-lg-10 {
    width: 83.33333%;
  }
  body .col-lg-9 {
    width: 75%;
  }
  body .col-lg-8 {
    width: 66.66667%;
  }
  body .col-lg-7 {
    width: 58.33333%;
  }
  body .col-lg-6 {
    width: 50%;
  }
  body .col-lg-5 {
    width: 41.66667%;
  }
  body .col-lg-4 {
    width: 33.33333%;
  }
  body .col-lg-3 {
    width: 25%;
  }
  body .col-lg-2 {
    width: 16.66667%;
  }
  body .col-lg-1 {
    width: 8.33333%;
  }
  body .col-lg-20percent {
    width: 20%;
  }
  body .col-lg-pull-12 {
    right: 100%;
  }
  body .col-lg-pull-11 {
    right: 91.66667%;
  }
  body .col-lg-pull-10 {
    right: 83.33333%;
  }
  body .col-lg-pull-9 {
    right: 75%;
  }
  body .col-lg-pull-8 {
    right: 66.66667%;
  }
  body .col-lg-pull-7 {
    right: 58.33333%;
  }
  body .col-lg-pull-6 {
    right: 50%;
  }
  body .col-lg-pull-5 {
    right: 41.66667%;
  }
  body .col-lg-pull-4 {
    right: 33.33333%;
  }
  body .col-lg-pull-3 {
    right: 25%;
  }
  body .col-lg-pull-2 {
    right: 16.66667%;
  }
  body .col-lg-pull-1 {
    right: 8.33333%;
  }
  body .col-lg-pull-0 {
    right: auto;
  }
  body .col-lg-pull-20percent-1 {
    right: 20%;
  }
  body .col-lg-pull-20percent-2 {
    right: 40%;
  }
  body .col-lg-pull-20percent-3 {
    right: 60%;
  }
  body .col-lg-pull-20percent-4 {
    right: 80%;
  }
  body .col-lg-push-12 {
    left: 100%;
  }
  body .col-lg-push-11 {
    left: 91.66667%;
  }
  body .col-lg-push-10 {
    left: 83.33333%;
  }
  body .col-lg-push-9 {
    left: 75%;
  }
  body .col-lg-push-8 {
    left: 66.66667%;
  }
  body .col-lg-push-7 {
    left: 58.33333%;
  }
  body .col-lg-push-6 {
    left: 50%;
  }
  body .col-lg-push-5 {
    left: 41.66667%;
  }
  body .col-lg-push-4 {
    left: 33.33333%;
  }
  body .col-lg-push-3 {
    left: 25%;
  }
  body .col-lg-push-2 {
    left: 16.66667%;
  }
  body .col-lg-push-1 {
    left: 8.33333%;
  }
  body .col-lg-push-0 {
    left: auto;
  }
  body .col-lg-push-20percent-1 {
    left: 20%;
  }
  body .col-lg-push-20percent-2 {
    left: 40%;
  }
  body .col-lg-push-20percent-3 {
    left: 60%;
  }
  body .col-lg-push-20percent-4 {
    left: 80%;
  }
  body .col-lg-offset-12 {
    margin-left: 100%;
  }
  body .col-lg-offset-11 {
    margin-left: 91.66667%;
  }
  body .col-lg-offset-10 {
    margin-left: 83.33333%;
  }
  body .col-lg-offset-9 {
    margin-left: 75%;
  }
  body .col-lg-offset-8 {
    margin-left: 66.66667%;
  }
  body .col-lg-offset-7 {
    margin-left: 58.33333%;
  }
  body .col-lg-offset-6 {
    margin-left: 50%;
  }
  body .col-lg-offset-5 {
    margin-left: 41.66667%;
  }
  body .col-lg-offset-4 {
    margin-left: 33.33333%;
  }
  body .col-lg-offset-3 {
    margin-left: 25%;
  }
  body .col-lg-offset-2 {
    margin-left: 16.66667%;
  }
  body .col-lg-offset-1 {
    margin-left: 8.33333%;
  }
  body .col-lg-offset-0 {
    margin-left: 0%;
  }
  body .col-lg-offset-20percent-1 {
    margin-left: 20%;
  }
  body .col-lg-offset-20percent-2 {
    margin-left: 40%;
  }
  body .col-lg-offset-20percent-3 {
    margin-left: 60%;
  }
  body .col-lg-offset-20percent-4 {
    margin-left: 80%;
  }
  body .padding-0-lg {
    padding: 0 !important;
  }
  body .padding-left-0-lg {
    padding-left: 0px !important;
    padding-right: 10px !important;
  }
  body .padding-right-0-lg {
    padding-right: 0px !important;
    padding-left: 10px !important;
  }
  body .margin-0-lg {
    margin: 0;
  }
  body .absolute-center-lg {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  body .text-left-lg {
    text-align: left;
  }
  body .text-center-lg {
    text-align: center;
  }
  body .text-right-lg {
    text-align: right;
  }
  body .text-justify-lg {
    text-align: justify;
    text-justify: distribute-all-lines;
    text-align-last: justify;
  }
  body .text-justify-lg::after {
    content: ".";
    display: inline-block;
    position: absolute;
    width: 100%;
    visibility: hidden;
    height: 0;
    overflow: hidden;
  }
  body .float-left-lg {
    float: left;
  }
  body .float-right-lg {
    float: right;
  }
  body .hidden-lg {
    display: none !important;
  }
}

body header,
body main,
body footer {
  display: block;
}

body p,
body h1,
body h2,
body h3,
body h4,
body h5,
body h6 {
  font-family: Arial, "Microsoft JhengHei";
  margin: 0;
  padding: 0;
  line-height: inherit;
}

body span {
  display: inline-block;
}

body a {
  display: inline-block;
  text-decoration: none;
  color: #3e3a39;
}

body ol,
body ul,
body li {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: left;
}

body button {
  font-family: Arial, "Microsoft JhengHei";
  cursor: pointer;
}

body input[type="text"],
body input[type="password"],
body textarea {
  font-family: Arial, "Microsoft JhengHei";
  outline: none;
}

body input[type="button"] {
  font-family: Arial, "Microsoft JhengHei";
  cursor: pointer;
}

body select {
  font-family: Arial, "Microsoft JhengHei";
  outline: none;
}

body select::-ms-expand {
  display: none;
}

body * {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  position: relative;
}

body .model-table-group {
  width: 100%;
  margin-bottom: 20px;
  display: table;
}

@media screen and (max-width: 767px) {
  body .model-table-group {
    margin-top: 0px;
  }
}

body .model-table-group .thead {
  display: table-header-group;
}

body .model-table-group .thead .tr {
  display: table-row;
}

@media screen and (max-width: 1023px) {
  body .model-table-group .thead .tr {
    display: none;
  }
}

body .model-table-group .thead .tr .th {
  display: table-cell;
  padding: 5px 10px;
  font-size: 14px;
  font-weight: initial;
  text-align: left;
  border-top: 1px solid;
  border-bottom: 2px solid;
  border-left: 1px solid;
  border-color: #e0e0e0;
}

body .model-table-group .thead .tr .th.th-action {
  width: 100px;
}

body .model-table-group .thead .tr .th:last-child {
  border-right: 1px solid;
  border-color: #e0e0e0;
}

body .model-table-group .tbody {
  display: table-row-group;
}

body .model-table-group .tbody .tr {
  display: table-row;
  min-height: 110px;
  background-color: transparent;
}

@media screen and (max-width: 1023px) {
  body .model-table-group .tbody .tr::after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
  }
}

@media screen and (max-width: 767px) {
  body .model-table-group .tbody .tr {
    background-color: #e0f3f8;
  }
}

body .model-table-group .tbody .tr:nth-child(odd) {
  background-color: transparent;
}

body .model-table-group .tbody .tr:hover {
  background-color: #e0f3f8;
}

body .model-table-group .tbody .tr .td {
  display: table-cell;
  padding: 5px 10px;
  font-size: 14px;
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-color: #e0e0e0;
}

@media screen and (max-width: 1023px) {
  body .model-table-group .tbody .tr .td {
    display: inline-block;
    float: left;
    text-align: left;
    width: 100%;
    padding: 0 0 0 110px;
    line-height: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: none;
    border-right: 1px solid;
    border-color: #e0e0e0;
  }
}

@media screen and (max-width: 1023px) {
  body .model-table-group .tbody .tr .td::before {
    content: attr(data-title);
    width: 98px;
    font-weight: bold;
    position: absolute;
    left: 12px;
    color: #1a2328;
  }
}

@media screen and (max-width: 1023px) {
  body .model-table-group .tbody .tr .td:first-child {
    padding: 10px 0 0 110px;
    border-top: 1px solid;
    border-color: #e0e0e0;
  }
}

body .model-table-group .tbody .tr .td:last-child {
  border-right: 1px solid;
  border-color: #e0e0e0;
}

body .model-table-group .tbody .tr .td .td-status {
  display: inline-block;
  width: 14px;
  margin: auto;
  cursor: default;
}

body .model-table-group .tbody .tr .td .td-status [class^="icon-"],
body .model-table-group .tbody .tr .td .td-status [class*=" icon-"] {
  display: block;
  font-size: 14px;
  width: 14px;
  height: 14px;
  margin: auto;
}

body .model-table-group .tbody .tr .td .td-edit {
  display: inline-block;
  width: 14px;
  margin: auto;
  cursor: pointer;
}

body .model-table-group .tbody .tr .td .td-edit [class^="icon-"],
body .model-table-group .tbody .tr .td .td-edit [class*=" icon-"] {
  display: block;
  font-size: 14px;
  width: 14px;
  height: 14px;
  margin: auto;
  color: #1476a9;
}

body .model-table-group .tbody .tr .td .td-authority {
  display: inline-block;
  width: 14px;
  margin: auto;
  cursor: default;
}

body .model-table-group .tbody .tr .td .td-authority [class^="icon-"],
body .model-table-group .tbody .tr .td .td-authority [class*=" icon-"] {
  display: block;
  font-size: 14px;
  width: 14px;
  height: 14px;
  margin: auto;
}

body .pop-windows {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(26, 35, 40, 0.4);
  z-index: -1;
  opacity: 0;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

body .pop-windows.active {
  z-index: 998;
  opacity: 1;
}

body .pop-windows .pop-default {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #ffffff;
  z-index: -1;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

body .pop-windows .pop-default.active {
  z-index: 999;
}

body .pop-windows .pop-default[data-animate-type="zoom-in"] {
  opacity: 0;
}

body .pop-windows .pop-default[data-animate-type="zoom-in"].active {
  opacity: 1;
}

body .pop-windows .pop-default[data-animate-type="fade-up"] {
  top: -100%;
}

body .pop-fixed {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
}

body .pop-fixed .fixed-container li {
  padding: 10px;
  background-color: rgba(26, 35, 40, 0.4);
  margin-bottom: 20px;
  width: 300px;
  opacity: 0;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

body .pop-fixed .fixed-container li.active {
  opacity: 1;
}

body .pop-fixed .fixed-container li .pop-close {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  background-color: #1a2328;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
}

body .pop-fixed .audio {
  display: none;
}
/*# sourceMappingURL=global.css.map */
</style>
<style scoped>
body #wrapper main .sect-index.heat {
  margin-bottom: 100px;
}

@media screen and (max-width: 1919px) {
  body #wrapper main .sect-index.heat {
    margin-bottom: 70px;
  }
}

body #wrapper main .sect-index.heat > .container::before {
  content: "";
  display: block;
  width: 100%;
  padding-bottom: 45%;
  background-position: center;
  background-size: 100% auto;
  background-repeat: no-repeat;
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.heat > .container::before {
    padding-bottom: 800px;
  }
}

@media screen and (max-width: 400px) {
  body #wrapper main .sect-index.heat > .container::before {
    padding-bottom: 740px;
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container[data-language="en"][data-heat-number="3"]::before {
  /* background-image: url("../images/thermometer-img2-1.jpg"); */
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container[data-language="en"][data-heat-number="3"]::before {
    /* background-image: url("../images/thermometer-img6-1.png"); */
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container[data-language="en"][data-heat-number="2"]::before {
  /* background-image: url("../images/thermometer-img2-2.jpg"); */
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container[data-language="en"][data-heat-number="2"]::before {
    /* background-image: url("../images/thermometer-img6-2.png"); */
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container[data-language="en"][data-heat-number="1"]::before {
  /* background-image: url("../images/thermometer-img2-3.jpg"); */
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container[data-language="en"][data-heat-number="1"]::before {
    /* background-image: url("../images/thermometer-img6-3.png"); */
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container[data-language="en"][data-type="after"][data-heat-number="3"]::before {
  /* background-image: url("../images/thermometer-img3-1.jpg"); */
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container[data-language="en"][data-type="after"][data-heat-number="3"]::before {
    /* background-image: url("../images/thermometer-img7-1.png"); */
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container[data-language="en"][data-type="after"][data-heat-number="2"]::before {
  /* background-image: url("../images/thermometer-img3-2.jpg"); */
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container[data-language="en"][data-type="after"][data-heat-number="2"]::before {
    /* background-image: url("../images/thermometer-img7-2.png"); */
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container[data-language="en"][data-type="after"][data-heat-number="1"]::before {
  /* background-image: url("../images/thermometer-img3-3.jpg"); */
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container[data-language="en"][data-type="after"][data-heat-number="1"]::before {
    /* background-image: url("../images/thermometer-img7-3.png"); */
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container[data-language="tc"][data-heat-number="3"]::before {
  /* background-image: url("../images/thermometer-img1-1.jpg"); */
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container[data-language="tc"][data-heat-number="3"]::before {
    /* background-image: url("../images/thermometer-img4-1.png"); */
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container[data-language="tc"][data-heat-number="2"]::before {
  /* background-image: url("../images/thermometer-img1-2.jpg"); */
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container[data-language="tc"][data-heat-number="2"]::before {
    /* background-image: url("../images/thermometer-img4-2.png"); */
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container[data-language="tc"][data-heat-number="1"]::before {
  /* background-image: url("../images/thermometer-img1-3.jpg"); */
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container[data-language="tc"][data-heat-number="1"]::before {
    /* background-image: url("../images/thermometer-img4-3.png"); */
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container[data-language="cn"][data-heat-number="3"]::before {
  /* background-image: url("../images/thermometer-img1-1.jpg"); */
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container[data-language="cn"][data-heat-number="3"]::before {
    /* background-image: url("../images/thermometer-img5-1.png"); */
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container[data-language="cn"][data-heat-number="2"]::before {
  /* background-image: url("../images/thermometer-img1-2.jpg"); */
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container[data-language="cn"][data-heat-number="2"]::before {
    /* background-image: url("../images/thermometer-img5-2.png"); */
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container[data-language="cn"][data-heat-number="1"]::before {
  /* background-image: url("../images/thermometer-img1-3.jpg"); */
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container[data-language="cn"][data-heat-number="1"]::before {
    /* background-image: url("../images/thermometer-img5-3.png"); */
  }
}

body #wrapper main .sect-index.heat > .container .change-group {
  position: absolute;
  top: 330px;
  right: 100px;
  bottom: 0;
  margin: auto;
  width: 120px;
  height: 120px;
  z-index: 99;
}

@media screen and (max-width: 1919px) {
  body #wrapper main .sect-index.heat > .container .change-group {
    top: 230px;
    right: 82px;
    width: 80px;
    height: 80px;
  }
}

@media screen and (max-width: 1279px) {
  body #wrapper main .sect-index.heat > .container .change-group {
    top: 188px;
    right: 65px;
    width: 65px;
    height: 65px;
  }
}

@media screen and (max-width: 1023px) {
  body #wrapper main .sect-index.heat > .container .change-group {
    top: 110px;
    right: 52px;
    width: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.heat > .container .change-group {
    top: 10px;
    bottom: auto;
    left: 0;
    right: 23px;
    width: 60px;
    height: 60px;
  }
}

body #wrapper main .sect-index.heat > .container.pc {
  width: 100%;
  max-width: 1860px;
  padding: 260px 20px 170px;
  margin: auto;
}

@media screen and (max-width: 1919px) {
  body #wrapper main .sect-index.heat > .container.pc {
    padding: 250px 20px 200px;
  }
}

@media screen and (max-width: 1279px) {
  body #wrapper main .sect-index.heat > .container.pc {
    padding: 210px 20px 180px;
  }
}

@media screen and (max-width: 1023px) {
  body #wrapper main .sect-index.heat > .container.pc {
    padding: 230px 20px 220px;
  }
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.heat > .container.pc {
    display: none;
  }
}

body #wrapper main .sect-index.heat > .container.pc .top-group,
body #wrapper main .sect-index.heat > .container.pc .bottom-group {
  width: 100%;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  padding: 0px 120px;
}

@media screen and (max-width: 1279px) {
  body #wrapper main .sect-index.heat > .container.pc .top-group,
  body #wrapper main .sect-index.heat > .container.pc .bottom-group {
    padding: 0px 75px;
  }
}

body #wrapper main .sect-index.heat > .container.pc .top-group .card-group,
body #wrapper main .sect-index.heat > .container.pc .bottom-group .card-group {
  width: 100%;
  max-width: 350px;
  margin: auto;
}

@media screen and (max-width: 1919px) {
  body #wrapper main .sect-index.heat > .container.pc .top-group .card-group,
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .bottom-group
    .card-group {
    max-width: 270px;
  }
}

@media screen and (max-width: 1279px) {
  body #wrapper main .sect-index.heat > .container.pc .top-group .card-group,
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .bottom-group
    .card-group {
    max-width: 200px;
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group::after,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group::after {
  content: "";
  display: block;
  width: 50px;
  height: 74px;
  /* background-image: url("../images/arrow.png"); */
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}

@media screen and (max-width: 1919px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .top-group
    .card-group::after,
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .bottom-group
    .card-group::after {
    width: 35px;
    height: 53px;
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group
  .img-container,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group
  .img-container {
  width: 100%;
  padding-bottom: 88%;
  margin: 0px auto 15px;
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group
  .img-container
  .img,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group
  .img-container
  .img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group
  .img-container
  .info-group,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group
  .img-container
  .info-group {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(183, 23, 0, 0.8);
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group
  .img-container
  .info-group
  .title,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group
  .img-container
  .info-group
  .detail,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group
  .img-container
  .info-group
  .title,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group
  .img-container
  .info-group
  .detail {
  color: #ffffff;
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group
  .img-container
  .info-group
  .title,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group
  .img-container
  .info-group
  .title {
  font-size: 40px;
  text-align: center;
  margin-bottom: 10px;
}

@media screen and (max-width: 1919px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .top-group
    .card-group
    .img-container
    .info-group
    .title,
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .bottom-group
    .card-group
    .img-container
    .info-group
    .title {
    font-size: 26px;
  }
}

@media screen and (max-width: 1279px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .top-group
    .card-group
    .img-container
    .info-group
    .title,
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .bottom-group
    .card-group
    .img-container
    .info-group
    .title {
    font-size: 20px;
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group
  .img-container
  .info-group
  .detail,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group
  .img-container
  .info-group
  .detail {
  font-size: 26px;
  margin-bottom: 10px;
}

@media screen and (max-width: 1919px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .top-group
    .card-group
    .img-container
    .info-group
    .detail,
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .bottom-group
    .card-group
    .img-container
    .info-group
    .detail {
    font-size: 20px;
  }
}

@media screen and (max-width: 1279px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .top-group
    .card-group
    .img-container
    .info-group
    .detail,
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .bottom-group
    .card-group
    .img-container
    .info-group
    .detail {
    font-size: 16px;
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group
  .img-container
  .info-group
  .detail
  span,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group
  .img-container
  .info-group
  .detail
  span {
  font-size: 20px;
  vertical-align: super;
}

@media screen and (max-width: 1919px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .top-group
    .card-group
    .img-container
    .info-group
    .detail
    span,
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .bottom-group
    .card-group
    .img-container
    .info-group
    .detail
    span {
    font-size: 16px;
  }
}

@media screen and (max-width: 1279px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .top-group
    .card-group
    .img-container
    .info-group
    .detail
    span,
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .bottom-group
    .card-group
    .img-container
    .info-group
    .detail
    span {
    font-size: 12px;
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group
  .img-container:hover
  .info-group,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group
  .img-container:hover
  .info-group {
  opacity: 1;
  visibility: visible;
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group
  > .title,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group
  > .title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
}

@media screen and (max-width: 1919px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .top-group
    .card-group
    > .title,
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .bottom-group
    .card-group
    > .title {
    font-size: 28px;
  }
}

@media screen and (max-width: 1279px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .top-group
    .card-group
    > .title,
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .bottom-group
    .card-group
    > .title {
    font-size: 22px;
  }
}

@media screen and (max-width: 1023px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .top-group
    .card-group
    > .title,
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .bottom-group
    .card-group
    > .title {
    font-size: 20px;
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group
  > .title,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group
  > .title {
  margin-bottom: 15px;
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group
  .detail-group,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group
  .detail-group {
  height: 28px;
}

@media screen and (max-width: 1919px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .top-group
    .card-group
    .detail-group,
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .bottom-group
    .card-group
    .detail-group {
    height: 24px;
  }
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group
  .detail-group
  .img,
body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group
  .detail-group
  .img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}

body #wrapper main .sect-index.heat > .container.pc .top-group {
  top: 0;
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .top-group
  .card-group::after {
  bottom: -90px;
}

@media screen and (max-width: 1919px) {
  body
    #wrapper
    main
    .sect-index.heat
    > .container.pc
    .top-group
    .card-group::after {
    bottom: -75px;
  }
}

body #wrapper main .sect-index.heat > .container.pc .bottom-group {
  bottom: 0;
}

body
  #wrapper
  main
  .sect-index.heat
  > .container.pc
  .bottom-group
  .card-group::after {
  top: -100px;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

body #wrapper main .sect-index.heat > .container.mobile {
  display: none;
  width: 375px;
  margin: auto;
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.heat > .container.mobile {
    display: block;
  }
}

@media screen and (max-width: 400px) {
  body #wrapper main .sect-index.heat > .container.mobile {
    width: 350px;
  }
}

body #wrapper main .sect-index.heat > .container.mobile .hover-group {
  position: absolute;
  right: 0;
  width: 230px;
  z-index: 98;
}

body #wrapper main .sect-index.heat > .container.mobile .hover-group.style3 {
  top: 68px;
  height: 215px;
}

body #wrapper main .sect-index.heat > .container.mobile .hover-group.style2 {
  top: 285px;
  height: 240px;
}

body #wrapper main .sect-index.heat > .container.mobile .hover-group.style1 {
  top: 525px;
  height: 265px;
}

body #wrapper main .sect-index.fire {
  background-color: #f3f3f3;
  padding: 70px 0px 120px;
}

@media screen and (max-width: 1919px) {
  body #wrapper main .sect-index.fire {
    padding: 40px 0px;
  }
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.fire {
    padding: 25px 0px 20px;
  }
}

body #wrapper main .sect-index.fire > .container {
  width: 100%;
  max-width: 1350px;
  margin: auto;
  padding: 0px 20px;
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.fire > .container {
    padding: 0px 10px;
  }
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.fire > .container > [class*="col-"],
  body #wrapper main .sect-index.fire > .container > [class^="col-"] {
    padding-left: 5px !important;
    padding-right: 5px !important;
  }
}

body #wrapper main .sect-index.fire > .container .card-group {
  background-color: #ffffff;
  -webkit-box-shadow: 4px 4px 12px -2px rgba(51, 51, 102, 0.5);
  box-shadow: 4px 4px 12px -2px rgba(51, 51, 102, 0.5);
  margin-bottom: 30px;
}

body #wrapper main .sect-index.fire > .container .card-group .img-container {
  overflow: hidden;
}

body
  #wrapper
  main
  .sect-index.fire
  > .container
  .card-group
  .img-container
  .img {
  width: 100%;
  -webkit-transition: all 0.5s linear;
  transition: all 0.5s linear;
}

body #wrapper main .sect-index.fire > .container .card-group .info-group {
  padding: 10px 10px 20px;
}

body #wrapper main .sect-index.fire > .container .card-group .info-group .title,
body
  #wrapper
  main
  .sect-index.fire
  > .container
  .card-group
  .info-group
  .detail {
  font-size: 22px;
}

@media screen and (max-width: 1919px) {
  body
    #wrapper
    main
    .sect-index.fire
    > .container
    .card-group
    .info-group
    .title,
  body
    #wrapper
    main
    .sect-index.fire
    > .container
    .card-group
    .info-group
    .detail {
    font-size: 20px;
  }
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.fire
    > .container
    .card-group
    .info-group
    .title,
  body
    #wrapper
    main
    .sect-index.fire
    > .container
    .card-group
    .info-group
    .detail {
    font-size: 16px;
    min-height: 36px;
  }
}

body
  #wrapper
  main
  .sect-index.fire
  > .container
  .card-group
  .info-group
  .title {
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

body
  #wrapper
  main
  .sect-index.fire
  > .container
  .card-group
  .info-group
  .detail {
  font-size: 20px;
  min-height: 69px;
}

@media screen and (max-width: 1919px) {
  body
    #wrapper
    main
    .sect-index.fire
    > .container
    .card-group
    .info-group
    .detail {
    font-size: 18px;
    line-height: 21px;
    min-height: 42px;
  }
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.fire
    > .container
    .card-group
    .info-group
    .detail {
    font-size: 14px;
    min-height: 84px;
  }
}

body
  #wrapper
  main
  .sect-index.fire
  > .container
  .card-group:hover
  .img-container
  .img {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

body #wrapper main .sect-index.recommed {
  background-color: #fee4d5;
  padding: 70px 0px 200px;
}

@media screen and (max-width: 1919px) {
  body #wrapper main .sect-index.recommed {
    padding: 50px 0px 170px;
  }
}

@media screen and (max-width: 1279px) {
  body #wrapper main .sect-index.recommed {
    padding: 50px 0px 70px;
  }
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.recommed {
    padding: 30px 0px 70px;
  }
}

body #wrapper main .sect-index.recommed .model-title {
  margin-bottom: 50px;
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.recommed .model-title {
    margin-bottom: 30px;
  }
}

body #wrapper main .sect-index.recommed > .container {
  width: 100%;
  max-width: 1350px;
  margin: auto;
  padding: 0px 20px;
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.recommed > .container {
    padding: 0px 10px;
  }
}

body #wrapper main .sect-index.recommed > .container .owl-group {
  float: left;
  width: 50%;
  padding: 0px 30px;
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.recommed > .container .owl-group {
    float: none;
    width: 100%;
    margin-bottom: 30px;
  }
}

body
  #wrapper
  main
  .sect-index.recommed
  > .container
  .owl-group
  .owl-carousel
  .owl-nav {
  width: 100%;
  height: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

body
  #wrapper
  main
  .sect-index.recommed
  > .container
  .owl-group
  .owl-carousel
  .owl-nav
  [class*="owl-"],
body
  #wrapper
  main
  .sect-index.recommed
  > .container
  .owl-group
  .owl-carousel
  .owl-nav
  [class^="owl-"] {
  width: 85px;
  height: 85px;
  position: absolute;
  top: -21px;
  background-color: #f0511d;
  border-radius: 85px 85px 0 0;
  height: 42.5px;
  margin: 0;
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.recommed
    > .container
    .owl-group
    .owl-carousel
    .owl-nav
    [class*="owl-"],
  body
    #wrapper
    main
    .sect-index.recommed
    > .container
    .owl-group
    .owl-carousel
    .owl-nav
    [class^="owl-"] {
    width: 40px;
    height: 40px;
    border-radius: 40px 40px 0 0;
    height: 20px;
    top: -10px;
  }
}

body
  #wrapper
  main
  .sect-index.recommed
  > .container
  .owl-group
  .owl-carousel
  .owl-nav
  [class*="owl-"]::after,
body
  #wrapper
  main
  .sect-index.recommed
  > .container
  .owl-group
  .owl-carousel
  .owl-nav
  [class^="owl-"]::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 10px 10px;
  border-color: transparent transparent #ffffff transparent;
}

body
  #wrapper
  main
  .sect-index.recommed
  > .container
  .owl-group
  .owl-carousel
  .owl-nav
  .owl-prev {
  left: -63px;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.recommed
    > .container
    .owl-group
    .owl-carousel
    .owl-nav
    .owl-prev {
    left: -30px;
  }
}

body
  #wrapper
  main
  .sect-index.recommed
  > .container
  .owl-group
  .owl-carousel
  .owl-nav
  .owl-next {
  right: -63px;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.recommed
    > .container
    .owl-group
    .owl-carousel
    .owl-nav
    .owl-next {
    right: -30px;
  }
}

body
  #wrapper
  main
  .sect-index.recommed
  > .container
  .owl-group
  .owl-carousel
  .owl-dots {
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 0;
}

body
  #wrapper
  main
  .sect-index.recommed
  > .container
  .owl-group
  .owl-carousel
  .owl-dots
  .owl-dot
  span {
  width: 17px;
  height: 17px;
  background-color: #ffffff;
}

body
  #wrapper
  main
  .sect-index.recommed
  > .container
  .owl-group
  .owl-carousel
  .owl-dots
  .owl-dot.active
  span {
  background-color: #ff0000;
}

body #wrapper main .sect-index.recommed > .container .info-group {
  float: left;
  width: 50%;
  padding: 0px 0px 0px 40px;
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.recommed > .container .info-group {
    float: none;
    width: 100%;
    padding: 0px 10px;
  }
}

body #wrapper main .sect-index.recommed > .container .info-group .title {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
}

@media screen and (max-width: 1919px) {
  body #wrapper main .sect-index.recommed > .container .info-group .title {
    font-size: 30px;
  }
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.recommed > .container .info-group .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
}

body #wrapper main .sect-index.recommed > .container .info-group .detail {
  font-size: 28px;
  margin-bottom: 30px;
}

@media screen and (max-width: 1919px) {
  body #wrapper main .sect-index.recommed > .container .info-group .detail {
    font-size: 24px;
  }
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.recommed > .container .info-group .detail {
    font-size: 18px;
    margin-bottom: 20px;
  }
}

body #wrapper main .sect-index.contact {
  margin-bottom: 120px;
}

@media screen and (max-width: 1279px) {
  body #wrapper main .sect-index.contact {
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.contact {
    margin-bottom: 20px;
  }
}

body #wrapper main .sect-index.contact > .container {
  height: 225px;
  width: 100%;
  max-width: 1350px;
  margin: auto;
  padding: 0px 20px;
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.contact > .container {
    padding: 0px 10px;
  }
}

@media screen and (max-width: 1279px) {
  body #wrapper main .sect-index.contact > .container {
    height: 175px;
  }
}

@media screen and (max-width: 1023px) {
  body #wrapper main .sect-index.contact > .container {
    height: 130px;
  }
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.contact > .container {
    height: 115px;
  }
}

body #wrapper main .sect-index.contact > .container .img-container {
  width: calc(100% - 100px);
  display: block;
  position: absolute;
  left: 50px;
  bottom: 0;
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.contact > .container .img-container {
    width: 100%;
    left: 0;
  }
}

body #wrapper main .sect-index.contact > .container .img-container .img {
  width: 100%;
}

@media screen and (max-width: 767px) {
  body #wrapper main .sect-index.contact > .container .img-container .img.pc {
    display: none;
  }
}

body #wrapper main .sect-index.contact > .container .img-container .img.mobile {
  display: none;
}

@media screen and (max-width: 767px) {
  body
    #wrapper
    main
    .sect-index.contact
    > .container
    .img-container
    .img.mobile {
    display: block;
  }
}
</style>

<style lang="sass">
@import "../assets/sass/var.sass"
*
  // outline: 1px solid #f00
article
  .wrapper
    box-sizing: border-box
    max-width: 1000px
    margin: auto
    padding: 0 20px
    @include rwd(960px)
      padding: 0 15px
.block
  padding: 50px 0
  &.grey
    background-color: #f7f7f7
.title
  +fontH1
  font-weight: bold
  margin-bottom: 40px
  .attach
    margin-top: 25px
    color: #f0511d
  @include rwd(960px)
    margin-bottom: 40px
    &.overScroll
      max-width: none
  .application
    width: 587px
    margin: auto
    img
      &:nth-of-type(2)
        display: none
    @include rwd(960px)
      width: 46vw
      img
        &:nth-of-type(1)
          display: none
        &:nth-of-type(2)
            display: block
</style>
