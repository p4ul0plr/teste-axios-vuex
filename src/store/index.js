import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    users: [],
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
  },
  actions: {
    async fetchUsers(context) {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (response.status === 200) {
            context.commit("SET_USERS", response.data);
          } else {
            console.error(response.error);
          }
        });
    },
  },
  modules: {},
});
