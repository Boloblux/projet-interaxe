<template>
  <div class="jeu">
      <Header/>
      <div class="content">
      </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name : 'Jeu',
  components: {
    Header, Footer
  }
}
</script>

<style scoped>
.jeu {
	min-height:100vh;
	display:flex; 
	flex-direction:column;
}
.content {
  flex-grow: 1;
}
</style>