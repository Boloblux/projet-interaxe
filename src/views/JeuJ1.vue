<template>
  <div class="jeuj1">
      <Header/>
      <div class="content">
            <div id="images">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" id="imagechange">
	                <image width="1920" height="1080" xlink:href="../assets/pièce3.png"></image>
                    <router-link to="/j1image1" target= '_blank'><rect id="clickzone" x="790" y="350" fill="#fff" opacity="0" width="275" height="350"/></router-link>
                </svg>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" id="imagechange">
	                <image width="1920" height="1080" xlink:href="../assets/pièce3_2.png"></image>
                    <router-link to="/j1image2" target= '_blank'><rect id="clickzone" x="650" y="800" fill="#fff" opacity="0" width="150" height="75"/></router-link>
                </svg>
            </div>
            <div><p class="enigme">Vous venez d'être enlevé par les cultistes. Vous et vos amis avez été séparé entraidez-vous. Pour vous échappez le plus rapidement possible. Creusez vous les méninges, fouiller partout vous devriez trouvez quelque chose.</p></div>
            <div class="reponse">
                <input id="zonetexte" type="text" minlength="3" maxlength="10" placeholder="Cadenas 6 lettres majuscules">
                <button id="bouton" v-on:click="myFunction()">VALIDER</button>
                <div id="indice">
                    <p id="textindice">UNLOCK</p>
                    <div id="hidden">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" id="imagechange">
	                        <image width="1920" height="1080" xlink:href="../assets/pièce2_2.png"></image>
                            <router-link to="/j1image3" target= '_blank'><rect id="clickzone" x="865" y="705" fill="#fff" opacity="0" width="250" height="36"/></router-link>
                        </svg>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" id="imagechange">
	                        <image width="1920" height="1080" xlink:href="../assets/pièce2.png"></image>
                            <router-link to="/j1image4" target= '_blank'><rect id="clickzone" x="1215" y="335" fill="#fff" opacity="0" width="115" height="250"/></router-link>
                        </svg>
                        <input id="zonetexterep" type="text" minlength="3" maxlength="10" placeholder="Cadenas 4 chiffres">
                        <button id="bouton" v-on:click="myFonction()">VALIDER</button>
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
    name : 'JeuJ1',
    components: {
        Header, Footer,
    },
    methods: {
        myFunction: function () {
            if (document.getElementById("zonetexte").value==="CHLURJ"){
                document.getElementById("textindice").innerHTML = "VOICI LA SUITE"
                document.getElementById('hidden').style.visibility = "visible"
            }
        },
        myFonction: function () {
            if (document.getElementById("zonetexterep").value==="3776"){
                self.location.href="/#/fin"
            }
        },
    }
}
</script>

<style scoped>
.jeuj1 {
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

img{
  width: 100%;
}

#zonetexte{
    width: 100%;
    font-size: 1.3em;
    height: 2em;
    align-items: center;
    text-align: center;
    margin-bottom: 1em;
}

#zonetexterep{
    width: 100%;
    font-size: 1.3em;
    height: 2em;
    align-items: center;
    text-align: center;
    margin-bottom: 1em;
}

#bouton{
    background-color :#0A3D44;
    color: white;
    width: 100%;
    padding: 1em 1em;
    border: none;
    border-radius: 0.3em ;
    font-size: 1em;
    box-shadow: 0 6px 15px black;
    cursor: pointer;
}

#bouton:hover{
  background-color :#1A3940;
}

area{
    cursor: pointer;
}

#images{
    text-align:center ;
    margin:auto ;
    display:flex ;
    flex-direction: column;
    gap: 2em;
    width: 90%;
}

#indice{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid #0A3D44;
    border-radius: 0.3em;
    width: 100%;
    height: auto;
}

#hidden{
    visibility: hidden;
    width: 90%;
}

#clickzone{
    transition: .6s fill;
    fill: yellow;
}

#clickzone:hover{
    fill: yellow;
    opacity: 0.3;
}
</style>