<template>
  <div class="content__user">
    <p>{{ error_msg }}</p>
    <div v-if="user_data.person">
      <div class="header__user">
        <img :src="user_picture" alt="user_picture" />
        <div class="name__user">
          <h3>
            {{ user_data.person.name }}
          </h3>
          <p>{{ user_data.person.professionalHeadline }}</p>
        </div>
      </div>
      <div class="strengths__user">
        <StrengthsUser :strengths="user_data.strengths" />
      </div>
    </div>
    <h1 v-else>{{ user_data.message }}</h1>
  </div>
</template>

<script>
import StrengthsUser from "@/components/strengthsUser.vue";
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
        : require("../assets/user_picture.png");
    },
    user_data() {
      return this.$store.state.user_data;
    },
    error_msg() {
      return this.$store.state.error_msg;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content__user {
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(163, 163, 163, 0.164);
}
.header__user {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  img {
    clip-path: circle();
    width: 80px;
    object-fit: contain;
  }
  .name__user {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    h3 {
      margin: 0;
    }
    p {
      font-size: 14px;
      margin: 5px 0;
    }
  }
}
</style>
