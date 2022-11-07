import Vue from 'vue'
import App from './App.vue'

// 三级联动组件——————全局组件
import TypeNav from '@/components/TypeNav'
import MyCarsousel from '@/components/Carsousel'
import MyPagination from '@/components/Pagination'
import { Button } from 'element-ui';

// 一参：全局组件的名字 二参：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(MyCarsousel.name, MyCarsousel)
Vue.component(MyPagination.name, MyPagination)
Vue.component(Button.name, Button)

// 引入路由
import router from '@/router'

// 引入仓库
import store from '@/store'
Vue.config.productionTip = false

// 引入MockSever.js----mock数据
import '@/mock/mockServe'

// 引入swiper样式
import 'swiper/swiper-bundle.css'

// 测试
/* import { reqCategoryList } from '@/api'
reqCategoryList(); */
// 统一接口api文件夹里全部请求函数
// 统一引入
import * as API from "@/api";
new Vue({
  render: h => h(App),
  // 全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  // 注册路由 kv一致省略v 且router小写
  router,
  // 注册仓库 组件实例的身上会多出一个属性$store
  store,
}).$mount('#app')
