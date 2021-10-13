<template>
  <div id="header-wrapper">
    <div id="header">
      <h1 @click="increment">C'est le header {{ total }} </h1>
      <img alt="Logo" src="@/assets/logo.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      total :0
    }
  },
  methods: {
    increment() {
      this.total += 1;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
