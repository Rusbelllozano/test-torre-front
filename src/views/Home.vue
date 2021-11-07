<template>
  <div class="home">
    <SearchUser msg="Type the username to find" />
    <InfoUser />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchUser from "@/components/searchUser.vue";
import InfoUser from "@/components/infoUser.vue";

export default {
  name: "Home",
  components: {
    SearchUser,
    InfoUser,
  },
};
</script>
<style lang="scss" scoped>
.home {
  min-width: 450px;
  max-width: 600px;
}
</style>
