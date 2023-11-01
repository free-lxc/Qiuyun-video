<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <MySlider />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import MySlider from '@/components/MySlider.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    MySlider
  }
}
</script>

<style>
* {
  margin: 0 0;
  padding: 0 0;
}
</style>
