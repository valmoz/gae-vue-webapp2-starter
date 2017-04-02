<template>
  <div id="page-footer">
    <p v-if="previousPage">PreviousPage: {{ previousPage }}</p>
  </div>
</template>

<script>
import store from '../../vuex'

export default {
  name: 'pageFooter',
  store,
  computed: {
    previousPage () {
      return store.state.previousPage
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
