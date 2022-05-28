<template>
  <div class="table-bar">
    <div class="item" @click="changeTab(0)">
      <router-link to="/" :class="tableIndex === 0 ? 'active' : ''"
        >首页</router-link
      >
    </div>
    <div class="item" @click="changeTab(1)">
      <router-link to="/friends" :class="tableIndex === 1 ? 'active' : ''"
        >朋友</router-link
      >
    </div>
    <div class="publish" >
      <router-link to="/publish" :class="tableIndex === 2 ? 'active' : ''">
        +</router-link
      >
    </div>
    <div class="item" @click="changeTab(3)">
      <router-link to="/msg" :class="tableIndex === 3 ? 'active' : ''"
        >消息</router-link
      >
    </div>
    <div class="item" @click="changeTab(4)">
      <router-link to="/me" :class="tableIndex === 4 ? 'active' : ''"
        >我</router-link
      >
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, toRefs } from "vue";
import store from "../store/index.js"
export default {
  setup() {
    const state = reactive({
      tableIndex: store.state.indexTab,
      
    });

    const changeTab = (index) => {
      state.tableIndex = index;
      store.state.indexTab = index;
      // console.log(store.state.indexTab) 
    };
    return {
      ...toRefs(state),
      changeTab,
    };
  },
};
</script>
<style lang="less" scoped>
.table-bar {
  background-color: black;
  overflow: scroll;
  height: 64px;
  line-height: 50px;
  width: 373px;
  // width: 100%;

  position: fixed;
  bottom: 0;
  left: 0;
  color: #ccc;
  font-size: 16px;
  display: flex;
  justify-items: center;
  /* 底部导航栏优先级 */
  z-index: 30;
  align-items: center;
  box-sizing: border-box;
  margin: 0 8px;
}
.publish {
  flex: 1;
  text-align: center;
  color: #999;
  font-size: 50px;
  border: white solid 3px;
  border-radius: 20%;
  margin-left: 20px;
  margin-right: 20px;
  box-sizing: border-box;
  height: 50px;
}
.table-bar .item {
  flex: 1;
  text-align: center;
  color: #999;
  .active {
    color: white;
    font-weight: 900;
    font-size: 20px;
  }
}

a {
  text-decoration: none;
  color: #ccc;
}
</style>

