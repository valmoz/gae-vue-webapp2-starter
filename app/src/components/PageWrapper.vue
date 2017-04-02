<template>
  <div id="page-wrapper">
    <page-header/>
    <slot>No content available.</slot>
    <page-footer/>
  </div>
</template>

<script>
import pageHeader from './fragments/PageHeader.vue'
import pageFooter from './fragments/PageFooter.vue'

export default {
  name: 'pageWrapper',
  components: {
    pageHeader,
    pageFooter
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
