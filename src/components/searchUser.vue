<template>
  <div class="content__search">
    <h1>{{ msg }}</h1>
    <form class="search__form" @submit.prevent="searchUser">
      <div class="input__form">
        <button>
          <font-awesome-icon icon="search" />
        </button>
        <input type="text" v-model="username" placeholder="username" />
      </div>
      <div v-if="loading" class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </form>
  </div>
</template>

<script>
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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-align: center;
}
.search__form {
  display: grid;
  justify-content: center;
  justify-items: center;
  input {
    border: none;
    height: 15px;
    padding: 10px;
    background-color: transparent;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: rgb(209, 209, 209);
    width: 100%;
  }
  .input__form {
    border-radius: 5px;
    width: 250px;
    display: flex;
    background-color: #16181d;
    color: rgb(209, 209, 209);
    button {
      background-color: transparent;
      border: none;
      color: #fff;
      margin-left: 5px;
    }
  }
  input:focus {
    outline: none;
  }
  .input__form:hover {
    outline: 0.5px solid #525357;
  }
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
