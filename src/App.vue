<template lang="pug">
  #app
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
    Footer
  },
  data() {
    return {
      optionsLang: [
        { text: "中文", value: "zh" },
        { text: "English", value: "en" },
      ],
      page: "about",
    };
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
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC:300,500,700|Oswald:200,400&display=swap')

#app
  font-family: 'Noto Sans TC', sans-serif
  text-align: center
  color: #2c3e50
  padding-top: 90px

#nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50
    &.router-link-exact-active
      color: #42b983
</style>
