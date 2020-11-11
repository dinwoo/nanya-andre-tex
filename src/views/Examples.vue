<template lang="pug">
  article#examples
    .block.grey
      .wrapper
        .title 成功案例
        btnCard(:cardData="$t(`${$route.name}.card`)" :className="`examples`" v-on:increment="valSet")
    .block#swiperTarget
      .wrapper
        #swiper
          CustomSwiper(
            :title="pictureArr[val].title"
            :subTitle="pictureArr[val].subTitle"
            :dotNum = "5"
            :pictureLink="pictureArr[val].link"
            :key="val"
          )
            template(slot="option")
              .option-title 座椅內用防火材
              .option-items
                .option-item(@click="valSet") 桃園 芙蓉匯
                .option-item(@click="valSet") 新莊 麗寶雙璽
                .option-item(@click="valSet") 遠雄95大樓
                .option-item(@click="valSet") 海上皇宮
                .option-item(@click="valSet") 海洋都心三期
</template>

<script>
import btnCard from "@/components/btnCard.vue";
import CustomSwiper from "@/components/CustomSwiper.vue";
export default {
  components: {
    btnCard,
    CustomSwiper
  },
  data() {
    return {
      val: 0,
      pictureArr: [
        {
          title: "桃園 芙蓉匯",
          link: ["taoyuan.jpg", "taoyuan.jpg", "taoyuan.jpg"]
        },
        {
          title: "新莊 麗寶雙璽",
          link: ["xinzhuang.jpg", "xinzhuang.jpg", "xinzhuang.jpg", "xinzhuang.jpg"]
        },
        {
          title: "遠雄95大樓",
          link: ["building95.jpg", "building95.jpg", "building95.jpg", "building95.jpg"]
        },
        {
          title: "海上皇宮",
          link: ["seaPalace.jpg", "seaPalace.jpg"]
        },
        {
          title: "海洋都心三期",
          link: ["sea.jpg", "sea.jpg"]
        }
      ]
    };
  },
  methods: {
    valSet: function(cardVal){
      return this.val = cardVal
    }
  }
};
</script>

<style lang="sass">
@import "../assets/sass/var.sass"
</style>
