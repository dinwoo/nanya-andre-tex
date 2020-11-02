<template lang="pug">
  #app
    #nav
      router-link(to='/') Home
      |  |
      router-link(to='/about') About
      |  |
      router-link(to='/pon') Pon
      |  |
      router-link(to='/swiper') Swiper
      |  |
      router-link(to='/application/material1') application
      |  |
      router-link(to='/customized') customized
      |  |
      router-link(to='/fireTest') fireTest
      |  |
      router-link(to='/examples') examples
      |  |
      router-link(to='/certificate') certificate
      |  |
      router-link(to='/contact') contact
    // 切換語系 UI
    label(v-for='(item, index) in optionsLang' v-bind:key='index')
      input(type='radio' v-model='$store.state.lang' :value='item.value' v-on:change='setLang(item.value)')
      |       {{ item.text }}
    router-view
</template>

<script>
export default {
  data() {
    return {
      optionsLang: [
        { text: "中文", value: "zh" },
        { text: "English", value: "en" }
      ],
      page: "about"
    };
  },
  methods: {
    // 儲存切換的語系
    setLang(value) {
      this.$store.commit("setLang", value);
      this.$i18n.locale = value;
      localStorage.setItem("footmark-lang", value);
    }
  }
};
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
