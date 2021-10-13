<template>
  <div class="home">
    <Header/>
    <div class="content">
      <div class="image">
        <img :src="require('@/assets/logobig.png')" alt = "Gros Logo">
      </div>
      <div class="escape">
        <div>
          <h1>I - L'escape Game</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat hendrerit mauris in scelerisque. Vivamus ac auctor lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ultricies, neque eget consectetur vehicula, lectus sapien luctus erat, quis placerat magna sapien nec erat. Praesent at erat tempor, elementum sem nec, lobortis nisl. Proin vestibulum, eros in dignissim mollis, lacus sapien pharetra nibh, a consequat risus risus eu enim. Integer semper felis sed est facilisis, sed scelerisque orci tincidunt. Pellentesque dignissim sem vel dui placerat mattis. Morbi interdum, quam nec porttitor ornare, nibh nibh blandit metus, quis volutpat ante metus sit amet tellus.</p>
          <router-link to="/jeu"><button>Découvrir</button></router-link>
        </div>
        <div>
          <img :src="require('@/assets/horror.jpg')" alt = "Ambiance">
        </div>
      </div>
      <div class="univers">
        <h1>II - L'univers de Cthulhu</h1>
        <div id="universtext">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat hendrerit mauris in scelerisque. Vivamus ac auctor lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam ultricies, neque eget consectetur vehicula, lectus sapien luctus erat, quis placerat magna sapien nec erat. Praesent at erat tempor, elementum sem nec, lobortis nisl. Proin vestibulum, eros in dignissim mollis, lacus sapien pharetra nibh, a consequat risus risus eu enim. Integer semper felis sed est facilisis, sed scelerisque orci tincidunt. Pellentesque dignissim sem vel dui placerat mattis. Morbi interdum, quam nec porttitor ornare, nibh nibh blandit metus, quis volutpat ante metus sit amet tellus.</p>
        </div>
      </div>
      <div class="qui">

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
}
</script>

<style scoped>
.home {
	min-height:100vh;
	display:flex; 
	flex-direction:column;
}
.content {
  /*margin: -2em 2em 2em;*/
  color: white;
}

.content div{
  /*margin: 1em;*/
}

h1{
  font-size: 2em;
}

p{
  font-size: 0.9em;
}

.image{
  display: flex ;
  justify-content: center;
}

.image img{
  min-width: 50%;
  width: 75%;
  height: auto;
}

.escape{
  width: 100%;
  display: inline-grid;
  grid-template-columns: 65% 35%;
  justify-content: space-between;
  align-items: center; 
}

.escape button{
  background-color :#0A3D44;
  color: white;
  padding: 0.3em 2.3em;
  border: none;
  border-radius: 0.3em ;
  font-size: 0.9em;
  box-shadow: 0 6px 15px black;
  cursor: pointer;
}

.escape button:hover{
  background-color :#1A3940;
}

.escape img{
  width: 100%;
}

.univers{

}

#universtext{
  background-size: cover;
  background-image: url('../assets/cthulhu.png');
  background-origin: border-box;
  background-repeat: no-repeat;
  height: 0;
  padding-top: 37.54%;
}

@media only screen and (max-width: 768px){
  .escape{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  }

  .escape img{
  width: 70%;
  }
}

</style>