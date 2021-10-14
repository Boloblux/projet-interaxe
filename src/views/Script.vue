<template>
  <div class="script">
    <Header/>
    <div class="content">
      ICI YA LE SCRIPT ET TOUT
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name : 'Script',
  components: {
    Header, Footer
  }
}
</script>

<style scoped>
.script {
	min-height:100vh;
	display:flex; 
	flex-direction:column;
}
.content {
    margin: 5em 2em 2em;
    color: white;
    flex-grow: 1;
}
</style>