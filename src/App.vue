<template>
  <Header msg="Vniverse Xperience"/>
  <div id="header">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name : 'Home',
  components: {
    Header
  }
}
</script>


<style>
html {
  background: no-repeat #03A688 30% url("../src/assets/texture.jpg");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  padding: 30px;
}

#header a {
  font-weight: bold;
  color: #2c3e50;
}

#header a.router-link-exact-active {
  color: #42b983;
}
</style>
