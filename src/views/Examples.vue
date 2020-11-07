<template lang="pug">
  article#examples
    .wrapper
      h1 examples
      .title 成功案例
      btnCard(:cardData="$t(`${$route.name}.card`)" :className="`examples`")
</template>

<script>
import btnCard from "@/components/btnCard.vue";
export default {
  components: {
    btnCard
  },
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
.title
  font-size: 50px
  font-weight: bold
  color: #2f2f2f
  margin-bottom: 60px
  @include rwd(960px)
    font-size: 26px
    margin-bottom: 30px
</style>
