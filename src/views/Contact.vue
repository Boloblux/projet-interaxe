<template>
  <div class="contact">
      <Header/>
        <div class="content">
            <img :src="require('@/assets/Contact.jpg')"/>
        </div>
      <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    name : 'Contact',
    components: {
        Header, Footer,
    },
}
</script>

<style scoped>
.contact {
	min-height:100vh;
	display:flex; 
	flex-direction:column;
}


img{
    width: 100%;
    text-align:center ;
    margin:auto ;
    display:flex ;
    flex-direction: column;
    gap: 2em;
}
</style>