<template>
  <div class="content__strengths">
    <div v-for="(proficiencies, index) in array" :key="index">
      <div
        class="level__strengths"
        :class="{
          master: proficiencies.proficiency === 'master',
          expert: proficiencies.proficiency === 'expert',
          proficient: proficiencies.proficiency === 'proficient',
          novice: proficiencies.proficiency === 'novice',
          noexperience:
            proficiencies.proficiency === 'no-experience-interested',
        }"
        @click="activeLevel(index)"
      >
        <div class="name__proficiency">
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
        <div class="button__proficiency">
          <font-awesome-icon v-if="proficiencies.open" icon="chevron-up" />
          <font-awesome-icon v-else icon="chevron-down" />
        </div>
      </div>
      <div class="wrapper__strengths" v-if="proficiencies.open">
        <div
          class="box__strength"
          :class="{
            master: proficiencies.proficiency === 'master',
            expert: proficiencies.proficiency === 'expert',
            proficient: proficiencies.proficiency === 'proficient',
            novice: proficiencies.proficiency === 'novice',
            noexperience:
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
  </div>
</template>

<script>
export default {
  name: "strengthsUser",
  props: {
    strengths: Array,
  },
  data() {
    return {
      user: "",
      array: this.strengths.reduce((prev, current) => {
        let exists = prev.find((x) => x.proficiency === current.proficiency);
        if (!exists) {
          exists = {
            proficiency: current.proficiency,
            strengths: [],
            open: false,
          };
          prev.push(exists);
        }
        if (current != null) {
          exists.strengths.push({
            name: current.name,
            id: current.id,
            recommendations: current.recommendations,
          });
        }
        return prev;
      }, []),
    };
  },
  watch: {
    strengths(value) {
      this.array = value.reduce((prev, current) => {
        let exists = prev.find((x) => x.proficiency === current.proficiency);
        if (!exists) {
          exists = {
            proficiency: current.proficiency,
            strengths: [],
            open: false,
          };
          prev.push(exists);
        }
        if (current != null) {
          exists.strengths.push({
            name: current.name,
            id: current.id,
            recommendations: current.recommendations,
          });
        }
        return prev;
      }, []);
    },
  },
  methods: {
    activeLevel(index) {
      this.array[index].open = !this.array[index].open;
    },
  },
};
</script>
<style scoped lang="scss">
.content__strengths {
  display: grid;
  gap: 10px;
  margin-top: 20px;
  padding: 10px;
}
.wrapper__strengths {
  display: grid;
  gap: 10px;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 5px;
  padding: 0 10px;
  transition: 1s;
  .box__strength {
    display: flex;
    border-radius: 10px;
    border: 0.5px solid rgba(70, 70, 70, 0.589);
    display: grid;
    padding: 10px;
    h3 {
      margin: 0;
      font-size: 16px;
    }
    p {
      margin: 3px 0;
      font-size: 12px;
    }
  }
}

.level__strengths {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0.5px solid rgba(70, 70, 70, 0.589);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: .5s;
  .button__proficiency {
    cursor: pointer;
    font-size: 20px;
    transition: 0.5s;
  }
  .button__proficiency:hover {
    color: #03a9f4;
  }
  .name__proficiency {
    display: flex;
    align-items: center;
    gap: 10px;
    h3 {
      margin: 5px 0;
    }
  }
}
.master {
  background-color: rgb(24, 25, 73);
  
}
.expert {
  background-color: rgba(0, 29, 74, 1);
}
.proficient {
  background-color: #123468;
}
.novice {
  background: rgb(39, 71, 110);
}
.noexperience {
  background-color: rgb(108, 207, 246);
  
}
</style>
