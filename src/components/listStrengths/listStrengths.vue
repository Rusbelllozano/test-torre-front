<template>
  <div class="wrapper__strengths" v-if="proficiencies.open">
    <div
      class="box__strength"
      :class="{
        'button--master': proficiencies.proficiency === 'master',
        'button--expert': proficiencies.proficiency === 'expert',
        'button--proficient': proficiencies.proficiency === 'proficient',
        'button--novice': proficiencies.proficiency === 'novice',
        'button--noexperience':
          proficiencies.proficiency === 'no-experience-interested',
      }"
      v-for="strength in proficiencies.strengths"
      :key="strength.id"
    >
      <h3>
        {{ strength.name }}
      </h3>
      <p>recommendations: {{ strength.recommendations }}</p>
    </div>
  </div>
</template>
<script src="./listStrengths.js"></script>
<style scoped lang="scss" src="./listStrengths.scss"></style>
