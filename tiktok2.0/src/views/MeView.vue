<template>
  <div class="me">
    <div class="me-top" :style="bgPic">
      <div is-link @click="showPopup">
        <div class="menu-box">
          <div class="menu-icon"></div>
        </div>
      </div>
      <van-popup
        :show="show"
        position="right"
        :style="{
          height: '955px',
          width: '180px',
          background: '#111',
          margin: '-20px -21px 0 -30px',
        }"
      >
        <div class="pop">
          <div class="item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gouwuche"></use>
            </svg>
            <div>我的订单</div>
          </div>
          <div class="item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-qianbao"></use>
            </svg>
            <div>钱包</div>
          </div>
          <div class="item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-erweima"></use>
            </svg>
            <div>我的二维码</div>
          </div>
          <div class="item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-lishi"></use>
            </svg>
            <div>观看历史</div>
          </div>
          <div class="item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shijian"></use>
            </svg>
            <div>时间管理</div>
          </div>
          <div class="item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-diannao"></use>
            </svg>
            <div>创作者服务中心</div>
          </div>
          <div class="item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kaifangfuwu"></use>
            </svg>
            <div>开放服务</div>
          </div>
          <div class="item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gongyi"></use>
            </svg>
            <div>抖音公益</div>
          </div>
          <div class="item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-qingshaonian"></use>
            </svg>
            <div>青少年守护工具</div>
          </div>
          <div class="item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kefu"></use>
            </svg>
            <div>客服</div>
          </div>
          <div class="item">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shezhi"></use>
            </svg>
            <div>设置</div>
          </div>
        </div>
      </van-popup>
    </div>
    <div class="me-warp">
      <div class="me-content">
        <div class="info">
          <img src="../assets/img/head.jpg" @click="close" />
          <button class="btn">获赞183</button>
          <button class="btn">关注259</button>
          <button class="btn">粉丝127</button>
        </div>
        <div class="des">
          <div class="id"><h2>麦当劳不捞</h2></div>
          <span>抖音号：William16886</span>
          <hr />
          <p>❤❤家人平安，其余锦上添花❤❤</p>
        </div>

        <div class="user-tag">
          <span>21岁</span>
          <span>浙江 杭州</span>
          <span>浙大城市学院</span>
          <span>+</span>
        </div>

        <div class="me-ab">
          <router-link to="/edit"><span>编辑资料</span></router-link>
          <span>新朋友2</span>
        </div>
      </div>
      <div class="me-tab">
        <div class="me-navbar">
          <div
            class="item"
            @click="changeTab(0)"
            :class="indexTab == 0 ? 'active' : ''"
          >
            作品6
          </div>
          <div
            class="item"
            @click="changeTab(1)"
            :class="indexTab == 1 ? 'active' : ''"
          >
            私密1
          </div>
          <div
            class="item"
            @click="changeTab(2)"
            :class="indexTab == 2 ? 'active' : ''"
          >
            收藏4
          </div>
          <div
            class="item"
            @click="changeTab(3)"
            :class="indexTab == 3 ? 'active' : ''"
          >
            喜欢2
          </div>
        </div>
        <div class="wrap">
          <div class="tab-con">
            <div class="tab-img" v-show="indexTab === 0">
              <img src="../assets/img/1.jpg" alt="" />
              <img src="../assets/img/2.jpg" alt="" />
              <img src="../assets/img/3.jpg" alt="" />
            </div>
            <div class="tab-img" v-show="indexTab === 0">
              <img src="../assets/img/4.jpg" alt="" />
              <img src="../assets/img/5.jpg" alt="" />
              <img src="../assets/img/6.jpg" alt="" />
            </div>

            <div class="con" v-show="indexTab === 1">
              <div class="tab-img" v-show="indexTab === 1">
                <img src="../assets/img/10.jpg" alt="" />
              </div>
            </div>
            <div class="con" v-show="indexTab === 2">
              <div class="tab-img" v-show="indexTab === 2">
                <img src="../assets/img/7.jpg" alt="" />
                <img src="../assets/img/8.jpg" alt="" />
                <img src="../assets/img/9.jpg" alt="" />
              </div>
              <div class="tab-img" v-show="indexTab === 2">
                <img src="../assets/img/1.jpg" alt="" />
              </div>
            </div>
            <div class="con" v-show="indexTab === 3">
              <div class="tab-img" v-show="indexTab === 3">
                <img src="../assets/img/11.jpg" alt="" />
                <img src="../assets/img/12.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { ref } from "vue";
export default {
  setup() {
    const state = reactive({
      bgPic: {
        backgroundImage: "url(" + require("../assets/img/img22.jpeg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      },
      indexTab: 0,
    });
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    const changeTab = (index) => {
      state.indexTab = index;
    };
    const close = () => {
      show.value = false;
    };
    return {
      ...toRefs(state),
      changeTab,
      show,
      showPopup,
      close,
    };
  },
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: white;
}
hr {
  opacity: 0.4;
}
.me {
  // overflow: scroll;
  position: relative;
  .user-tag {
    display: flex;
  }
  .des {
    padding: 0;
  }

  .des .id {
    display: flex;
    margin: 0;
  }
  .des p {
    display: flex;
    padding: 0;
  }
  .des span {
    margin-top: -19px;
    display: flex;
    padding: 0;
    font-size: 14px;
  }
}
.me-top {
  height: 160px;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
}
.menu-box {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-icon {
  background: #fff;
  border-top: 2px #fff solid;
  border-bottom: 2px #fff solid;
  background-clip: content-box;
  width: 20px;
  height: 2px;
  padding: 5px 0;
}
.pop {
  padding: 20px 5px;
  //   display: flex;
  //   justify-content: space-between;
  color: white;
  .item {
    display: flex;
    width: 180px;
    height: 75px;
    align-items: center;
    .icon {
      width: 24px;
      margin: 0 10px;
      fill: #fff;
    }
  }
}
.me-warp {
  position: absolute;
  top: 120px;
  height: 900px;
  // overflow: scroll;
  width: 100%;
  background-color: #101821;
  color: #fff;
}
.me-content {
  padding: 0 20px;
}
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-right: 20px;
}
.info button {
  height: 40px;
  padding: 0 20px;
  background-color: #393842;
  border: none;
  color: #fff;
}
.des {
  padding: 20px 0;
}
.des h2 {
  font-size: 24px;
  font-weight: bold;
}
.des span {
  padding: 10px 0 15px 0;
  display: block;
}
.user-tag span {
  font-size: 10px;
  color: #fff;
  margin-right: 5px;
  background: #777;
  padding: 5px 8px;
}
.user-tag2 {
  padding: 20px 0;
}
.user-tag2 a {
  margin-right: 14px;
  color: #fff;
}
.me-ab {
  text-align: center;
  padding: 10px 0px;
  border-radius: 4px;
  margin: 10px;
  span {
    width: 80px;
    background: #999;
    text-align: center;
    padding: 10px 46px;
    margin: 2px;
    border-radius: 4px;
  }
}
.me-tab {
  height: 300px;
}
.me-navbar {
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
}
.me-navbar .item {
  // width: 60px;
  padding: 10px 20px;
  color: #fff;
}
.me-navbar .active {
  border-bottom: 2px #ffdf0e solid;
  color: #fff;
}
.tab-img img {
  width: 33.3%;
  height: 210px;
}
.tab-img {
  overflow: scroll;
  margin: 6px 2px;
  display: flex;
}
</style>
