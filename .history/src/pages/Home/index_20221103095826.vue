<template>
  <div>
    <!-- 三级联动组件已注册为全局，不需要在引入，直接使用 -->
    <TypeNav />
    <MyListContainer />
    <MyRecommend />
    <MyRank />
    <MyLike />
    <!-- floor组件内部自己是没有发请求的，数据是父组件给的 -->
    <MyFloor v-for="floor in floorList" :key="floor.id" :list="floor" />
    <MyBrand />
  </div>
</template>

<script>
// 引入其他的组件
import MyListContainer from "@/pages/Home/ListContainer";
import MyRecommend from "@/pages/Home/Recommend";
import MyRank from "@/pages/Home/Rank";
import MyLike from "@/pages/Home/Like";
import MyFloor from "@/pages/Home/Floor";
import MyBrand from "@/pages/Home/Brand";
import { mapActions, mapState } from "vuex";

export default {
  name: "MyHome",
  components: {
    MyListContainer,
    MyRecommend,
    MyRank,
    MyLike,
    MyFloor,
    MyBrand,
  },
  mounted() {
    // 派发action,获取floor组件数据
    this.$store.dispatch("getFloorList");
    // 派发action,获取用户信息
    this.$store.dispatch("getUserInfo");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style>
</style>