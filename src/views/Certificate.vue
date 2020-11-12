<template lang="pug">
  article#certificate
    section.banner
      BannerSwiper(
        :pictureLink="bannerLink"
      )
    section.main
</template>

<script>
import BannerSwiper from "@/components/BannerSwiper.vue";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    BannerSwiper
  },
  data() {
    return {
      bannerLink: [
        {
          1: "banner-1.jpg",
          2: "banner-1.jpg",
          3: "banner-1.jpg"
        },
        {
          1: "banner-1-m.jpg",
          2: "banner-1-m.jpg",
          3: "banner-1-m.jpg"
        },
      ],
    };
  },
  methods: {}
};
</script>
