<template>
  <div class="login">
    <Register/>
  </div>
</template>

<script>
import Register from "@/components/user/Register";
// @ is an alias to /src
export default {
  components: { Register },
  name: "register"
};
</script>