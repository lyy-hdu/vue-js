import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api';
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
    // 购物车
    async AddOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        console.log(result);
    }
};
// 简化数据
const getters = {
    // 路径导航简化的数据
    categoryView(state) {
        // 比如：state.goodInfo初始状态为空对象，空对象的categoryView属性值为ubdefined
        // 当前计算出的categoryView属性值至少是一个空对象，不会报错
        return state.goodInfo.categoryView || {};
    },
    // 简化产品信息的数据
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    // 产品售卖属性简化
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    },
};

export default {
    state,
    mutations,
    actions,
    getters
};