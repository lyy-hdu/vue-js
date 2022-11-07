import { reqGoodsInfo } from '@/api';
// home模块的小仓库
const state = {
    // state中数据根据接口返回值初始化
    categoryList: [],
    // 轮播图的数据
    bannerList: [],
    // floor数据
    floorList: [],
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    },
};
const actions = {
    // 获取产品信息
    async getGoodInfo({ commit }, skuId) {
        // 使用await拿到成功的promise
        let result = await reqGoodInfo(skuId);
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }
    },
};
// 计算属性
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
};