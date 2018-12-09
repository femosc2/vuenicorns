<template>
  <div id="app">
    <unicorns />
  </div>
</template>

<script>
import Unicorns from './components/Unicorns/Unicorns.vue'

export default {
  name: 'app',
  components: {
    Unicorns
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
