<template>
  <div class="login">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from "@/components/user/LoginForm";
// @ is an alias to /src
export default {
  components: { LoginForm },
  name: "login"
};
</script>