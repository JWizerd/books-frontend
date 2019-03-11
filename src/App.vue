<template>
  <div id="app">
    <Top/>
    <router-view/>
  </div>
</template>

<style>
body {
  background: #eee;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script>
import Top from "@/components/Top";

export default {
  name: "App",
  components: { Top }
};
</script>