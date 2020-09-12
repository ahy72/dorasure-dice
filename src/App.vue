<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import Main from './components/Main.vue'

export default defineComponent({
  name: 'App',
  components: { Main }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
