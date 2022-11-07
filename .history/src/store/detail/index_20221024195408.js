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
// 简化数据
const getters = {
    categoryView(state) {
        // 比如：state.goodInfo初始状态为空对象，空对象的categoryView属性值为ubdefined
        // 当前计算出的categoryView属性值至少是一个空对象，不会报错
        return state.goodInfo.categoryView || {};
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};