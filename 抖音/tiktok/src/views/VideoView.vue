<template>
  <div class="video">
    <van-swipe
      class="my-swipe"
      indicator-color="black"
      vertical
      @change="onChange"
    >
      <van-swipe-item v-for="(item, i) in dataList" :key="i">
        <div>
          <svg
            id="play"
            @click="playPause(item.id)"
            class="button1"
            aria-hidden="true"
            v-if="!pause"
          >
            <use xlink:href="#icon-bofang1"></use>
          </svg>
          <svg
            id="zanting"
            @click="playPause(item.id)"
            class="button"
            aria-hidden="true"
            v-else
          >
            <use xlink:href="#icon-zanting"></use>
          </svg>
          <div class="rightbar_warp">
            <right-bar @click="showComs"></right-bar>
          </div>
          <video
            class="videoplay"
            width="350"
            height="700"
            loop
            :id="item.id"
            preload="auto"
            webkit-playsinline="true"
          >
            <source :src="item.url" type="video/mp4" />
          </video>
        </div>
      </van-swipe-item>
    </van-swipe>
    <!-- 评论 -->
    <transition name="up">
      <div class="comment-warp-box" v-if="showComment">
        <div class="comment-warp">
          <div class="comment-list">
            <div class="comment-top">
              <div class="number">18.0w条评论</div>
              <div class="close" @click="close"><span>X</span></div>
            </div>
            <div class="comment-body">
              <div class="comment-box" v-for="(item, i) in comList" :key="i">
                <div class="comment-item">
                  <div class="user-pic">
                    <img src="../assets/img/6.jpg" alt="" />
                  </div>
                  <div class="item-info">
                    <div class="reply">
                      <p class="name">{{ item.name }}</p>
                      <p class="reply-des">
                        {{ item.des }}<span class="time">{{ item.time }}</span>
                      </p>
                    </div>
                    <div class="zan">
                      <svg class="icon0" aria-hidden="true">
                        <use xlink:href="#icon-dianzan"></use>
                      </svg>
                      <span class="iconfont icon-aixin"
                        ><p>{{ item.zan }}</p></span
                      >
                    </div>
                  </div>
                </div>
                <div class="sub-comment-item">
                  <div class="user-pic">
                    <img src="../assets/img/head.jpg" alt="" />
                  </div>
                  <div class="item-info">
                    <div class="reply">
                      <p class="name1">{{ item.name1 }}</p>
                      <p class="reply-des1">
                        <span>回复:</span>
                        <span class="re-name">{{ item.name }}</span>
                        <span>:{{ item.des1 }}</span>
                        <span class="time">{{ item.time1 }}</span>
                      </p>
                    </div>
                    <div class="zan">
                      <svg class="icon0" aria-hidden="true">
                        <use xlink:href="#icon-dianzan"></use>
                      </svg>
                      <span class="iconfont icon-aixin"
                        ><p>{{ item.zan1 }}</p></span
                      >
                    </div>
                  </div>
                </div>
                <div class="more">
                  ---------------展开{{ item.more }}条回复---------------
                </div>
              </div>
              <div class="comment-box" v-for="(item, i) in comList2" :key="i">
                <div class="comment-item">
                  <div class="user-pic">
                    <img src="../assets/img/head.jpg" alt="" />
                  </div>
                  <div class="item-info">
                    <div class="reply">
                      <p class="name">{{ item.name }}</p>
                      <p class="reply-des">
                        {{ item.des }}<span class="time">{{ item.time }}</span>
                      </p>
                    </div>
                    <div class="zan">
                      <svg class="icon0" aria-hidden="true">
                        <use xlink:href="#icon-dianzan"></use>
                      </svg>
                      <span class="iconfont icon-aixin"
                        ><p>{{ item.zan }}</p></span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 评论框 -->
          <div class="reply-input">
            <input type="text" placeholder="留下你的精彩评论" />
            <span class="emoji">@</span>
            <span class="iconfont icon-pinglun"
              ><svg class="icon1" aria-hidden="true">
                <use xlink:href="#icon-jijianfasong-xianxing"></use></svg
            ></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { reactive, toRefs, onUpdated, onMounted } from "vue";
