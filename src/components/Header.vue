<template>
  <div id="header">
    <router-link to="/"><img class ="logo" :src="require('@/assets/logo.png')" alt = "Logo Vniverse Xprerience"></router-link>
    <div id="header-right">
      <a v-on:click="accesProtege()">Jouer </a>
      <router-link to="/boutique">Boutique </router-link>
      <router-link to="/contact">Contact </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    accesProtege: function () {
      var valeur = prompt("Pour déverrouiller la page de jeu rendez-vous sur Instagram dans notre story. Résolvez l’énigme elle vous servira de mot de passe Pour accéder à l'énigme si vous n'avez pas le mot de passe, appuyer sur valider (Le mot de passe est en minuscule)", "");
      if (valeur == "experience"){
        self.location.href="/#/jeu"
      }
      else {
        window.open('https://instagram.com/vniverse_xperience_game?utm_medium=copy_link', '_blank').focus();
      }
    }
	}
}
</script>

<style scoped>
#header {
  overflow: hidden;
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
