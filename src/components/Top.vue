<template>
  <header class="bg-white w-full flex justify-between pt-5 pb-5 pl-5 pr-5">
    <h1>
      <router-link to="/" class="no-underline text-green-dark">Books</router-link>
    </h1>
    <Nav/>
  </header>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "Top",
  components: { Nav }
};
</script>


