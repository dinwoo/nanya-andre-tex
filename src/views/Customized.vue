<template lang="pug">
  article#customized
    section.banner
      BannerSwiper(
        :pictureLink="bannerLink"
      )
    section.main
      .block
        .wrapper
          .customized-flow
            img(:src="compileFilePath(`customized.jpg`)")
            img(:src="compileFilePath(`customized_m.jpg`)")
</template>

<script>
import BannerSwiper from "@/components/BannerSwiper.vue";
export default {
  components: {
    BannerSwiper,
  },
  data() {
    return {
      bannerLink: [
        {
          1: "banner-1.jpg",
        },
        {
          1: "banner-1-m.jpg",
        },
      ],
    };
  },
  metaInfo() {
    return {
      title: this.$t(`Meta.title`),
      meta: [
        {
          name: "title",
          content: this.$t(`${this.$route.name}.meta.title`),
        },
        {
          name: "description",
          content: this.$t(`${this.$route.name}.meta.description`),
        },
        {
          name: "keyword",
          content: this.$t(`${this.$route.name}.meta.keyword`),
        },
        {
          name: "og:title",
          content: this.$t(`${this.$route.name}.meta.title`),
        },
        {
          name: "og:description",
          content: this.$t(`${this.$route.name}.meta.description`),
        },
      ],
    };
  },
  methods: {},
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
