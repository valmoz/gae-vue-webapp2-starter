<template>
  <div id="page-header">
    <img src="../../assets/logo.png"><br>
    <router-link to="/">Go to Hello</router-link>
    <router-link to="/one">Go to One</router-link>
    <router-link to="/two">Go to Two</router-link>
  </div>
</template>

<script>

export default {
  name: 'pageHeader',
  data () {
    return {
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

.router-link-active {
  display:none;
}
</style>
