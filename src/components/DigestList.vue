<template>
  <ul>
      <li v-for="item in digests" :key="item.id">
        <h3>{{blogTitle}}</h3>
        <p>{{blogDigest}}</p>
        <span>{{creatTime}}</span>
      </li>
  </ul>
</template>
<style lang="scss" scoped>

</style>
<script>
  import mapState from 'vuex'
  export default {
    data(){
      return {
        digests:[{blogTitle:"...", blogDigest:"...", creatTime:"...", id:"-1"}]
      }
    },
    computed: {
      ...mapState({
        curPage:state=>state.curPage,
        curLabel:state=>state.curLabel
      }),
      textData(){
        _this = this;
        this.axios.get('/api/digests', {
          params: {
            label:_this.curLabel,
            page:_this.curPage
          }
        }).then(function(res){
          console.log(res);

        })
      }
    }
  }
</script>