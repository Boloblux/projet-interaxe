<template>
  <div class= "app">
    <router-view/>
  </div>
</template>

<script>

</script>


<style>
@font-face {
    font-family: 'Ringbearer Medium';
    font-style: normal;
    font-weight: normal;
    src: local('Ringbearer Medium'), url('../src/assets/fonts/RINGM___.woff') format('woff');
}
@font-face {
    font-family: 'Alegreya Sans SC Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Alegreya Sans SC Regular'), url('../src/assets/fonts/AlegreyaSansSC-Regular.woff') format('woff');
}

body {
  height : 100% ;
  margin : 0;
  font-family: 'Alegreya Sans SC Regular';
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: transparent no-repeat url("../src/assets/texture.jpg") 0% 100% padding-box;
  position: relative;
}

body:before{
  content: '';
  position: absolute;
  z-index: -1000;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.8;
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

h1{
  font-family: 'Ringbearer Medium';
  font-weight:normal;
  font-size:2em;
}

p{
  font-family: 'Alegreya Sans SC Regular';
  font-weight: normal;
  font-size: 0.9em;
}

button{
  font-family: 'Alegreya Sans SC Regular';
  font-weight: normal;
}
</style>
