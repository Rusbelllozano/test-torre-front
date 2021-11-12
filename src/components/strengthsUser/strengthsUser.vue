<template>
  <div class="wrapper__list-strengths">
    <div v-for="(proficiencies, index) in list_strengths" :key="index">
      <ButtonStrengths
        :proficiencies="proficiencies"
        :indexProficiency="index"
      />
      <ListStrengths :proficiencies="proficiencies" />
    </div>
    <div class="wrapper__list-empty" v-if="!list_strengths.length">
      <p>
        No skills <br />
        Please go to <a href="https://torre.co">Torre.co</a> and add someones
      </p>
    </div>
  </div>
</template>

<script src="./strengthsUser.js"></script>
<style scoped lang="scss" src="./strengthsUser.scss"></style>
