<template>
  <div id="app">
    <page-wrapper>
      <router-view></router-view>
    </page-wrapper>
  </div>
</template>

<script>
import pageWrapper from './components/PageWrapper.vue'

export default {
  name: 'app',
  components: {
    pageWrapper
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
