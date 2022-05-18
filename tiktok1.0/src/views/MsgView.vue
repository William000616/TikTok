<template>
  <div class="message">
    <top-bar3></top-bar3>
    <div class="msg-warp">
      <div class="mag-nav">
        <div class="mag-nav-item">
          <div class="icon-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fensi"></use>
            </svg>
          </div>
          <p>粉丝</p>
        </div>
        <div class="mag-nav-item">
          <div class="icon-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon"></use>
            </svg>
          </div>
          <p>赞</p>
        </div>
        <div class="mag-nav-item">
          <div class="icon-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-aite"></use>
            </svg>
          </div>
          <p>@我的</p>
        </div>
        <div class="mag-nav-item">
          <div class="icon-box">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pinglun"></use>
            </svg>
          </div>
          <p>评论</p>
        </div>
      </div>
      
      <div class="msg-list-box">
        <div class="msg-list">
          <img src="../assets/img/h1.jpg" alt="" />
          <div class="user-des">
            <div class="top">
              <span>田野</span>
              <span>2分钟前</span>
            </div>
            <div class="top top-mag">
              <span>你是，我滴神！！</span>
              <span class="no-see"></span>
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
              <span>12：23</span>
            </div>
            <div class="top top-mag">
              <span>下课健身去吗，哥？</span>
              <span class="no-see"></span>
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
              <span>09：07</span>
            </div>
            <div class="top top-mag">
              <span>哥，我今天腹肌好酸啊</span>
              <span class="no-see"></span>
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
              <span>08：03</span>
            </div>
            <div class="top top-mag">
              <span>你这礼拜vue作业写了吗？</span>
              <span class="no-see"></span>
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
              <span>06：58</span>
            </div>
            <div class="top top-mag">
              <span>下礼拜我回千岛湖，你呢？</span>
              <span class="no-see"></span>
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
              <span>04：33</span>
            </div>
            <div class="top top-mag">
              <span>我今天又失眠了，最近压力真的好大啊</span>
              <span class="no-see"></span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import TopBar3 from '../components/TopBar3.vue'
export default {
  components: {
    
    TopBar3
  },
  
};
</script>

<style lang="less" scoped>
.message {
  height: 840px;
}
.msg-warp {
  padding: 0 20px;
  color: #fff;
  background-color: #101821;
  height: 900px;
}
.mag-nav {
  padding: 20px 5px;
  display: flex;
  justify-content: space-between;
}
.mag-nav-item {
  text-align: center;
  width: 60px;
}
.icon-box {
  width: 60px;
  height: 60px;
  background-color: red;
  border-radius: 5px;
  margin-bottom: 5px;
  .icon {
    fill: #fff;
    width: 40px;
    height: 40px;
    margin-top: 9px
  }
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