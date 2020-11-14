<template lang="pug">
  article#fireTest
    section.banner
      BannerSwiper(
        :pictureLink="bannerLink"
      )
    section.main
      .block
        .wrapper
          .title 防火材測試
          .tab
            .tab-desc 經塑膠中心測試，評等1級。可抗瞬燃1200℃高溫，長時間耐熱範圍350～450℃，具不燃燒、不熔融特性，焚燒過程不會產生有毒廢氣，無二次公害。 可供防火毯(滅火毯)、耐燃包覆材、耐熱墊材等安全防護用途。
            .tab-action
              a.tab-btn.solid(href="#swiperTarget") Ander-tex火燄實測
              a.tab-btn.solid(href="#tableTarget") 測試項目條件
              a.tab-btn.solid(href="#centerTarget") 塑膠中心測試
              a.tab-btn.solid(href="#resultTarget") 測試結果
      .block#swiperTarget
        .wrapper
          #swiper
            CustomSwiper(
              :title="pictureArr[val].title"
              :subTitle="pictureArr[val].subTitle"
              :dotNum = "5"
              :pictureLink="pictureArr[val].link"
              :key="val"
            )
              template(slot="option")
                .option-items.fireTest
                  .option-item(@click="val=0") 噴燈600℃X2min
                  .option-item(@click="val=1") 電焊1070℃X30sec
                  .option-item(@click="val=3") 噴燈1100℃X2min
                  .option-item(@click="val=3") 電焊1300℃X30sec
      .block.grey#tableTarget
        .wrapper.overScroll
          .title 測試項目及條件
          .table
            table
              thead
                tr
                  td(width="9%") 項次
                  td(width="27%") 防火隔熱材來源
                  td(width="14%") 明火種類
                  td(width="10%") 溫度
                  td(width="13%") 接觸時間
                  td(width="27%") 防火隔熱材狀態
              tbody
                tr
                  td 1
                  td.left 市售一般級
                    br
                    | 保溫.隔熱.隔音材
                  td(rowspan="4") 噴燈
                  td 600℃
                  td 4sec
                  td.left 延燒、破洞、黑煙、熔融。
                tr
                  td 2
                  td.left 市售防火.隔熱.保溫毯
                  td 600℃
                  td 18sec
                  td.left 不延燒、破洞、白煙、熔融。
                tr.blue
                  td(rowspan="4") 南亞
                  td.left(rowspan="2") 樹林廠開發防火毯
                  td 635℃
                  td(rowspan="2") 2 min
                  td.left(rowspan="2") 不延燒、無熔融、無廢氣產生、1000℃↑有碳化現象。
                tr.blue
                  td 1100℃
                tr.blue
                  td.left(rowspan="2") 樹林廠開發防火毯
                  td.left(rowspan="2") 電焊焊渣
                    br
                    span.note (掉落高度40cm)
                  td 1070℃
                  td(rowspan="2") 30sec
                  td.left(rowspan="2") 不延燒、無熔融、無廢氣產生、降低電焊焊渣彈跳高度與範圍。
                tr.blue
                  td 1300℃
          p.remark ※防火材測試使用熱影像對照圖。
          p.remark ※當日測試實況：
            a(href="#" target="_blank") YouTube搜尋南亞防火毯
      .block#centerTarget
        .wrapper
          .title 塑膠中心測試
            .attach 評等1級
          .graphicIntro
            .graphicIntro-img
              figure
                img(:src="compileFilePath(`test.jpg`)")
            .graphicIntro-content
              .graphicIntro-title.gapTop 南亞防火毯，噴燈高溫燃燒防火性、防燄性、限氧指數，測試評等 1 級。
              .graphicIntro-desc 
                ul.list
                  li 防火性：評等 1 級。
                    br
                    span (依CNS 10285 L3196 A4測試)
                  li 防燄性：評等 1 級。
                    br
                    span (以CNS 7614 A3125 前處理A法測試)
                  li 限氧指數：指數45↑。
                    br
                    span (以ASTM D2863法測試)
      .separate
      .block#resultTarget
        .wrapper
          .title 測試結果
          ul.list
            li 南亞防火材經噴燈高溫燃燒測試較一般市售防火、滅火(隔熱、保溫)等材質，堅固耐用、不易破損、不延燒、不熔融、不產生毒廢氣造成二次公害。
            li 電焊測試可降低電焊焊渣彈跳高度與範圍。
            li 重量適當可折疊、易收藏不會有玻璃纖維易脆化缺點、不含石棉及限用物質等優異特性。
              br
              | 限氧指數:ASTM D2863法指數45↑。
            li 應用範圍廣泛如工程明火防火毯(電焊、氣焊、砂磨、高溫切割) 防火隔簾、耐熱包覆材、保溫材、耐熱墊、汽車隔音、隔熱材、高溫作業區隔熱毯、家庭滅火毯安全防護用途。
            li 測試結果CNS 10285 L3196 A4、CNS 7614 A3125均評等1級。限氧指數:ASTM D2863法指數45↑。
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
          2: "banner-1.jpg",
          3: "banner-1.jpg",
        },
        {
          1: "banner-1-m.jpg",
          2: "banner-1-m.jpg",
          3: "banner-1-m.jpg",
        },
      ],
      val: 0,
      pictureArr: [
        {
          title: "座椅內用防火材",
          subTitle: "影片：加工燃燒測試",
          link: ["blackcat1.jpg", "blackcat2.jpg", "fuli.jpg"],
        },
        {
          title: "座椅內用防火材",
          subTitle: "影片：加工燃燒測試",
          link: ["test.jpg", "test2.png", "test3.png", "test4.png"],
        },
        {
          title: "座椅內用防火材",
          subTitle: "影片：加工燃燒測試",
          link: ["test.jpg", "test2.png", "test3.png", "test4.png"],
        },
        {
          title: "座椅內用防火材",
          subTitle: "影片：加工燃燒測試",
          link: ["test.jpg", "test2.png", "test3.png", "test4.png"],
        },
      ],
    };
  },
  methods: {},
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
      &:before
        content: none
      &+&
        margin: 0
    @include rwd(960px)
      &-items
        padding: 20px
      &-item
        width: 100%
        padding: 20px 0
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
    padding: 24px
    font-size: 24px
    line-height: 1.2
    border: 1px solid #2f2f2f
  .blue
    background-color: #e3edf6
  .left
    text-align: left
  .note
    font-size: 16px
  @include rwd(1280px)
    td
      padding: 18px
      font-size: 16px
    .note
      font-size: 12px
  @include rwd(960px)
    overflow-x: scroll
    table
      width: 830px
      margin: auto
    td
      padding: 14px
      font-size: 14px
.remark
  font-size: 24px
  text-align: left
  margin-top: 20px
  a
    color: #169efe
    text-decoration: underline
  @include rwd(1280px)
    font-size: 16px
  @include rwd(960px)
    font-size: 14px
.list
  padding-left: 1em
  font-size: 24px
  line-height: 1.2
  text-align: left
  color: #696969
  list-style: decimal
  li+li
    margin-top: 30px
  @include rwd(1280px)
    font-size: 16px
    li+li
      margin-top: 20px
  @include rwd(960px)
    font-size: 12px
    li+li
      margin-top: 10px
.graphicIntro-content
  .gapTop
    margin-top: 25px
  .list
    font-size: 30px
    color: #2f2f2f
    span
      font-size: 24px
  @include rwd(1280px)
    .list
      font-size: 24px
      span
        font-size: 16px
  @include rwd(960px)
    .list
      font-size: 15px
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
