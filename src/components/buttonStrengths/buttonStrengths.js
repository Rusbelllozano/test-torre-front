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
    mayusText(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
  },
};
