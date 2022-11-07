// 引入一级路由组件
// import MyLogin from '@/pages/Login';
// import MyRegister from '@/pages/Register';

// 已改为路由懒加载

// 引入二级路由
import MyOrder from "@/pages/Center/myOrder";
import GroupOrder from "@/pages/Center/groupOrder";

//当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
// 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。

export default [
    {
        path: "/center",
        component: () => import("@/pages/Center"),
        meta: { show: true },
        // 二级路由
        children: [
            {
                path: "myorder",
                component: MyOrder,
            },
            {
                path: "grouporder",
                component: GroupOrder
            },
            {
                path: "/center",
                redirect: "/center/myorder"
            }
        ]
    },
    {
        path: "/paysuccess",
        component: () => import("@/pages/PaySuccess"),
        meta: { show: true },
    },
    {
        path: "/pay",
        component: () => import("@/pages/Pay"),
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            // 想去支付页面，必须从交易而来
            if (from.path == "/trade") {
                next();
            }
            else {
                // 其他路由而来，停留在当前
                // 中断当前导航
                next(false);
            }
        }
    },
    {
        path: "/trade",
        component: () => import("@/pages/Trade"),
        meta: { show: true },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 想去交易页面，必须从购物车而来
            if (from.path == "/shopcart") {
                next();
            }
            else {
                // 其他路由而来，停留在当前
                // 中断当前导航
                next(false);
            }
        }
    },
    {
        path: "/shopcart",
        component: () => import("@/pages/ShopCart"),
        meta: { show: true },

    },
    {
        path: "/addcartsuccess",
        name: "addcartsuccess",
        component: () => import("@/pages/AddCartSuccess"),
        meta: { show: true },

    },
    {
        path: "/detail/:skuid",
        component: () => import("@/pages/Detail"),
        meta: { show: true },

    },
    {
        path: "/home",
        component: () => import('@/pages/Home'),
        meta: { show: true },

    },
    {
        path: "/login",
        component: () => import("@/pages/Login"),
        meta: { show: false },
    },
    {
        path: "/register",
        component: () => import("@/pages/Register"),
        meta: { show: false },
    },
    {
        path: "/search/:keyword",
        component: () => import("@/pages/Search"),
        meta: { show: true },
        name: "search",
    },
    // 重定向，项目跑起来时，当访问/时，立马定向到首页
    {
        path: "*",
        redirect: "/home"
    },
]