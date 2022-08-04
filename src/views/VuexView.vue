<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <Users :users="users" />
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
      await this.$store.dispatch("fetchUsers");
      this.users = this.$store.getters.getUsers;
    },
    computed: {},
    methods: {},
  };
</script>
