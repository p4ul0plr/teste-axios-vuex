<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <Users :users="users" />
    <button @click.prevent="fetchTest()">Teste</button>
  </div>
</template>

<script>
  import Users from "../components/Users.vue";
  export default {
    name: "home-page",
    components: {
      Users,
    },
    data() {
      return {
        title: "Welcome to my Vuex Store",
        users: [],
      };
    },
    async created() {
      await this.$store.dispatch("fetchUsers", {name: "Teste"});
      this.users = this.$store.getters.getUsers;
    },
    computed: {
      
    },
    methods: {
      fetchTest() {
        this.$store.dispatch("fetchTest", {name: "Teste1"})
      }
    },
  };
</script>
