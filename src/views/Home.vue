<template>
  <div class="home">
    <Header/>
    <div class="content">
      <div class="image">
        <img :src="require('@/assets/XV logo.svg')" alt = "Gros Logo">
      </div>
      <div class="escape">
        <div>
          <h1>I - L'escape Game</h1>
          <p>Entrez dans un escape game interactif mêlant réalité, réseaux sociaux et univers web. Vous serez plongé dans l'univers de Cthulhu et bien plus encore.  Il vous sera possible de choisir parmi différent scénarios. Vous choisirez un maître scénariste (game master) parmi vos amis qui vous guidera pour la mise en place du scénario. Vous pourrez aussi utiliser des décors spécifiques à chaque scénarios disponibles dans notre boutique ou utiliser votre propre décor pour que l'expérience soit totale.</p>
          <button v-on:click="accesProtege()">Découvrir</button>
        </div>
        <div></div>
        <div>
          <img :src="require('@/assets/horror.png')" alt = "Ambiance">
        </div>
      </div>
      <div class="univers">
        <h1>II - L'univers de Cthulhu</h1>
        <div id="universtext">
          <img :src="require('@/assets/cthulhu.png')" alt = "Cthulhu">
          <p>Le mythe de Cthulhu raconte qu'avant la préhistoire, la Terre était dominée par les Grands Anciens, des puissances astrales qui faisaient l'objet de culte dans les premières civilisations humaines. Quand la conjonction astrale sera propice, ces puissances extraterrestres sortiront de leur sommeil mortifère et arracheront la Terre aux hommes.
Cthulhu est le dieu perverti de l'eau. C'est une puissance extraterrestre, partie intégrante de la cosmogonie créée par Lovecraft et ses alter egos. Prisonnier sur Terre, endormi dans la cité de R´lyeh, Cthulhu attend son réveil. Cthulhu fait partie des Grands Anciens, au même titre que Dagon, Hastur, Ithaqua et Cthugha. Le maître des Grands Anciens est Azathoth.</p>
        </div>
      </div>
      <div class="qui">
        <h1>III - Qui sommes-nous ?</h1>
        <div id="quitext">
          <img :src="require('@/assets/image1.png')" alt = "Ambiance">
          <div id="quicomponent">
            <p>9 passionnés d'escape game souhaitant vous faire vivre une expérience hors du commun. <br/><br/>

Marie Wajsblat | Jérémie Thomas | Florent Quintin | Debralyne Dikita | Aurélien Samier | Thibault pommerolle | Jeanne CABON | Suhayl muhammad Balladin | Alycia Ait Meddour</p>
            <router-link to="/contact"><button>Nous contacter</button></router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name : 'Home',
  components: {
    Header, Footer
  },
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
.home {
	min-height:100vh;
	display:flex; 
	flex-direction:column;
}
.content {
  margin: -2em 3em 2em;
  color: white;
}

button{
  background-color :#0A3D44;
  color: white;
  padding: 0.3em 2.3em;
  border: none;
  border-radius: 0.3em ;
  font-size: 0.9em;
  box-shadow: 0 6px 15px black;
  cursor: pointer;
}

button:hover{
  background-color :#1A3940;
}

.image{
  display: flex ;
  justify-content: center;
}

.image img{
  margin-right: 3em;
  min-width: 50%;
  width: 75%;
  height: auto;
}

.escape{
  width: 100%;
  display: inline-grid;
  grid-template-columns: 60% 5% 35%;
  justify-content: space-around;
  align-items: center; 
  margin: 2em 0;
}

.escape img{
  width: 100%;
}

.univers{
  margin: 2em 0;
}

#universtext{
  position: relative;
  text-align: center;
}

#universtext img{
  width : 100%;
  z-index: -1;
}

#universtext p{
  position: absolute;
  top: 0%;
  left: 65%;
  margin-right: 2%;
}

/*#universtext{
  background-size: cover;
  background-image: url('../assets/cthulhu.png');
  background-origin: border-box;
  background-repeat: no-repeat;
  height: 0;
  padding-top: 37.54%;
}*/

.qui{
  margin: 2em 0;
}

#quitext{
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  grid-auto-rows: auto;
}

#quitext img{
  width: 70%;
  grid-column: 1 / 5;
  grid-row: 1 / 6;
}

#quicomponent{
  background-color: rgba(73, 153, 160, 0.5);;
  padding: 2em;
  grid-column: 3 / 7;
  grid-row: 2 / 10;
}

#quitext p{
  color: white;
  text-align: left;
}

@media only screen and (max-width: 934px){
  .escape{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }

  .escape img{
  width: 70%;
  margin-top: 2em;
  }

  #universtext p{
  position: relative;
  left: 0;

  }
}

</style>