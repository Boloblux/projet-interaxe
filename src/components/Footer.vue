<template>
  <div id="footer">
    <div id="footer-right">
      <a href="https://www.tiktok.com/@vniverse_experiencegame"><img :src="require('@/assets/tiktok.png')" alt = "Logo Tiktok"></a>
      <a href="https://www.instagram.com/vniverse_xperience_game"><img :src="require('@/assets/instagram.png')" alt = "Logo Instagram"> </a>
      <a href="https://www.youtube.com/channel/UCckO_2hcQdhdnci7IEHUskg"><img :src="require('@/assets/youtube.png')" alt = "Logo Youtube"> </a>
    </div>
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
    border-top: solid #707070;
    padding: 1em;
    background-color: black;
    color: white;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: 'Alegreya Sans SC Regular';
    font-weight: normal;
}

#footer-right {
  float: right;
}

#footer-right a {
  float: left;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 25px;
  border-radius: 4px;
}
</style>
