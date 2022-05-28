<template>
  <div class="right-bar">
    <!-- <div class="rightbar-item">
      <div class="avatar-border">
        <img src="../assets/img/1.jpg" alt="" />
        <span class="iconfont icon-jia"></span>
      </div>
    </div> -->
    <div class="item-icon">
      <div class="icon0">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-douyin-dianzan"></use>
        </svg>
      </div>
      <div class="zi"><p>99.0w</p></div>
    </div>
    <div class="item-icon" >
      <div class="icon0">
        <svg class="icon" aria-hidden="true" @click="Com">
          <use xlink:href="#icon-douyin-pinglun"></use>
        </svg>
      </div>
      <div class="zi"><p>18.0w</p></div>
    </div>
    <div class="item-icon">
      <div class="icon0">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-douyin-fenxiang"></use>
        </svg>
      </div>
      <div class="zi"><p>10.3w</p></div>
    </div>
    <div class="rightbar-item">
      <div class="right-music">
        <img src="../assets/img/1.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import store from "../store/index.js"
import { onMounted, reactive, toRefs,onBeforeUpdate } from "vue";
export default {
    setup() {
    const state = reactive({
      
    });
    const Com=()=>{
      store.state.showComment=true
      console.log(store.state.showComment)
    }
    return {
      ...toRefs(state),
      Com,
    };
  },
};
</script>
<style lang="less" scoped>
.right-bar {
  width: 80px;
  /* border: 1px red solid; */
}
.right-bar .rightbar-item {
  height: 60px;
  widows: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
}
.avatar-border {
  height: 50px;
  border: 1px #fff solid;
  border-radius: 50%;
  position: relative;
  text-align: center;
  margin-left: 570px;
  margin-top: 400px;
}
.zi {
  position: fixed;
  margin-left: 300px;
  margin-top: -420px;
}
p {
  margin: 20px 0;
}
/* .avatar-border img {
  width: 49px;
  height: 49px;
  border-radius: 50%;
} */
/* .avatar-border .icon-jia {
  font-size: 20px;
  color: #ef2c5a;
  position: absolute;
  top: 42px;
  left: 0;
  right: 0;
} */
.right-bar .item-icon {
  height: 60px;
  text-align: center;
  padding-top: 35px;
}
.icon0 {
  // position:relative
  margin-left: 288px;
  margin-top: 157px;
}
.icon {
  width: 60px;
  margin: 0 10px;
  fill: #fff;
}

.rightbar-item .right-music {
  position: fixed;
  margin-left: 576px;
  margin-top: 597px;
  height: 54px;
  width: 54px;
  background: #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: round 6s 0s linear infinite;
}
.right-music img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>