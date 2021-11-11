export default {
  name: "searchUser",
  props: {
    msg: String,
  },
  data() {
    return {
      username: "",
      loading: false,
    };
  },
  methods: {
    async searchUser() {
      if (this.username) {
        this.loading = true;
        await this.$store.dispatch("GET_INFO_USER", this.username);
        this.loading = false;
      } else {
        this.$store.commit("setError", "Type a username");
      }
    },
  },
};
