<template>
  <div class="jeuj2">
      <Header/>
      <div class="content">
          <img :src="require('@/assets/pièce3.png')" alt = "Image Jeu">
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name : 'JeuJ2',
  components: {
    Header, Footer
  }
}
</script>

<style scoped>
.jeuj2 {
	min-height:100vh;
	display:flex; 
	flex-direction:column;
}
.content {
    margin: 2em 2em 2em;
    color: white;
    flex-grow: 1;
}
img{
  width: 100%;
}
</style>