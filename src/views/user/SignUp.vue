<template>
  <div class="login">
    <SignUpForm/>
  </div>
</template>

<script>
import SignUpForm from "@/components/user/SignUpForm";
// @ is an alias to /src
export default {
  components: { SignUpForm },
  name: "register"
};
</script>