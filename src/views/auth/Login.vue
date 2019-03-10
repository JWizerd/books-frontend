<template>
  <div class="login">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from "@/components/auth/LoginForm";
// @ is an alias to /src
export default {
  components: { LoginForm },
  name: "login"
};
</script>