<template lang="pug">
  article#examples
    .block.grey
      .wrapper
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
</style>
