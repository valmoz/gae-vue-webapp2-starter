<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<script>
import store from '../vuex'

export default {
  name: 'hello',
  data () {
    return {
      message: 'Hello Vue!'
    }
  },
  mounted: function () {
    store.commit('pageLoaded', 'one')
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
