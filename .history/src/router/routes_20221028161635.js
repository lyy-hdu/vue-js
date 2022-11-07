import MyHome from '@/pages/Home'
import MyLogin from '@/pages/Login'
import MyRegister from '@/pages/Register'
import MySearch from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'

export default [
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