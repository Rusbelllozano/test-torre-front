<template>
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span @click="openModal()" class="close">&times;</span>
      <div class="modal__title">
        <h3>People with same skill and proficiency</h3>
        <p>{{ list_same_skills.text }} - {{ list_same_skills.proficiency }}</p>
      </div>
      <div
        class="wrapper__user-related"
        v-for="person in list_same_skills.result"
        :key="person.subjectId"
        @click="findUserSkills(person.username)"
      >
        <img
          :src="
            person.picture
              ? person.picture
              : require('../../assets/user_picture.png')
          "
          alt=""
        />
        <div class="title__user-related">
          <h4>
            {{ person.name }}
          </h4>
          <p>{{ person.username }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./modalSameStrengths.js"></script>
<style scoped lang="scss" src="./modalSameStrengths.scss"></style>
