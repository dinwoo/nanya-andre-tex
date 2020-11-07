<template lang="pug">
  #home
    .title-index
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
#home
  box-sizing: border-box
  max-width: 1240px
  margin: auto
  padding: 0 20px
  @media only screen and (max-width: 1024px)
    padding: 0 15px
.title-index
  margin-bottom: 45px
  img
    margin: auto
    &:nth-of-type(2)
      display: none
  @media only screen and (max-width: 960px)
    img
      max-width: 355px
      &:nth-of-type(1)
        display: none
      &:nth-of-type(2)
          display: block
</style>
