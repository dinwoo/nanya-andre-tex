<template lang="pug">
  .layout
    router-view
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      title: this.$t(`Meta.title`),
    };
  },
  metaInfo() {
    return {
      htmlAttrs: {
        lang: this.$t(`Meta.lang`),
      },
    };
  },
  computed: {
    ...mapState(["lang"]),
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        this.$store.commit("setScreenWidth", window.screenWidth);
        // that.screenWidth = window.screenWidth;
      })();
    };
  },
  methods: {},
  watch: {},
};
</script>

<style lang="sass">
@import "./assets/sass/var.sass"
</style>
