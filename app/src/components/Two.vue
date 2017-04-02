<template>
  <div id="app-2">
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds
      to see my dynamically bound title!
    </span>
  </div>
</template>

<script>
import store from '../vuex'

export default {
  name: 'two',
  data () {
    return {
      message: 'You loaded this page on ' + new Date()
    }
  },
  mounted: function () {
    store.commit('pageLoaded', 'two')
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
