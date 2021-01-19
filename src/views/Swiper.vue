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
    CustomSwiper,
  },
  data() {
    return {
      val: 0,
      pictureArr: this.$t(`${this.$route.name}.pic`),
    };
  },
  watch: {
    lang() {
      this.pictureArr = this.$t(`${this.$route.name}.pic`);
    },
  },
  mounted() {},
  methods: {},
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
