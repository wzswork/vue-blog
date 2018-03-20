<template>
  <div id="app" @click="rollUp()">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    var _this = this;
    this.axios.get('/api/labels')
    .then(function(res){
      console.log(1)
      console.log(res);
      _this.$store.commit("setLabels", res.data)
    })
  },
  methods:{
    rollUp:function(){
      this.$bus.emit('rollup')
    }
  }
}
</script>

<style>
body{
  background: url(./images/home/back-1.png);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
