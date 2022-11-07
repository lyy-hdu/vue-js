<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(slide, index) in skuImageList"
        :key="slide.id"
      >
        <img :src="slide.imgUrl" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
// import Swiper from "swiper";
// swiper6只能按需引入
import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Pagination, Navigation]);
export default {
  name: "ImageList",
  props: ["skuImageList"],
  watch: {
    // 监听bannerList数据的变化，因为这条数据发生过变化---由空数组变为数组里有四个元素
    skuImageList(newValue, oldValue) {
      // 现在通过watch监听bannerList属性的属性值变化
      // 如果执行handler方法，代表组件实例身上的这个属性的属性已经有了【数组：四个元素】
      // 现在这个函数执行，只能保证bannerList数据已经有了，但是你没有办法保证v-for已经执行结束了
      // v-for执行结束，才有结构【在watch当中没办法保证】
      // nextTick:在下次DOM更新 循环(v-for)结束之后 执行延迟回调。在 修改数据之后 立即使用这个方法，获取最新DOM
      this.$nextTick(() => {
        //  当你执行这个回调的时候，保证服务器数据回来了。v-for执行完毕了，轮播图的结构一定有了
        new Swiper(this.$refs.mySwiper, {
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
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      &:hover {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>