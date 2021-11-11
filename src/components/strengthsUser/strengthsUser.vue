<template>
  <div class="wrapper__list-strengths">
    <div v-for="(proficiencies, index) in array" :key="index">
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
        @click="activeLevel(index)"
      >
        <div class="title__proficiency">
          <h3>{{ proficiencies.proficiency }}</h3>
          <font-awesome-icon
            v-if="proficiencies.proficiency === 'master'"
            icon="crown"
          />
          <font-awesome-icon
            v-if="proficiencies.proficiency === 'expert'"
            icon="rocket"
          />
          <font-awesome-icon
            v-if="proficiencies.proficiency === 'proficient'"
            icon="user-tie"
          />
          <font-awesome-icon
            v-else-if="proficiencies.proficiency === 'novice'"
            icon="hiking"
          />
          <font-awesome-icon
            v-else-if="proficiencies.proficiency === 'no-experience-interested'"
            icon="baby-carriage"
          />
        </div>
        <div class="indicator__button-proficiency">
          <font-awesome-icon v-if="proficiencies.open" icon="chevron-up" />
          <font-awesome-icon v-else icon="chevron-down" />
        </div>
      </div>
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
          <p>recommendations {{ strength.recommendations }}</p>
        </div>
      </div>
    </div>
    <div class="wrapper__list-empty" v-if="!array.length">
      <p>
        No skills <br />
        Please go to <a href="https://torre.co">Torre.co</a> and add someones
      </p>
    </div>
  </div>
</template>

<script src="./strengthsUser.js"></script>
<style scoped lang="scss" src="./strengthsUser.scss"></style>
