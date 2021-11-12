import StrengthsUser from "@/components/strengthsUser/strengthsUser.vue";
export default {
  name: "InfoUser",
  components: {
    StrengthsUser,
  },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    searchUser() {
      this.$store.dispatch("GET_INFO_USER", this.username);
    },
  },
  computed: {
    user_picture() {
      return this.$store.state.user_data.person.picture
        ? this.$store.state.user_data.person.picture
        : require("../../assets/user_picture.png");
    },
    user_data() {
      return this.$store.state.user_data;
    },
    error_msg() {
      return this.$store.state.error_msg;
    },
  },
};
