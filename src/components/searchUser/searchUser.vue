<template>
  <div class="container__searchBar">
    <h1>{{ msg }}</h1>
    <form class="form__searchUsername" @submit.prevent="searchUser">
      <div class="input__searchUsername">
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

<script src="./searchUser.js"></script>
<style scoped lang="scss" src="./searchUser.scss"></style>
