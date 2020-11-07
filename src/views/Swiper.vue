<template lang="pug">
  #swiper
    select(v-model="val")
      option(value="0") 0
      option(value="1") 1
    CustomSwiper(
      :dotNum = "3"
      :pictureLink="pictureArr[val]"
      :key="val"
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
      val: 0,
      pictureArr: [
        {
          0: "fuli.jpg",
          1: "blackcat1.jpg",
          2: "blackcat2.jpg"
        },
        {
          0: "test.jpg",
          1: "test2.png",
          2: "test3.png",
          3: "test4.png"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="sass">
#swiper
  width: 1280px
  margin: auto
</style>