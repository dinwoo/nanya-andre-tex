<template lang="pug">
  article#fireTest
    section.banner
      BannerSwiper(
        :pictureLink="bannerLink"
      )
    section.main
      .block
        .wrapper
          .title {{$t(`${$route.name}.tab.title`)}}
          .tab
            .tab-desc {{$t(`${$route.name}.tab.desc`)}}
            .tab-action
              a.tab-btn.solid(:href="`#`" v-for="item,index in $t(`${$route.name}.tab.btn`)" :key="index" @click.prevent="goAnchor(item.link)")
                span {{item.text}}
      .block#swiperTarget
        .wrapper
          #swiper
            CustomSwiper(
              :title="pictureArr[val].title"
              :subTitle="pictureArr[val].subTitle"
              :dotNum = "5"
              :pictureLink="pictureArr[val].link"
              :key="val"
              :pictureArrLength="pictureArr.length"
            )
              template(slot="option")
                .option-items
                  .option-item(v-for="item, index in $t(`${$route.name}.Swiper.option`)" :key="index" @click="val=index") {{item}}
      .block.grey#tableTarget
        .wrapper.overScroll
          .title {{$t(`${$route.name}.table.title`)}}
          .table
            table
              thead
                tr
                  td(width="9%") {{$t(`${$route.name}.table.thead.item`)}}
                  td(width="27%") {{$t(`${$route.name}.table.thead.source`)}}
                  td(width="14%") {{$t(`${$route.name}.table.thead.species`)}}
                  td(width="10%") {{$t(`${$route.name}.table.thead.temperature`)}}
                  td(width="13%") {{$t(`${$route.name}.table.thead.time`)}}
                  td(width="27%") {{$t(`${$route.name}.table.thead.status`)}}
              tbody
                tr
                  td {{$t(`${$route.name}.table.tr1.item`)}}
                  td.left(v-html="$t(`${$route.name}.table.tr1.source`)")
                  td(rowspan="4") {{$t(`${$route.name}.table.tr1.species`)}}
                  td {{$t(`${$route.name}.table.tr1.temperature`)}}
                  td {{$t(`${$route.name}.table.tr1.time`)}}
                  td.left {{$t(`${$route.name}.table.tr1.status`)}}
                tr
                  td {{$t(`${$route.name}.table.tr2.item`)}}
                  td.left {{$t(`${$route.name}.table.tr2.source`)}}
                  td {{$t(`${$route.name}.table.tr2.temperature`)}}
                  td {{$t(`${$route.name}.table.tr2.time`)}}
                  td.left {{$t(`${$route.name}.table.tr2.status`)}}
                tr.blue
                  td(rowspan="4") {{$t(`${$route.name}.table.tr3.item`)}}
                  td.left(rowspan="2") {{$t(`${$route.name}.table.tr3.source`)}}
                  td {{$t(`${$route.name}.table.tr3.temperature`)}}
                  td(rowspan="2") {{$t(`${$route.name}.table.tr3.time`)}}
                  td.left(rowspan="2") {{$t(`${$route.name}.table.tr3.status`)}}
                tr.blue
                  td {{$t(`${$route.name}.table.tr4.temperature`)}}
                tr.blue
                  td.left(rowspan="2") {{$t(`${$route.name}.table.tr5.source`)}}
                  td.left(rowspan="2" v-html="$t(`${$route.name}.table.tr5.species`)")
                  td {{$t(`${$route.name}.table.tr5.temperature`)}}
                  td(rowspan="2") {{$t(`${$route.name}.table.tr5.time`)}}
                  td.left(rowspan="2") {{$t(`${$route.name}.table.tr5.status`)}}
                tr.blue
                  td {{$t(`${$route.name}.table.tr6.temperature`)}}
          p.remark {{$t(`${$route.name}.table.remark1`)}}
          p.remark {{$t(`${$route.name}.table.remark2`)}}
            a(href="https://youtu.be/fXYThc0ofws" target="_blank") {{$t(`${$route.name}.table.remarkLink`)}}
      .block#centerTarget
        .wrapper
          .title {{$t(`${$route.name}.test.title`)}}
            .attach {{$t(`${$route.name}.test.attach`)}}
          .graphicIntro
            .graphicIntro-img
              figure
                img(:src="compileFilePath(`test.jpg`)")
            .graphicIntro-content
              .graphicIntro-title {{$t(`${$route.name}.test.content.title`)}}
              .graphicIntro-desc 
                ul.list
                  li(v-for="item,index in $t(`${$route.name}.test.content.list`)" :key="index") {{item.text}}
                    br
                    span {{item.note}}
      .separate
      .block#resultTarget
        .wrapper
          .title {{$t(`${$route.name}.list.title`)}}
          ol.list
            li(v-for="item,index in $t(`${$route.name}.list.listItem`)" :key="index") {{item}}
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
          1: "banner-1.jpg",
        },
        {
          1: "banner-1-m.jpg",
        },
      ],
      val: 0,
      pictureArr: this.$t(`${this.$route.name}.Swiper.pic`),
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
  watch: {
    lang() {
      this.pictureArr = this.$t(`${this.$route.name}.Swiper.pic`);
    },
  },
  methods: {
    goAnchor(link) {
      var anchor = document.querySelector(link).offsetTop - 93;
      window.scrollTo(0, anchor);
    },
  },
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"
#fireTest
  .option
    &-box
      text-align: center
    &-items
      font-size: 0
    &-item
      display: inline-block
      width: 50%
      padding: 25px 0
      font-size: 24px
      transition: .3s
      cursor: pointer
      &+&
        margin: 0
      &:hover
        color: #f0511d
    @include rwd(960px)
      &-item
        width: 100%
        padding: 10px 0
        font-size: 14px
  .graphicIntro
    width: 100%
    margin-left: 0
    margin-top: 0
    &-img
      padding: 0
      &::after
        content: none
.table
  table
    width: 100%
  thead
    tr
      font-weight: bold
      background-color: #e5e5e5
  td
    box-sizing: border-box
    vertical-align: middle
    padding: 18px
    font-size: 22px
    line-height: 1.2
    border: 1px solid #2f2f2f
  .blue
    background-color: #e3edf6
  .left
    text-align: left
  .note
    font-size: 12px
  @include rwd(960px)
    overflow-x: scroll
    table
      min-width: 830px
      margin: auto
    td
      padding: 14px
      font-size: 14px
.remark
  font-size: 20px
  text-align: left
  margin-top: 20px
  a
    color: #169efe
    text-decoration: underline
  @include rwd(960px)
    font-size: 12px
.list
  padding-left: 1em
  +fontP
  line-height: 1.2
  text-align: left
  color: #696969
  list-style: decimal
  li+li
    margin-top: 24px
  @include rwd(960px)
    li+li
      margin-top: 10px
.graphicIntro-content
  .list
    +fontP
    color: #2f2f2f
    span
      font-size: 20px
  @include rwd(960px)
    .list
      span
        font-size: 12px
.separate
  max-width: 1280px
  margin: auto
  border-top: 1px solid #c2c2c2
  @include rwd(960px)
    width: calc( 100% - 30px )
    max-width: none
</style>
