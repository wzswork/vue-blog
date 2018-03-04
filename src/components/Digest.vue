<template>
  <ul>
      <li></li>
  </ul>
</template>
<style lang="scss" scoped>

</style>
<script>
  import mapState from 'vuex'
  export default {
    data: {

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