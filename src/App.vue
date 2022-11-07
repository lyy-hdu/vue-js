<template>
  <div>
    <MyHeader />
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <!-- 在Home,search中显示，在其他不显示 
         较粗糙解决方法如下，使用v-show
         更好的方法是配置路由元信息meta对象-->
    <!-- <MyFooter v-show="$route.path == '/home' || $route.path == '/search'" /> -->
    <MyFooter v-show="$route.meta.show" />
  </div>
</template>

<script>
// 根组件只会执行一次
import MyHeader from "./components/Header/index.vue";
import MyFooter from "./components/Footer/index.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
  },
  mounted() {
    // 通知Vuex发请求，获取数据，存储在仓库当中
    // 派发一个action 获取商品分类的三级列表的数据
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
