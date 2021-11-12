export default {
  name: "listStrengths",
  props: {
    proficiencies: Object,
  },
  methods: {
    openModalSameSkills(strengths, proficiency) {
      let data = {
        text: strengths,
        proficiency: proficiency,
      };
      this.$store.dispatch("GET_PEOPLE_SAME_SKILL", data);
    },
  },
};
