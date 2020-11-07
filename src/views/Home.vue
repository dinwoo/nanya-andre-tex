<template lang="pug">
  article#home
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
      max-width: 430px
      padding: 0 15px
.title
  .application
    width: 587px
    margin: auto
    margin-bottom: 45px
    img
      &:nth-of-type(2)
        display: none
    @include rwd(960px)
      width: 200px
      img
        &:nth-of-type(1)
          display: none
        &:nth-of-type(2)
            display: block
</style>
