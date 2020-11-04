<template lang="pug">
  #swiper
    CustomSwiper(
      :dotNum = "3"
      :pictureLink="pictureLink"
    )
</template>

<script>
import CustomSwiper from "@/components/CustomSwiper.vue";
export default {
  components: {
    CustomSwiper
  },
  data() {
    return {
      pictureLink: ["fuli.jpg", "blackcat1.jpg", "blackcat2.jpg", "test.jpg"]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="sass">
</style>