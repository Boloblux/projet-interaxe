<template>
  <div class= "app">
    <router-view/>
  </div>
</template>

<script>

</script>


<style>
body {
  height : 100% ;
  margin : 0;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: no-repeat left top url("../src/assets/texture.jpg");
  position: relative;
}

body:before{
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.5;
  background: radial-gradient(ellipse,#03A688,#020C0E)

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