import RightBar from "../components/RightBar.vue";
import { Toast } from "vant";
import axios from 'axios';
import store from "../store/index.js";
export default {
  components: {
    RightBar,
  },
  setup() {
    const state = reactive({
      showComment: store.state.showComment,
      pause: false,
      comList: [],
      comList2: [],
      dataList: [
        {
          id: "1",
          url: require("../assets/video/1.mp4"),
        },
        {
          id: "2",
          url: require("../assets/video/2.mp4"),
        },
        {
          id: "3",
          url: require("../assets/video/3.mp4"),
        },
        {
          id: "4",
          url: require("../assets/video/4.mp4"),
        },
        {
          id: "5",
          url: require("../assets/video/5.mp4"),
        },
        {
          id: "6",
          url: require("../assets/video/6.mp4"),
        },
        {
          id: "7",
          url: require("../assets/video/7.mp4"),
        },
        {
          id: "8",
          url: require("../assets/video/8.mp4"),
        },
        {
          id: "9",
          url: require("../assets/video/9.mp4"),
        },
        {
          id: "10",
          url: require("../assets/video/10.mp4"),
        },
        {
          id: "11",
          url: require("../assets/video/11.mp4"),
        },
        {
          id: "12",
          url: require("../assets/video/12.mp4"),
        },
        {
          id: "13",
          url: require("../assets/video/13.mp4"),
        },
      ],
    });
    const onChange = (index) => {
      //滑动轮播事件
      Toast("当前 Swipe 索引：" + index);
      console.log("正在播放" + parseInt(index + 1));
      if (index === state.dataList.length - 1) {
        playPause(state.dataList.length); //滑动到最后一个视频时
        stop(1);
        stop(state.dataList.length - 1);
      } else if (index === 0) {
        //滑动到第1个视频时
        playPause(1);
        stop(2);
        stop(state.dataList.length);
      } else {
        //正常滑动
        playPause(index + 1);
        stop(index);
        stop(index + 2);
      }
    };
    const playPause = (n) => {
      //暂停/开始
      let myVideo = document.getElementById(state.dataList[n - 1].id);

      if (myVideo.paused) {
        myVideo.play();
        state.pause = !state.pause;
      } else {
        myVideo.pause();
        state.pause = !state.pause;
      }
    };
    const stop = (n) => {
      //停止播放
      let myVideo = document.getElementById(state.dataList[n - 1].id);
      if (!myVideo.paused) {
        myVideo.load(); //load停止播放初始化
        state.pause = !state.pause;
      }
    };
    onMounted(()=>{
      axios.get("http://localhost:3000/api/user/comm1",{
        
      }).then(res=>{
       
        state.comList=res.data      
         console.log(state.comList)

      })
      axios.get("http://localhost:3000/api/user/comm2",{
        
      }).then(res=>{
       
        state.comList2=res.data      
         console.log(state.comList)

      })
    })
    const showComs = () => {
      state.showComment = true;
    };
    const close = () => {
      state.showComment = false;
    };
    return {
      ...toRefs(state),
      playPause,
      onChange,
      stop,
      showComs,
      close,
    };
  },
};
</script>

<style lang="less" scoped>
.video {
  overflow: scroll;
  .my-swipe {
    height: 800px;
    // overflow: scroll;
    .van-swipe-item {
      color: #fff;
      font-size: 20px;
      line-height: 380px;
      text-align: center;
      background-color: #000;
    }
  }
}

.videoplay {
  position: relative;
}

.button1 {
  position: absolute;
  z-index: 1000;
  margin-left: 28%;
  margin-top: 75%;
  box-sizing: border-box;
  width: 150px;
  height: 150px;
  fill: #fff;
  opacity: 0.5;
}
.button {
  position: absolute;
  z-index: 1000;
  // margin-left: 22%;
  margin-top: 50%;
  box-sizing: border-box;
  width: 360px;
  height: 360px;
  opacity: 0;
}
.rightbar_warp {
  position: absolute;
  z-index: 500;
}
/* 评论 */
.up-enter-active,
.up-leave-active {
  transition: all 0.5s;
}
.up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(100%);
}
.comment-warp-box {
  position: fixed;
  bottom: 0px;
  left: 0;
  height: 500px;
  width: 100%;
  background: #fff;
  z-index: 88;
}
.comment-warp {
  z-index: 10000000000;
  position: fixed;
  bottom: 60px;
  left: 0;
  height: 500px;
  width: 375px;
  margin: 0px 8px;
  background: #eee;
  // background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 999;
  padding: 10px 10px;
  box-sizing: border-box;
  overflow: auto;
}

.comment-top {
  display: flex;
  align-items: center;
}
.comment-box {
  margin-top: 20px;
}
.number {
  flex: 1;
  text-align: center;
  margin-left: 34px;
}
.close {
  padding-right: 10px;
  font-size: 30px;
  color: #666;
}
.comment-body {
  max-width: 450px;
  margin-top: 20px;
}
.comment-item {
  display: flex;
}
.user-pic img {
  width: 33px;
  height: 33px;
  border-radius: 50%;
}
.item-info {
  margin-left: 10px;
  display: flex;
  flex: 1 1 auto;
}
.reply {
  width: 90%;
}
.icon0 {
  width: 22px;
  fill: #666;
  height: 22px;
  margin-top: 5px;
}
.reply-des {
  line-height: 24px;
  text-align: left;
  margin-top: -8px;
}
.reply-des1 {
  line-height: 24px;
  margin-top: -8px;
  text-align: left;
}
.reply .name {
  font-weight: 900;
  color: #666;
  font-size: 14px;
  text-align: left;
  margin-top: 0px;
}
.reply .name1 {
  font-weight: 900;
  color: #666;
  font-size: 14px;
  text-align: left;
  margin-top: -1px;
}
.reply .time {
  color: #666;
  font-weight: 800;
}
.zan .iconfont {
  font-size: 20px;
  color: #ccc;
  margin: 0 10px;
}
.zan p {
  font-size: 6px;
  color: #666;
  margin-top: -18px;
  padding-left: 0px;
}
.sub-comment-item {
  display: flex;
  margin-left: 33px;
  margin-top: -6px;
}
.re-name {
  font-weight: 700;
  padding: 0 10px;
  color: #666;
}
.more {
  margin-left: 33px;
  margin-top: -9px;
}
.reply-input {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 375px;
  margin: 0px 8px;
  background: #eee;
  display: flex;
  align-items: center;
}
.reply-input input {
  margin-left: 10px;
  line-height: 40px;
  width: 70%;
  border: none;
  padding: 0 10px;
}
.reply-input .emoji {
  font-size: 30px;
  color: #ccc;
  margin-left: 12px;
}
.reply-input .iconfont {
  font-size: 26px;
  color: #ccc;
}

.icon1 {
  width: 30px;
  fill: #ccc;
  height: 30px;
  margin-top: 6px;
  margin-left: 9px;
}
</style>