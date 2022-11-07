import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';
// 通过调用 Vue.use(VueRouter)，我们可以在任意组件中以 this.$router 的形式访问它，并且以 this.$route 的形式访问当前路由：
Vue.use(VueRouter);
// 重写push和replace
// 第一个参数 告诉原来push方法往哪里跳转，传递那些参数
// 第二个参数 成功回调
// 第三个参数 失败回调
// call传递参数用逗号隔开，apply方法执行，传递数组
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => { }, () => { });
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => { }, () => { });
    }
}



export default new VueRouter({
    // 配置路由
    routes
})