import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    user_data: {},
    error_msg: "",
  },
  mutations: {
    setUser(state, user_data) {
      state.user_data = user_data;
    },
    setError(state, error_msg) {
      state.error_msg = error_msg;
    },
  },
  actions: {
    async GET_INFO_USER({ commit }, username) {
      try {
        let user_data = await axios({
          method: "get",
          url: process.env.VUE_APP_API_URL + "get_user/" + username,
        });
        commit("setError", "");
        commit("setUser", user_data.data);
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
