import {
  mapState
} from "vuex";
export default {
  computed: {
    ...mapState(["lang"])
  },
  methods: {
    compileFilePath(file) {
      return require(`@/assets/${this.lang}/${file}`);
    }
  }
};
