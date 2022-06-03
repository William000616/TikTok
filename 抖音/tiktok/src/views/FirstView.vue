<template>
  <div class="first">
    <top-bar></top-bar>
    <router-view />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import TopBar   from "../components/TopBar.vue";
export default {
  components: {
    TopBar,
  },
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
</style>
