import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    user_data: JSON.parse(localStorage.getItem("user_data")),
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
          url: process.env.VUE_APP_API_URL + username,
        });
        commit("setError", "");
        commit("setUser", user_data.data);
        if (!user_data.data.message) {
          localStorage.setItem("user_data", JSON.stringify(user_data.data));
        }
      } catch (error) {
        console.log(error.response.status);
        if (error.response.status === 404) {
          commit("setError", "You must type a username");
        } else {
          commit("setError", "Username doesn't exist");
        }
      }
    },
  },
  modules: {},
});
