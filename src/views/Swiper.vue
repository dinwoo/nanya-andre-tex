<template lang="pug">
  #swiper
    CustomSwiper(
      :title="pictureArr[val].title"
      :subTitle="pictureArr[val].subTitle"
      :dotNum = "3"
      :pictureLink="pictureArr[val].link"
      :key="val"
    )
      template(slot="option")
        .item(@click="val=0") aaa
        .item(@click="val=1") bbb
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
          title: "座椅內用防火材1",
          subTitle: "飛機座椅1",
          link: ["fuli.jpg", "blackcat1.jpg", "blackcat2.jpg"]
        },
        {
          title: "座椅內用防火材2",
          subTitle: "飛機座椅2",
          link: ["test.jpg", "test2.png", "test3.png", "test4.png"]
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
  width: 100%
  margin: auto
  .item
    display: block
    font-size: 20px
</style>