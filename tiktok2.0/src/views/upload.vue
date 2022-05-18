<template>
  <div class="upload">
    <div class="pub-top">
      <div class="back">
        <span @click="$router.go(-1)">X</span>
      </div>
      <div class="suoyou"><span>所有照片</span></div>
      <div class="rightbtn">
        <span @click="toNext">下一步</span>
      </div>
    </div>
    <div class="upload-tab">
      <div class="nav-bar">
        <div
          class="item"
          @click="changeTab(0)"
          :class="indexTab == 0 ? 'active' : ''"
        >
          视频
        </div>
        <div
          class="item"
          @click="changeTab(1)"
          :class="indexTab == 1 ? 'active' : ''"
        >
          图片
        </div>
      </div>
      <div class="tab-wrap">
        <div class="tab-con" v-show="indexTab === 0">
          <div class="file-btn">
            <a class="btn"> <input type="file" class="hide" />更多视频 </a>
          </div>
          <div class="tab-video" v-for="(item, index) in dataList" :key="index">
            <div class="tab-v"><video :src="item.url"></video></div>
          </div>
        </div>
        <div class="tab-con" v-show="indexTab === 1">
          <div class="file-btn">
            <a class="btn"> <input type="file" class="hide" />更多图片 </a>
          </div>
          <div class="tab-img-box">
            <div class="tab-img">
              <img src="../assets/img/2.jpg" />
            </div>
            <div class="tab-img">
              <img src="../assets/img/4.jpg" />
            </div>
            <div class="tab-img">
              <img src="../assets/img/6.jpg" />
            </div>
            <div class="tab-img">
              <img src="../assets/img/8.jpg" />
            </div>
            <div class="tab-img">
              <img src="../assets/img/5.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 发布填信息 -->
    <div class="edit-pub" v-if="editShow">
      <div class="text-warp">
        <my-head></my-head>
        <div class="text-box">
          <div class="text-contr">
            <textarea
              cols="30"
              rows="5"
              placeholder="写标题并使用相关话题，能让更多人看到"
            ></textarea>
            <button>#话题</button>
            <button>@好友</button>
          </div>
          <div class="sele-img">
            <img src="../assets/img/1.jpg" alt="" />
          </div>
        </div>
        <div class="edit-box">
          <div class="edit-item">
            <span class="label"> <span></span>位置 {{ path }}</span>
            <span>浙大城市学院<span class="icon">></span></span>
          </div>
          <div class="edit-item">
            <span class="label"> <span></span> 谁可以看</span>
            <span>公开<span class="icon">></span></span>
          </div>
        </div>
        <div class="pub-save">
          <button class="lg-btn save-btn">草稿</button>
          <router-link to="/first"
            ><button class="lg-btn p-btn" @click="pub">
              发布
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import MyHead from "../components/MyHead.vue";
export default {
  components: {
    MyHead,
  },
  setup() {
    const state = reactive({
      editShow: false,
      path: "",
      indexTab: 0,
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
      ],
    });
    const changeTab = (index) => {
      state.indexTab = index;
    };
    const toNext = () => {
      state.editShow = true;
    };
    const pub = () => {
      console.log("发布成功！");
    };
    return {
      ...toRefs(state),
      changeTab,
      toNext,
      pub,
    };
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
  /* color: white; */
}
.suoyou {
  margin-left: 156px;
}

.pub-top {
  height: 44px;
  line-height: 44px;
  display: flex;
  justify-content: center;
  color: #000;
  font-size: 16px;
  position: relative;
}
.back {
  position: absolute;
  left: 10px;
}
.back span {
  font-size: 28px;
}
.upload-tab .nav-bar {
  display: flex;
  align-items: center;
}
.upload-tab .nav-bar .item {
  width: 50%;
  text-align: center;
  padding: 14px 0;
}
.upload-tab .nav-bar .active {
  border-bottom: 2px #f4cb18 solid;
}
.tab-con {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}
.tab-video {
  width: 25%;
}
.tab-video video {
  height: 160px;
}
.file-btn {
  position: fixed;
  bottom: 60px;
  left: 20px;
}
.file-btn .btn {
  outline: none;
  background-color: #fff;
  border: 1px #ccc solid;
  padding: 12px 20px;
  border-radius: 30px;
  box-shadow: 3px 3px 3px #ccc;
  margin-left: 123px;
}
.file-btn .btn .hide {
  width: 80px;
  opacity: 0;
  position: absolute;
}
.tab-img-box {
  display: flex;
  flex-wrap: wrap;
}
.tab-img-box .tab-img {
  width: 25%;
  position: relative;
}
.tab-img-box .tab-img img {
  width: 100%;
  height: 160px;
}
.tab-img-box .tab-img .sel-icon {
  position: absolute;
  top: 5%;
  color: #fff;
  width: 20px;
  text-align: center;
  right: 10px;
  border-radius: 50%;
  height: 20px;
  border: 1px #ccc soild;
  background: rgba(0, 0, 0, 0.3);
}
/*  */
.edit-pub {
  background: #161824;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  color: #fff;
}
.text-warp {
  padding: 0 10px;
  box-sizing: border-box;
}
.text-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px #282a36 solid;
}
.text-contr {
  width: 80%;
}
.text-contr textarea {
  background: #161824;
  border: none;
  font-size: 16px;
  color: #fff;
}
.text-contr button {
  border-radius: 4px;
  background: #3a3a44;
  border: none;
  padding: 8px 12px;
  margin-right: 10px;
}
.sele-img img {
  height: 172px;
  width: 100px;
  margin-right: 10px;
}
.edit-item {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  margin: 0 10px;
}
.edit-item .label {
  color: #fff;
}
.edit-item .icon {
  margin-left: 10px;
}
.pub-save {
  position: fixed;
  bottom: 40px;
  width: 100%;
  padding: 0 10px;
}
.pub-save .lg-btn {
  border: none;
  width: 44%;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 900;
}
.pub-save .save-btn {
  margin-right: 3%;
  background-color: #fff;
  margin-left: -44px;
  font-size: 18px;
  font-weight: 900;
}
.pub-save .p-btn {
  background-color: #fe2b54;
}
.rightbtn {
  margin-left: 99px;
  background: #fe2b54;
  color: #eeeeee;
  border-radius: 14px;
  padding: 0 3px;
}
</style>