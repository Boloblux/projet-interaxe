<template>
  <div class="jeuj1">
      <Header/>
      <div class="content">
            <div>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" >
	                <image width="1920" height="1080" xlink:href="../assets/pièce3.png"></image>
                    <rect id="clickzone" x="790" y="350" fill="#fff" opacity="0" width="275" height="350" onclick="alert('Ceci est une bannière')"/>
                </svg>
            </div>
            <div><p class="enigme">Salut c'est moi l'énigme <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat hendrerit mauris in scelerisque. Vivamus ac auctor lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ultricies, neque eget consectetur vehicula, lectus sapien luctus erat, quis placerat magna sapien nec erat. Praesent at erat tempor, elementum sem nec, lobortis nisl. Proin vestibulum, eros in dignissim mollis, lacus sapien pharetra nibh, a consequat risus risus eu enim. Integer semper felis sed est facilisis, sed scelerisque orci tincidunt. Pellentesque dignissim sem vel dui placerat mattis. Morbi interdum, quam nec porttitor ornare, nibh nibh blandit metus, quis volutpat ante metus sit amet tellus.</p></div>
            <div class="reponse">
                <input id="zonetexte" type="text" minlength="3" maxlength="10" placeholder="Taper la réponse">
                <button id="bouton" @click="myFunction()">VALIDER</button>
                <div id="indice">Indice</div>
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
        Header, Footer
    },
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

#indice{
    display: flex;
    align-items: center;
    justify-content: center;
    border: solid #0A3D44;
    border-radius: 0.3em;
    height: 3em;
}

#clickzone{
    transition: .6s fill;
    fill: #1A3940;
    opacity: 0%;
}

#clickzone:hover{
    fill: #0A3D44;
    opacity: 25%;
}
</style>