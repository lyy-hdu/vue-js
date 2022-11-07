// 当前这个模块：API进行统一管理
import requests from './request';
import mockRequests from './mockAjax'

// 三级联动接口
// /api/product/getBaseCategoryList   GET  无参数

// 发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () => {
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    });
}
// 获取banner数据（首页轮播图）
export const reqGetBannerList = () => {
    return mockRequests({
        url: '/banner',
        method: 'get'
    });
}
// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor');

// 获取search模块数据 接口：/api/list  请求方式：post 需要参数
/* {
    "category3Id": "61",
    "categoryName": "手机",
    "keyword": "小米",
    "order": "1:desc",
    "pageNo": 1,
    "pageSize": 10,
    "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
    "trademark": "4:小米"
  } */
// 当前这个接口，给服务器传递参数至少是一个空对象，不然请求失败
export const reqGetSearchInfo = (params) => requests({
    url: "/list",
    method: "post",
    data: params
})

// 获取商品详情信息的接口，URL：/api/item/{skuId} 请求方式：get
export const reqGoodsInfo = (skuId) => requests({
    url: `/item/${skuId}`,
    method: "get",
    data: skuId
})

// 获取或更新购物车数据，URL：/api/cart/addToCart/ {skuId} {skuNum}请求方式：post
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
    data: skuId, skuNum
})

// 获取购物车列表数据接口，URL：/api/cart/cartList 请求方式：get
export const reqCartList = () => requests({
    url: "/cart/cartList",
    method: "get"
})

// 删除购物车数据接口，URL：/api/cart/deleteCart/{skuId} 请求方式：delete
export const reqDeleteCartById = (skuId) => requests({
    url: `/cart/deleteCart/${skuId}`,
    method: "delete",
})

// 修改商品选中状态，URL：/api/cart/checkCart/{skuId}/{isChecked} 请求方式：get
export const reqUpdateCheckedById = (skuId, isChecked) => requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "get",
})

// 获取验证码，URL：/api/user/passport/sendCode/{phone} 请求方式：get
export const reqGetCode = (phone) => requests({
    url: `/user/passport/sendCode/${phone}`,
    method: "get",
    data: phone
})

// 用户注册，URL：/api/user/passport/register 请求方式：post
export const reqUserRegister = (data) => requests({
    url: "/user/passport/register",
    method: "post",
    data
})

// 用户登录，URL：/api/user/passport/login 请求方式：post
export const reqUserLogin = (data) => requests({
    url: "/user/passport/login",
    method: "post",
    data
})

// 获取用户信息(携带用户token向服务器索要)
export const reqUserInfo = () => requests({
    url: "/user/passport/auth/getUserInfo",
    method: "get"
})

// 退出登录
export const reqLogout = () => requests({
    url: "/user/passport/logout",
    method: "get"
})

// 获取用户地址信息
export const reqAddressInfo = () => requests({
    url: "/user/userAddress/auth/findUserAddressList",
    method: "get"
})

// 获取商品订单交易页
export const reqOrderInfo = () => requests({
    url: "/order/auth/trade",
    method: "get"
})

// 提交订单
export const reqSubmitOrder = (tradeNo, data) => requests({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: "post",
    data
})

// 获取订单支付信息
export const reqPayInfo = (orderId) => requests({
    url: `/payment/weixin/createNative/${orderId}`,
    method: "get",
    data: orderId
})

// 查询订单支付状态
export const reqQueryPayStatus = (orderId) => requests({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: "get",
    data: orderId
})