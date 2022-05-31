<template>
  <div class="edit">
    <top-bar4></top-bar4>
    <div class="edit-warp">
      <div class="ava-box">
        <div class="avater">
          <img :src="url" alt="" />

          <span class="iconfont icon-xiangji"></span>
          <input type="file" />
        </div>
        <p>
          <!-- <input
            type="file"
            id="file"
            class="hide"
            @change="change"
          />点击更换头像 -->
          <van-uploader :after-read="afterRead" id="file" class="hide" />点击更换头像
        </p>
      </div>
    </div>
    <div class="edit-box">
      <div class="edit-item">
        <span class="label">名字</span>
        <span><input v-model="nickname" class="put" /><span class="icon">></span></span>
      </div>
      <div class="edit-item">
        <span class="label">抖音号</span>
        <span><input v-model="cardId" class="put" /><span class="icon">></span></span>
      </div>
      <div class="edit-item">
        <span class="label">简介</span>
        <span><input v-model="des" class="put" /><span class="icon">></span></span>
      </div>
      <div class="edit-item">
        <span class="label">学校</span>
        <span><input v-model="school" class="put" /><span class="icon">></span></span>
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
      <div class="xiugai">
        <button class="xiugai-btn" @click="edit">点击修改</button>
      </div>
    </div>
  </div>
</template>
<script>
import TopBar4 from "../components/TopBar4.vue";
import { reactive, toRefs, onMounted, onBeforeUpdate } from "vue";
import store from "../store/index.js"
import axios from "axios";
import { useRouter } from "vue-router";
export default {
  components: {
    TopBar4,
  },
  setup() {
    const router = useRouter();
    const state = reactive({
      file: "",
      url: "",
      infoList: [],
      fileList: [],
      nickname: "",
      cardId: "",
      des: "",
      school: "",
    });
    onMounted(() => {
      axios.get("http://localhost:3000/api/user/info", {}).then((res) => {
        // console.log(res.data)
        state.infoList = res.data;
        console.log(state.infoList);
        state.nickname = state.infoList[0].name;
        state.cardId = state.infoList[0].cardID;
        state.des = state.infoList[0].des;
        state.school = state.infoList[0].school;
        if (store.state.imgIndex === 0) {
          state.url = require('../assets/img/head.jpg')
        } else {
          state.url = state.infoList[0].imgUrl
        }

      });
    });
    onBeforeUpdate(() => {


    })
    const edit = () => {
      if (state.nickname === "" || state.cardId === "") {
        console.log("用户名或抖音号不能为空！！");
      } else {
        axios
          .post("http://localhost:3000/api/user/info", {
            name: state.nickname,
            cardID: state.cardId,
            des: state.des,
            school: state.school,
            imgUrl: state.url,
          })
          .then((res) => {
            store.state.imgIndex = 1
            console.log("修改成功！");
            router.push("/me");
          });
      }
    };
    const change = () => {
      state.file = document.getElementById("file").files[0];
      state.url = window.URL.createObjectURL(state.file);
      console.log(state.url);
      console.log("头像修改成功！");
    };
    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      console.log(file)
      var data = new FormData();
      data.append('file', file.file);
      let config = {
        headers: { //添加请求头
          "Content-Type": "multipart/form-data"
        }
      };
      //上传图片
      // axios.post("", data, config).then(res => { 
      //   console.log("res", res);
      //   if (res.data.status == 200) {
      //     state.fileList.push(res.data.data);
      //   } else {
      //     this.$dialog.alert({
      //       title: "提示",
      //       message: res.msg,
      //     });
      //   }
      // })

    };
    return {
      ...toRefs(state),
      edit,
      change,
      afterRead
    };
  },
};
</script>
<style scoped>
.edit {
  height: 900px;
  background-color: #101821;
}

.edit-warp {
  padding: 0 10px;
  box-sizing: border-box;
}

.ava-box {
  color: #ccc;
  text-align: center;
  padding: 20px;
}

.avater {
  position: relative;
}

.avater img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 16px;
  opacity: 0.5;
}

.avater .iconfont {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
  font-size: 26px;
  color: #fff;
}

.avater input {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

.edit-box {
  margin: 0 10px;
  border-top: 1px #292821 solid;
  color: #ccc;
}

.edit-item {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}

.edit-item .label {
  color: #fff;
}

.hide {
  width: 80px;
  opacity: 0;
  position: absolute;
}

.put {
  background-color: #101821;
  color: #fff;
  border: none;
  width: 275px;
  font-size: 15px;
  text-align: right;
}

.edit-item .icon {
  margin-left: 10px;
}

input::placeholder {
  color: #ccc;
  text-align: right;
}

.xiugai-btn {
  background-color: red;
  color: white;
  font-size: 17px;
  height: 41px;
  width: 105px;
  border-radius: 11px;
  margin-top: 17px;
}
</style>