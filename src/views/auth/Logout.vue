<template>
  <h1>Successfully Logged Out</h1>
</template>

<script>
export default {
  name: "logout",
  mounted() {
    try {
      if (window.localStorage.getItem("authenticated") !== null) {
        this.$store.dispatch("logout");
      } else {
        this.$router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
