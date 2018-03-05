<template>
  <div class="sidebar">
    <ul>
      <li v-for="item in labels" :key="item.id">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  computed: {
    labels: function(){
      return this.$store.state.labels
    } 
  }
}
</script>
<style lang="scss" scoped>
  .sidebar{
    padding: 30px 16px;

    li{
      padding: 8px 16px;
      color: #555;
      cursor: pointer;
      &:hover{
        color: burlywood
      }
    }
  }
</style>


