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
  </div>
</template>

<script>
import { reactive, toRefs, onUpdated, onMounted } from "vue";

import { Toast } from "vant";
export default {

  setup() {
    const state = reactive({
      pause: false,
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
    return {
      ...toRefs(state),
      playPause,
      onChange,
      stop,
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
</style>