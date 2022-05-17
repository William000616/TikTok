<template>
    <div class="edit">
        <top-bar4></top-bar4>
        <div class="edit-warp">
           <div class="ava-box">
                <div class="avater">
                <img src="../assets/img/head.jpg" alt="">
                
                <span class="iconfont icon-xiangji"></span>
                <input type="file" >
                </div>
                <p>点击更换头像</p>
           </div>
        </div>
        <div class="edit-box">
            <div class="edit-item">
                <span class="label">名字</span>
                <span>麦当劳不捞<span class="icon">></span></span>
            </div>
            <div class="edit-item">
                <span class="label">抖音号</span>
                <span>William16886<span class="icon">></span></span>
            </div>
            <div class="edit-item">
                <span class="label">简介</span>
                <span>❤❤家人平安，其余锦上添花❤❤<span class="icon">></span></span>
            </div>
            <div class="edit-item">
                <span class="label">学校</span>
                <span>浙大城市学院<span class="icon">></span></span>
            </div>
            <div class="edit-item">
                <span class="label">性别</span>
                <span>男<span class="icon">></span></span>
            </div>
            <div class="edit-item">
                <span class="label">生日</span>
                <span>2000-06-16<span class="icon">></span></span>
            </div>
            <div class="edit-item">
                <span class="label">地区</span>
                <span>浙江 杭州<span class="icon">></span></span>
            </div>
           <div class="edit-item">
                <span class="label">头像挂件</span>
                <span>点击设置<span class="icon">></span></span>
            </div>
        </div>
    </div>
</template>
<script>
import TopBar4 from '../components/TopBar4.vue'
export default {
    components:{
        TopBar4
    },
    data(){
        return{
            // headerTitle:'编辑资料',
            // headerHasLeft:true
        }
    },
    methods:{
        toBack(){
            this.$router.push('/me')
        }
    }
}
</script>
<style scoped>
  .edit{
      height: 900px;
      background-color: #101821;
  }
  .edit-warp{
      padding: 0 10px;
      box-sizing: border-box;
  }
  .ava-box{
      color: #ccc;
      text-align: center;
      padding: 20px;
      
  }
  .avater{
      position: relative;
  }
  .avater img{
      height: 100px;
      width: 100px;
      border-radius: 50%;
      margin-bottom: 16px;
      opacity: .5;
  }
  .avater .iconfont{
      position: absolute;
      left: 50%;
      top: 50%;
      width: 50%;
      transform: translate(-50%,-50%);
      font-size: 26px;
      color:#fff;
  }
.avater input{
     position: absolute;
      left: 50%;
      top: 50%;
      width: 50%;
      transform: translate(-50%,-50%);
      opacity: 0;
}
.edit-box{
    margin: 0 10px;
    border-top: 1px #292821 solid;
    color: #ccc;
}
.edit-item{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
}
.edit-item .label{
    color: #fff;
}
.edit-item .icon{
    margin-left: 10px;
}
</style>