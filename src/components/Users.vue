<template>
  <div v-for="user in users" :key="user.id">
    {{ user.id }} {{ user.name }} {{ user.address }}
  </div>
</template>
<script>
  export default {
    name: "users-component",
    props: ["users"]
  }
</script>
