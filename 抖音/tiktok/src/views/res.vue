<template>
  <div class="sign">
    <div class="sign-header">
      <router-link to="/me" tag="span" class="icon">X</router-link>
      <span>帮助</span>
    </div>
    <div class="sign-content">
      <div class="des">
        <h2>账号注册</h2>
      </div>
      <div class="sign-box">
        <div class="inp">
          <input
            type="text"
            
            v-model="username"
            class="inp-controll"
            placeholder="请输入账号"
          />
        </div>
      </div>
      <div class="sign-box">
        <div class="inp">
          <input
            
            type="password"
            v-model="password"
            class="inp-controll"
            placeholder="请输入密码"
          />
        </div>
      </div>
      <div class="not-sign">
        <p>注册即表明同意<a href="">抖音协议</a>和<a href="">隐私政策</a></p>
      </div>
      <div class="code-btn">
        <button
          
          class=btnBg
          @click="res"
        >
          注册
        </button>
      </div>
      <div class="other">
        <span>已有账号?<router-link to="/sign">马上登录</router-link></span>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import axios from "axios";
import {useRouter} from "vue-router"
export default {
  setup() {
    const router=useRouter();
    const state = reactive({
      username: "",
      password: "",  
    });
    const res =()=>{
       if (state.username == ""){
         console.log("账号不能为空")
       }else if (state.password == ""){
         console.log("密码不能为空")
       }else{
        //  console.log(state)
         axios.post("http://localhost:3000/api/user",{
           username : state.username,
           password : state.password
         }).then(res=>{
           console.log(res.data)
           console.log("注册成功，请登录！！")
           router.push("/sign")
         })
       }
       
    }
    
    return {
      ...toRefs(state),
      res
    };
  },

};
</script>
<style scoped>
a {
  text-decoration: none;
  color: black;
}
.sign {
  /* background-color:#222; */
  padding: 30px;
  height: 900px;
}
.sign-header {
  display: flex;
  justify-content: space-between;
}
.sign-header .icon {
  font-size: 25px;
}
.sign-content {
  padding: 40px 10px;
  margin-top: 64px;
}
.des {
  margin-bottom: 30px;
}
.des h2 {
  font-size: 24px;
  font-weight: bold;
}
.des p {
  line-height: 50px;
  color: #666;
}
.des p a,
.not-sign p a {
  color: #628dbb;
  text-decoration: none;
  /* padding: 0 5px; */
}
.sign-box {
  display: flex;
  height: 50px;
  align-items: center;
  background: #f9f9f9;
  margin-top: 12px;
}
.sele-controll {
  background-color: #f9f9f9;
  height: 36px;
  font-weight: bold;
  margin-left: 5px;
  border: none;
}

.inp-controll {
  height: 36px;
  background-color: #f9f9f9;
  border: none;
  width: 150%;
  margin-left: 10px;
}
.input {
  caret-color: #fe2c55;
}
.input::-webkit-input-placeholder {
  color: #ccc;
}
.not-sign p {
  color: #ccc;
  font-size: 14px;
  margin-top: 10px;
}
.code-btn button {
  margin: 20px 0;
  width: 100%;
      height: 54px;
  background: #fe2c55;
  border: none;
  color: #FFF;
}
.code-btn  {
  color: #fff;
  /* background: #fe2c55; */
}
.other {
  display: flex;
  justify-content: space-between;
}
.other a {
  color: #628db8;
}
</style>