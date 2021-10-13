<template>
  <div id="header">
    <router-link to="/"><img class ="logo" :src="require('@/assets/logo.png')" alt = "Logo Vniverse Xprerience"></router-link>
    <div id="header-right">
      <router-link to="/jeu">Jouer </router-link>
      <router-link to="/boutique">Boutique </router-link>
      <router-link to="/contact">Contact </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>

<style scoped>
#header {
  overflow: hidden;
  font : helvetica ;
  padding: 1.5em 3em;
}

#header .logo {
  width: 5em;
  height: auto;
}

#header-right a {
  float: left;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}

#header-right a:hover {
  background-color: #ddd;
  color: black;
}

#header-right a.active {
  background-color: dodgerblue;
  color: white;
}

#header-right {
  float: right;
}
</style>
