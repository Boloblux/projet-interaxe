<template>
  <div class="choixjoueur">
      <Header/>
      <div class="content">
        <div class="buttons">
            <router-link to="/jeuj1"><button>JE SUIS JOUEUR 1</button></router-link>
            <router-link to="/jeuj2"><button>JE SUIS JOUEUR 2</button></router-link>
        </div>
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name : 'Choixjoueur',
  components: {
    Header, Footer
  }
}
</script>

<style scoped>
.choixjoueur {
	min-height:100vh;
	display:flex; 
	flex-direction:column;
}
.content {
  margin: 5em 2em 2em;
  color: white;
  font-size: 1.3em;
  flex-grow: 1;
}

.buttons{
  display: flex ;
  justify-content: space-around;
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
</style>