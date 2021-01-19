<template lang="pug">
  div
    // 使用 $t(key) 即可依所選用的語系顯示對應的語言
    h1 {{ $t(`${$route.name}.title`) }}
    h2 {{ $t("description") }}
    img(:src="compileFilePath('test.jpg')" alt='')
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
