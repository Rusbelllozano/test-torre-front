import StrengthsUser from "@/components/strengthsUser/strengthsUser.vue";
import ModalSameStrengths from "@/components/modalSameStrengths/modalSameStrengths.vue";
export default {
  name: "InfoUser",
  components: {
    StrengthsUser,
    ModalSameStrengths,
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
    opened_modal() {
      return this.$store.state.opened_modal;
    },
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
