<template>
  <div class="topbar">
    <div class="left">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tianjia1"></use>
      </svg>
    </div>
    <div class="middle">
      <div class="item">消息</div>


    </div>
    <div class="right">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-douyinsousuo"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
.topbar {
  overflow: scroll;
  background-color: black;
  width: 100%;
  height: 60px;
  font-size: 18px;
  color: #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  // margin: 0;
  box-sizing: border-box;
  align-items: center;
  .icon {
    width: 30px;
    height: 30px;
    fill: #ccc;
  }
  .middle {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    .item {
      margin: 0 12px;
    }
  }
}
#tuijian{
    font-weight: 900;
    font-size: 23px;
}
</style>