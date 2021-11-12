<template>
  <div
    class="button__list-strengths"
    :class="{
      'button--master': proficiencies.proficiency === 'master',
      'button--expert': proficiencies.proficiency === 'expert',
      'button--proficient': proficiencies.proficiency === 'proficient',
      'button--novice': proficiencies.proficiency === 'novice',
      'button--noexperience':
        proficiencies.proficiency === 'no-experience-interested',
    }"
    @click="openList"
  >
    <div class="title__proficiency">
      <h3>{{ mayusText(proficiencies.proficiency) }}</h3>
      <font-awesome-icon
        v-if="proficiencies.proficiency === 'master'"
        icon="crown"
      />
      <font-awesome-icon
        v-else-if="proficiencies.proficiency === 'expert'"
        icon="rocket"
      />
      <font-awesome-icon
        v-else-if="proficiencies.proficiency === 'proficient'"
        icon="user-tie"
      />
      <font-awesome-icon
        v-else-if="proficiencies.proficiency === 'novice'"
        icon="hiking"
      />
      <font-awesome-icon v-else icon="baby-carriage" />
    </div>
    <div class="indicator__button-proficiency">
      <font-awesome-icon v-if="proficiencies.open" icon="chevron-up" />
      <font-awesome-icon v-else icon="chevron-down" />
    </div>
  </div>
</template>
<script src="./buttonStrengths.js"></script>
<style scoped lang="scss" src="./buttonStrengths.scss"></style>
