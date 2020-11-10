<template lang="pug">
  article#home
    .block
      .wrapper
        .title
          figure.application
            img(:src="compileFilePath(`cardTitle.png`)")
            img(:src="compileFilePath(`cardTitle_m.png`)")
        btnCard(:cardData="$t(`${$route.name}.card`)")
</template>


<script>
// @ is an alias to /src
import btnCard from "@/components/btnCard.vue";

export default {
  name: "Home",
  components: {
    btnCard
  }
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
      padding: 0 15px
.block
  padding: 70px 0
  &.grey
    background-color: #f7f7f7
  @include rwd(960px)
    padding: 55px 0
.title
  font-size: 50px
  font-weight: bold
  margin-bottom: 55px
  .attach
    margin-top: 25px
    font-size: 30px
    color: #f0511d
  @include rwd(1280px)
    font-size: 40px
  @include rwd(960px)
    font-size: 26px
    margin-bottom: 40px
    &.overScroll
        max-width: none
  .application
    width: 587px
    margin: auto
    img
      &:nth-of-type(2)
        display: none
    @include rwd(1280px)
      width: 480px
    @include rwd(960px)
      width: 200px
      img
        &:nth-of-type(1)
          display: none
        &:nth-of-type(2)
            display: block
</style>
