<template lang="pug">
  article#customized
    .block
      .wrapper
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
@import "../assets/sass/var.sass"
.customized-flow
  img
    &:nth-of-type(2)
      display: none
  @include rwd(960px)
    img
      &:nth-of-type(1)
        display: none
      &:nth-of-type(2)
        display: block
</style>
