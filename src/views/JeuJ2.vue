<template>
  <div class="jeuj2">
      <Header/>
      <div class="content">
            <div id="images">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" id="imagechange">
	                <image width="1920" height="1080" xlink:href="../assets/pièce1_2.png"></image>
                    <router-link to="/j2image1" target= '_blank'><rect id="clickzone" x="730" y="410" fill="#fff" opacity="0" width="205" height="140"/></router-link>
                    <router-link to="/j2image2" target= '_blank'><rect id="clickzone" x="1010" y="410" fill="#fff" opacity="0" width="215" height="140"/></router-link>
                    <a @click="leLivre()"><rect id="clickzone" x="900" y="560" fill="#fff" opacity="0" width="65" height="30"/></a>
                    <router-link to="/j2image4" target= '_blank'><rect id="clickzone" x="1640" y="655" fill="#fff" opacity="0" width="130" height="35"/></router-link>
                </svg>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" id="imagechange">
	                <image width="1920" height="1080" xlink:href="../assets/pièce1_3.png"></image>
                    <router-link to="/j2image5" target= '_blank'><rect id="clickzone" x="1000" y="620" fill="#fff" opacity="0" width="250" height="175"/></router-link>
                    <router-link to="/j2image6" target= '_blank'><rect id="clickzone" x="1250" y="367" fill="#fff" opacity="0" width="110" height="155"/></router-link>
                    <router-link to="/J2image6" target= '_blank'><rect id="clickzone" x="1375" y="360" fill="#fff" opacity="0" width="115" height="165"/></router-link>
                    <router-link to="/J2image7" target= '_blank'><rect id="clickzone" x="1505" y="355" fill="#fff" opacity="0" width="115" height="167"/></router-link>
                    <router-link to="/J2image6" target= '_blank'><rect id="clickzone" x="1645" y="350" fill="#fff" opacity="0" width="123" height="172"/></router-link>
                </svg>
            </div>
            <div><p class="enigme">Vous venez d'être enlevé par les cultistes. Vous et vos amis avez été séparé entraidez-vous. Pour vous échappez le plus rapidement possible. Creusez vous les méninges, fouiller partout vous devriez trouvez quelque chose.</p></div>
            <div class="reponse">
                <input id="zonetexte" type="text" minlength="3" maxlength="10" placeholder="Cadenas à 6 chiffres">
                <button id="bouton" v-on:click="myFunction()">VALIDER</button>
                <div id="indice">
                    <p id="textindice">UNLOCK</p>
                    <div id="hidden">
                        <img id="imgindice" :src="require('@/assets/planmaison.png')">
                        <input id="zonetexterep" type="text" minlength="3" maxlength="10" placeholder="Cadenas à 4 chiffres">
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
    name : 'JeuJ2',
    components: {
        Header, Footer,
    },
    methods: {
        myFunction: function () {
            if (document.getElementById("zonetexte").value==="130709"){
                document.getElementById("textindice").innerHTML = "VOICI LA SUITE"
                document.getElementById('hidden').style.visibility = "visible"
            }
        },
        myFonction: function () {
            if (document.getElementById("zonetexterep").value==="3776"){
                self.location.href="/#/fin"
            }
        },
        leLivre: function () {
            if (document.getElementById("zonetexte").value==="130709"){
                window.open('/#/j2image3', '_blank').focus();
            }
            else{
                window.alert("Il vous faut trouver le code à 6 chiffres pour déverouiller le livre");
            }
        }
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

button{
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

button:hover{
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
}

#clickzone{
    transition: .8s fill;
    fill: yellow;
}

#clickzone:hover{
    fill: yellow;
    opacity: 0.3;
}
</style>