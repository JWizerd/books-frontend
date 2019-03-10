<template>
  <h1>Successfully Logged Out</h1>
</template>

<script>
export default {
  name: "logout",
  mounted() {
    console.log(this.$store.getters.authenticated);
    // try {
    //   if (this.$store.getters.authenticated) {
    //     this.$store.dispatch("logout");
    //   } else {
    //     this.$router.push("/");
    //   }
    // } catch (error) {}
  }
};
</script>
