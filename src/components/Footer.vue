<template>
  <div id="footer">
    <div id="footer-right">
      <router-link to="/jeu"><img :src="require('@/assets/instagram.png')" alt = "Logo Instagram"></router-link>
      <router-link to="/boutique">Boutique </router-link>
      <router-link to="/contact">Contact </router-link>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
    border-top: solid #707070;
    padding: 1em;
    background-color: black;
    color: white;
    text-align: center;
    font-family: 'Alegreya Sans SC Regular';
    font-weight: normal;
}

#footer-right {
  float: right;
}

#footer-right a {
  float: left;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}
</style>
