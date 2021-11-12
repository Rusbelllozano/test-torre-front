import ListStrengths from "@/components/listStrengths/listStrengths.vue";
import ButtonStrengths from "@/components/buttonStrengths/buttonStrengths.vue";
export default {
  name: "strengthsUser",
  components: {
    ListStrengths,
    ButtonStrengths,
  },
  computed: {
    list_strengths() {
      return this.$store.state.user_strengths;
    },
  },
};
