<template>
  <div class="combo">
    <input type="text" :value="selectedData.name" @click.stop="dropDown" readonly><i></i>
    <ul :class="['combo-list', isShowList?'active':'']">
      <li v-for="item in listData" :key="item.id" @click.stop="checkItem(e,{id:item.id, name:item.name})">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    created: function(){
      this.$bus.on('rollup', this.rollUp);
    },
    data(){
      return {
        isShowList: false,
      }
    },
    props:['listData', 'selectedData'],
    methods:{
      checkItem:function(e,data){
        this.selectedData = data;
        this.isShowList = false;
      },
      dropDown: function(e){
        this.isShowList = !this.isShowList;
      },
      rollUp: function(){
        this.isShowList = false;
      }
    },
    computed:{
      
    }
  }
</script>
<style lang="scss" scoped>
  .combo{
    position: relative;
    display: inline-block;
    input {
      width: 180px;
      padding: 6px 20px 6px 12px;
      font-size: 14px;
      border-radius: 4px;
      border: 1px solid #e7e7e7;
      cursor: pointer;
    }

    &::after{
      content: "";
      position: absolute;
      transform: rotate(45deg);
      top: 12px;
      right: 10px;
      width: 6px;
      height: 6px;
      border: solid 1px #888;
      border: {
        top: none;
        left: none;
      }
    }

    .combo-list{
      position: absolute;
      display: none;
      top: 32px;
      background-color: #fff;
      padding: 0;
      border: 1px solid #e7e7e7;
      width: 180px;
      border-radius:4px;
      &.active{
        display: block;
      }
      li{
        line-height: 32px;
        font-size: 14px;
        padding: 0 12px;
        cursor: pointer;
        &:hover{
          background-color: rgb(233, 167, 120);
        }
      }
    }
  }
</style>
