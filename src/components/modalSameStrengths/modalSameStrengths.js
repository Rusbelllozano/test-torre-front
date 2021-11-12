export default {
  name: "strengthsUser",
  methods: {
    openModal() {
      this.$store.commit("openModal");
    },
    async findUserSkills(username) {
      this.openModal();
      await this.$store.dispatch("GET_INFO_USER", username);
    },
  },
  computed: {
    list_same_skills() {
      return this.$store.state.list_user_same_skills;
    },
  },
};
