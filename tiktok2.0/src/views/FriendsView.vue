<template>
  <div class="friends">
    <top-bar2></top-bar2>
    <div class="msg-warp">
      <div class="msg-list-box">
        <div class="msg-list">
          <img src="../assets/img/h1.jpg" alt="" />
          <div class="user-des">
            <div class="top">
              <span>田野</span>
              <span class="chuo">戳一戳</span>
            </div>
            <div class="top top-mag">
              <span>1小时内在线</span>
            </div>
          </div>
        </div>
      </div>
      <div class="msg-list-box">
        <div class="msg-list">
          <img src="../assets/img/h2.jpg" alt="" />
          <div class="user-des">
            <div class="top">
              <span>可世界只有你啊</span>
              <span class="chuo">戳一戳</span>
            </div>
            <div class="top top-mag">
              <span>1小时内在线</span>
            </div>
          </div>
        </div>
      </div>
      <div class="msg-list-box">
        <div class="msg-list">
          <img src="../assets/img/h3.jpg" alt="" />
          <div class="user-des">
            <div class="top">
              <span>FJ&JT</span>
              <span class="chuo">戳一戳</span>
            </div>
            <div class="top top-mag">
              <span>昨天在线</span>
            </div>
          </div>
        </div>
      </div>
      <div class="msg-list-box">
        <div class="msg-list">
          <img src="../assets/img/h4.jpg" alt="" />
          <div class="user-des">
            <div class="top">
              <span>金木犀</span>
              <span class="chuo">戳一戳</span>
            </div>
            <div class="top top-mag">
              <span>Ta还没有关注我</span>
            </div>
          </div>
        </div>
      </div>
      <div class="msg-list-box">
        <div class="msg-list">
          <img src="../assets/img/h5.jpg" alt="" />
          <div class="user-des">
            <div class="top">
              <span>F</span>
              <span class="chuo">戳一戳</span>
            </div>
            <div class="top top-mag">
              <span>这是我的朋友圈❤</span>
            </div>
          </div>
        </div>
      </div>
      <div class="msg-list-box">
        <div class="msg-list">
          <img src="../assets/img/h6.jpg" alt="" />
          <div class="user-des">
            <div class="top">
              <span>传皮鞋的粉刷匠</span>
              <span class="chuo" @click="chuoyichuo">戳一戳</span>
            </div>
            <div class="top top-mag">
              <span>7天前在线</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import TopBar2 from "../components/TopBar2.vue";
import { Dialog } from "vant";
export default {
  components: {
    TopBar2,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.friends {
  height: 840px;
}
.msg-warp {
  padding: 0 20px;
  color: #fff;
  background-color: #101821;
  height: 900px;
}
.msg-list-box {
  padding-top: 30px;
}
.msg-list {
  display: flex;
  // padding: 10px 0;
  padding: 0px 0;
  margin: -10px 0;
}
.msg-list img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.user-des {
  flex: 1;
  height: 60px;
}
.user-des .top {
  font-size: 15px;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  line-height: 25px;
  font-weight: 900;
}
.chuo {
  width: 68px;
  background-color: #777;
  border-radius: 10%;
  font-size: 16px;
  color: black;
}
.top-mag {
  color: #999;
  align-items: center;
}
.no-see {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #face15;
}
</style>