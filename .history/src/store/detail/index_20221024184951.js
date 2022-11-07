import { reqGoodsInfo } from '@/api';
// detail模块的小仓库
const state = {
    goodInfo: {},
};
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    },
};
const actions = {
    // 获取产品信息
    async getGoodInfo({ commit }, skuId) {
        // 使用await拿到成功的promise
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit("GETGOODINFO", result.data);
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