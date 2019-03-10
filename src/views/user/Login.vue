<template>
  <div class="login">
    <Login/>
  </div>
</template>

<script>
import Login from "@/components/user/Login";
// @ is an alias to /src
export default {
  components: { Login },
  name: "login"
};
</script>