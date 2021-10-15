<template>
  <div class="j1image2">
      <Header/>
        <div class="content">
            <p>Bravo tu as réussi !</p>
        </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name : 'J1Image2',
    components: {
        Header, Footer,
    },
}
</script>

<style scoped>
.j1image2 {
	min-height:100vh;
	display:flex; 
	flex-direction:column;
}

.content {
    margin: 2em 2em 2em;
    color: white;
    flex-grow: 1;
    justify-content: space-around;
}

.content div{
    margin: 2em 0 2em;
}

p{
    text-align: center;
    font-size: 4em;
}
</style>