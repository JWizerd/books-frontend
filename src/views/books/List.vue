<template>
  <section>
    <List />
  </section>
</template>

<script>
// @ is an alias to /src
import List from '@/components/books/List.vue'

export default {
  name: 'list',
  components: {
    List
  }
}
</script>
