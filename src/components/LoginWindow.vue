<template>
  <div class="login-wrapper">
    <form>
      <ul>
        <li><span>{{msg}}</span><input type="text" id="user" v-model="user" placeholder="请输入用户名"></li>
        <li><input type="password" id="pwd" v-model="pwd" placeholder="请输入密码"></li>
        <li><button @click="login">登录</button></li>
      </ul>
    </form>
  </div>
</template>
<script>
export default {
  data:function(){
    return{
      user:"",
      pwd:"",
      msg:""
    }
  },
  methods: {
    login:function(e){
      let _this = this;
      // this.axios.get('/api/login')
      // .then(function(res){
      //   if(res.data.status == 200){
      //     _this.$store.commit('login', true)
      //   }else{
      //     _this.msg = res.data.msg;
      //   }
      // })
      // .catch(function(err){
      //   _this.msg = "登录出错，请联系管理员或重试"
      // })
      this.$store.commit('login', true);
    }
  }
}
</script>
<style lang="scss" scoped>
  .login-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    z-index: 100;
    form {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%);
      padding: 30px 40px;
      border-radius: 16px;
      background-color: #fff;
      z-index: 101;
      span{
        position: absolute;
        top: 30px;
        left: 40px;
        color: #ff0000;
        font-size: 12px;
      }
      input {
        width: 200px;
        padding: 8px 8px;
        border-radius: 4px;
        border: solid #888 1px;
        color: #555;
        margin-top: 20px;
        &:focus{
          outline: none;
        }
      }
      button {
        width: 216px;
        margin-top: 20px;
        background-color: burlywood;
        line-height: 32px;
        border-radius: 4px;
        border: solid burlywood 1px;
        cursor: pointer;
        font-size: 18px;
      }
    }
  }
</style>
