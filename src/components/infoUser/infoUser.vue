<template>
  <div class="main-container__user">
    <p>{{ error_msg }}</p>
    <div v-if="user_data.person">
      <div class="main-header__user">
        <img :src="user_picture" :alt="user_data.person.name" />
        <div class="main-title__user">
          <h3>
            {{ user_data.person.name ? user_data.person.name : "no name" }}
          </h3>
          <p>
            {{
              user_data.person.professionalHeadline
                ? user_data.person.professionalHeadline
                : "no headline"
            }}
          </p>
        </div>
      </div>
      <div class="main-wrapper__strengths-user">
        <StrengthsUser :strengths="user_data.strengths" />
      </div>
    </div>
    <div class="main-box__message" v-else>
      <font-awesome-icon
        v-if="user_data.message === 'Person not found!'"
        icon="user-times"
      />
      <h3>
        {{
          user_data.message ? user_data.message : "Here you will see your skils"
        }}
      </h3>
    </div>
  </div>
</template>

<script src="./infoUser.js"></script>
<style scoped lang="scss" src="./infoUser.scss"></style>
