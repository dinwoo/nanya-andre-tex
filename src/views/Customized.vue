<template lang="pug">
  #customized
    h1 customized
    .customized-flow
      img(:src="compileFilePath(`customized.jpg`)")
      img(:src="compileFilePath(`customized_m.jpg`)")
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
#customized
  box-sizing: border-box
  max-width: 1240px
  margin: auto
  padding: 0 20px
  @media only screen and (max-width: 1024px)
    padding: 0 15px
.customized-flow
  img
    &:nth-of-type(2)
      display: none
  @media only screen and (max-width: 1024px)
    max-width: 640px
    margin: auto
    img
      &:nth-of-type(1)
        display: none
      &:nth-of-type(2)
        display: block
</style>
