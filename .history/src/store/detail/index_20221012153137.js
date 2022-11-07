import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api';
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
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({ commit }) {
        // 使用await拿到成功的promise
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    async getBannerList({ commit }) {
        // 使用await拿到成功的promise
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }
    },
    async getFloorList({ commit }) {
        // 使用await拿到成功的promise
        let result = await reqFloorList();
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data);
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