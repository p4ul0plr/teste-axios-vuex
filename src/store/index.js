import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
    teste: ""
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_TESTE(state, users) {
      state.teste = users;
    },
  },
  actions: {
    async fetchUsers({ commit }, payload) {
      console.log("fetchUsers: ", payload);
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (response.status === 200) {
            commit("SET_USERS", response.data);
          } else {
            console.error(response.error);
          }
        });
    },
    async fetchTest({ commit }, payload) {
      console.log("fetchTest: ", payload);
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          if (response.status === 200) {
            commit("SET_TESTE", response.data);
          } else {
            console.error(response.error);
          }
        });
    },
  },
  modules: {},
});
