export default {
  name: "buttonStrengths",
  props: {
    proficiencies: Object,
    indexProficiency: Number,
  },
  methods: {
    openList() {
      this.$store.commit("openListStrengths", this.indexProficiency);
    },
  },
};
