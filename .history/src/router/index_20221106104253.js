import Vue from 'vue';
import VueRouter from 'vue-router';


// 引入store
import store from '@/store';

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



let router = new VueRouter({
    // 配置路由
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        // vue2中为y:0，Vue3是top:0
        // 返回的这个y=0,代表的滚动条在最上方
        return { y: 0 }
    },
})
// 全局守卫：前置守卫(路由跳转之间判断)
router.beforeEach(async (to, from, next) => {
    // to:获取到目的路由信息
    // from：获取到从哪个路由而来
    // next:放行函数  next()直接放行  next("/login")放行到指定路由  next(false)
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    // 用户已登录
    if (token) {
        // 用户已登录且想去login路由
        if (to.path == "/login" || to.path == "/register") {
            // 不能去，停留在首页
            next("/home");
        } else {
            // 用户已登录但去的不是login
            // 有用户信息
            if (name) {
                next();
            } else {
                // 没有用户信息,派发action让仓库存储用户信息再跳转
                try {
                    // 获取用户信息成功
                    await store.dispatch("getUserInfo");
                    next();
                } catch (error) {
                    // token失效
                    // 清除token,重新登录
                    await store.dispatch("userLogout");
                    next("/login");
                }
            }
        }
    } else {
        // 用户未登录
        // 后续继续优化
        // 不能去交易相关，支付相关(pay,paysucess)，不能去个人中心
        // toPath.indexOf("/pay") != -1直接拦截包含pay字符串的两个路由
        let toPath = to.path;
        if (toPath.indexOf("/trade") != -1 || toPath.indexOf("/pay") != -1 || toPath.indexOf("/center") != -1) {
            next("/login");
        } else {
            next();
        }
    }
});
export default router;