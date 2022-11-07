// 引入一级路由组件
import MyHome from '@/pages/Home';
import MyLogin from '@/pages/Login';
import MyRegister from '@/pages/Register';
import MySearch from '@/pages/Search';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';

// 引入二级路由
import MyOrder from "@/pages/Center/myOrder";
import GroupOrder from "@/pages/Center/groupOrder";
export default [
    {
        path: "/center",
        component: Center,
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
        component: PaySuccess,
        meta: { show: true },

    },
    {
        path: "/pay",
        component: Pay,
        meta: { show: true },

    },
    {
        path: "/trade",
        component: Trade,
        meta: { show: true },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {

        }

    },
    {
        path: "/shopcart",
        component: ShopCart,
        meta: { show: true },

    },
    {
        path: "/addcartsuccess",
        name: "addcartsuccess",
        component: AddCartSuccess,
        meta: { show: true },

    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: { show: true },

    },
    {
        path: "/home",
        component: MyHome,
        meta: { show: true },

    },
    {
        path: "/login",
        component: MyLogin,
        meta: { show: false },
    },
    {
        path: "/register",
        component: MyRegister,
        meta: { show: false },
    },
    {
        path: "/search/:keyword",
        component: MySearch,
        meta: { show: true },
        name: "search",
    },
    // 重定向，项目跑起来时，当访问/时，立马定向到首页
    {
        path: "*",
        redirect: "/home"
    },
]