import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    user_data: {},
    error_msg: "",
    user_strengths: [],
    list_user_same_skills: [],
    opened_modal: false,
    loading_info: false,
  },
  mutations: {
    setUser(state, user_data) {
      state.user_data = user_data;
    },
    setError(state, error_msg) {
      state.error_msg = error_msg;
    },
    setStrengths(state, strengths) {
      let order_proficiencies = [
        "master",
        "expert",
        "proficient",
        "novice",
        "no-experience-interested",
      ];
      let separated_in_proficiencies = strengths.reduce((prev, current) => {
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
        exists.strengths.sort((a, b) =>
          a.recommendations < b.recommendations
            ? 1
            : b.recommendations < a.recommendations
            ? -1
            : 0
        );
        return prev;
      }, []);
      separated_in_proficiencies.sort(
        (a, b) =>
          order_proficiencies.indexOf(a.proficiency) -
          order_proficiencies.indexOf(b.proficiency)
      );
      state.user_strengths = separated_in_proficiencies;
    },
    openListStrengths(state, index) {
      state.user_strengths[index].open = !this.state.user_strengths[index].open;
    },
    setListSameSkill(state, list) {
      state.list_user_same_skills = list;
    },
    openModal(state) {
      state.opened_modal = !state.opened_modal;
    },
    changeLoadingStatus(state, value) {
      state.loading_info = value;
    },
  },
  actions: {
    async GET_PEOPLE_SAME_SKILL({ commit }, skill) {
      try {
        commit("changeLoadingStatus", true);
        let list_persons = await axios({
          method: "post",
          url: process.env.VUE_APP_API_URL + "get_people_same_skill",
          data: {
            "skill/role": skill,
          },
        });
        commit("changeLoadingStatus", false);
        commit("openModal");
        commit("setListSameSkill", {
          ...skill,
          result: list_persons.data.results.slice(0, 3),
        });
        console.log(list_persons.data.results);
      } catch (e) {
        commit("setError", "Don't found anything");
      }
    },
    async GET_INFO_USER({ commit }, username) {
      try {
        commit("changeLoadingStatus", true);
        let user_data = await axios({
          method: "get",
          url: process.env.VUE_APP_API_URL + "get_user/" + username,
        });
        commit("changeLoadingStatus", false);
        commit("setError", "");
        commit("setUser", user_data.data);
        commit("setStrengths", user_data.data.strengths);
        if (!user_data.data.message) {
          localStorage.setItem("user_data", JSON.stringify(user_data.data));
        }
      } catch (error) {
        commit("setError", "You must type a username");
      }
    },
  },
  modules: {},
});
