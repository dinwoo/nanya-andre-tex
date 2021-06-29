<template lang="pug">
  .layout
    router-view
</template>

<script>
import {
  mapState
} from "vuex";
export default {
  components: {
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["lang"])
  },
  // beforeRouteEnter (to, from, next) {
  //   console.log(to, from, next)
  //   next()
  // },
  methods: {
  },
  watch: {
  }
};
</script>

<style lang="sass">
@import "./assets/sass/var.sass"
</style>
