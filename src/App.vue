<template lang="pug">
  #app(
    :class="`${lang}-style`"
  )
    Header
    router-view
    Footer
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    // 儲存切換的語系
    setLang(value) {
      this.$store.commit("setLang", value);
      this.$i18n.locale = value;
      localStorage.setItem("footmark-lang", value);
    },
  },
};
</script>

<style lang="sass">
@import "./assets/sass/var.sass"
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,500,700|Oswald:200,400&display=swap')

#app
  font-family: 'Noto Sans TC', sans-serif
  text-align: center
  color: #2f2f2f
  padding-top: 90px
  @include rwd(1280px)
    padding-top: 80px
  @include rwd(960px)
    padding-top: 70px

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
