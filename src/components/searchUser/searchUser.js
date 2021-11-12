export default {
  name: "searchUser",
  props: {
    msg: String,
  },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    async searchUser() {
      if (this.username) {
        await this.$store.dispatch("GET_INFO_USER", this.username);
      } else {
        this.$store.commit("setError", "Type a username");
      }
    },
  },
  computed: {
    loading_info() {
      return this.$store.state.loading_info;
    },
  },
};
