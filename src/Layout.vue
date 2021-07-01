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
    return {
      title: this.$t(`Meta.title`)
    };
  },
  metaInfo() {
    return{
      meta: [
        {
          name:'title',
          content: this.$t(`Meta.title`)
        },
        {
          name:'description',
          content: this.$t(`Meta.description`)
        },
        {
          name:'keyword',
          content: this.$t(`Meta.keyword`)
        },
        {
          name:'og:title',
          content: this.$t(`Meta.title`)
        },
        {
          name:'og:description',
          content: this.$t(`Meta.description`)
        },
      ]
    }
  },
  computed: {
    ...mapState(["lang"])
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
  methods: {
  },
  watch: {
  }
};
</script>

<style lang="sass">
@import "./assets/sass/var.sass"
</style>
