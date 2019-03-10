<template>
  <h1>Successfully Logged Out</h1>
</template>

<script>
export default {
  name: "logout",
  mounted() {
    try {
      this.$store.dispatch("logout");
    } catch (error) {}
  }
};
</script>
