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
</style>
