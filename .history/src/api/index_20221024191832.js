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
export const reqGoodsInfo = (skuid) => requests({
    url: `/item/${skuId}`,
    method: "get",
    data: skuid
})