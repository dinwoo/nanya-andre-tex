<template lang="pug">
  article#fireTest
    section.banner
    section.main
      h1 防火材測試
      p 經塑膠中心測試，評等1級。可抗瞬燃1200℃高溫，長時間耐熱範圍350～450℃，具不燃燒、不熔融特性，焚燒過程不會產生有毒廢氣，無二次公害。 可供防火毯(滅火毯)、耐燃包覆材、耐熱墊材等安全防護用途。
      .greyBlock
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
            a(href="#") YouTube搜尋南亞防火毯
      .wrapper
        .title 塑膠中心測試
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
        .title 測試結果
        ul.list
          li 南亞防火材經噴燈高溫燃燒測試較一般市售防火、滅火(隔熱、保溫)等材質，堅固耐用、不易破損、不延燒、不熔融、不產生毒廢氣造成二次公害。
          li 電焊測試可降低電焊焊渣彈跳高度與範圍。
          li 重量適當可折疊、易收藏不會有玻璃纖維易脆化缺點、不含石棉及限用物質等優異特性。
            br
            | 限氧指數:ASTM D2863法指數45↑。
          li 應用範圍廣泛如工程明火防火毯(電焊、氣焊、砂磨、高溫切割) 防火隔簾、耐熱包覆材、保溫材、耐熱墊、汽車隔音、隔熱材、高溫作業區隔熱毯、家庭滅火毯安全防護用途。
          li 測試結果CNS 10285 L3196 A4、CNS 7614 A3125均評等1級。限氧指數:ASTM D2863法指數45↑。
    .tab-btn
</template>

<script>
export default {
  data() {
    return {};
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
      &.overScroll
        max-width: none
.greyBlock
  padding: 60px 0
  background-color: #f7f7f7
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
    color: #2f2f2f
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
    overflow: scroll
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
  color: #2f2f2f
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
  width: calc( 100% + 80px )
  margin-top: 90px
  margin-bottom: 60px
  margin-left: -40px
  border-top: 1px solid #c2c2c2
  @include rwd(960px)
    width: 100%
    margin-top: 45px
    margin-bottom: 30px
    margin-left: 0
</style>
