<template>
  <div class="back">
    <login-window v-if="showLogin"></login-window>
    <div class="main">
      <h1 class="head">
        石头楼
        <span :class="['operation',loginStatus?'add':'login']" @click="operate">{{operation}}</span>
      </h1>
      <div class="menu clearfix">
        <ul>
          <li class="active">首页</li>
          <li>文章</li>
          <li>小demo</li>
        </ul>
      </div>
      <div class="content clearfix">
        <div class="content-left">
          <!-- <digest></digest> -->
        </div>
        <div class="content-right">
          <side-bar></side-bar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sideBar from './SideBar'
import loginWindow from './LoginWindow'

export default {
  created () {
    var _this = this;
    this.axios.get('/api/labels')
    .then(function(res){
      console.log(1)
      console.log(res);
      _this.$store.commit("setLabels", res.data)
    })
  },
  data () {
    return {
      showLogin: false
    }
  },
  computed:{
    loginStatus: function(){return this.$store.state.loginStatus},
    operation: function(){return this.loginStatus?"写文章":"登录"}
  },
  watch:{
    loginStatus: function(newLoginStatus, oldLoginStatus){
      if(!oldLoginStatus && newLoginStatus){
        this.showLogin = false
      }
      return newLoginStatus
    }
  },
  methods:{
    operate: function(e){
      if(!this.loginStatus){
        this.showLogin = true;
      }else{
        this.$router.push('/editor');
      }
    }
  },
  components:{
    sideBar,
    loginWindow
  }
}
</script>

<style lang="scss" scoped>
  .back{
    height: 100%;
  }
  .main{
    margin: 0 auto;
    width: 1280px;
  }
  @media screen and (max-width: 1281px){
    .main{
      width: 100%;
    }
  }
  .head{
    position: relative;
    margin: 0;
    line-height: 100px;
    .operation{
      position: absolute;
      top: 50px;
      right: 20px;
      display: block;
      height: 20px;
      line-height: 20px;
      padding-left: 24px;
      background: {
        size: 20px 20px;
        repeat: no-repeat;
      }
      font-size: 14px;
      cursor: pointer;
      &.login{
        background-image: url('../images/home/login.png');
      }
      &.add{
        background-image: url('../images/home/edit.png');
      }
    }
  }
  .menu{
    background: rgba($color: #fff, $alpha: .6);
    border-radius: 8px;
    li{
      position: relative;
      padding: 7px 18px; 
      line-height: 32px;
      float: left;
      font-size: 18px;
      color: #666;
      cursor: pointer;
      &:hover{
        color: burlywood;
      }
      &.active{
        color: saddlebrown;
      }
    }
    li+li:before{
      position: absolute;
      content: "";
      left: 0;
      top: 10px;
      width: 2px;
      border-radius: 4px;
      height: 22px;
      background-color: #888;
      opacity: .3;
    }
  }
  .content{
    margin-top: 10px;
    width: 100%;
    .content-left{
      float: left;
      width: 80%;
      height: 100%;
      background: rgba($color: #fff, $alpha: .7);
      border-radius: 8px 0 0 8px;
    }
    .content-right{
      float: right;
      width: 20%;
      background: rgba($color: #fff, $alpha: .7);
      border-radius: 0 8px 8px 0;
    }
    @media screen and (max-width: 240px) {
      .content-left, .content-right{
        float: none;
        width: 100%;
      }
    }
  }
</style>

