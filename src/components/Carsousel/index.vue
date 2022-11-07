<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <!-- carousel就是轮播的意思 -->
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// swiper6只能按需引入
import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);
export default {
  name: "MyCarsousel",
  props: ["list"],
  watch: {
    // 监听bannerList数据的变化，因为这条数据发生过变化---由空数组变为数组里有四个元素
    list: {
      immediate: true,
      handler(newValue, oldValue) {
        // 现在通过watch监听bannerList属性的属性值变化
        // 如果执行handler方法，代表组件实例身上的这个属性的属性已经有了【数组：四个元素】
        // 现在这个函数执行，只能保证bannerList数据已经有了，但是你没有办法保证v-for已经执行结束了
        // v-for执行结束，才有结构【在watch当中没办法保证】
        // nextTick:在下次DOM更新 循环(v-for)结束之后 执行延迟回调。在 修改数据之后 立即使用这个方法，获取最新DOM
        this.$nextTick(() => {
          //  当你执行这个回调的时候，保证服务器数据回来了。v-for执行完毕了，轮播图的结构一定有了
          var mySwiper = new Swiper(this.$refs.mySwiper, {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              // 点击图片底部小球（分页器）也能切换图片
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // 如果需要滚动条
            /* scrollbar: {
            el: '.swiper-scrollbar',
        }, */
          });
        });
      },
    },
  },
};
</script>

<style>
</style>