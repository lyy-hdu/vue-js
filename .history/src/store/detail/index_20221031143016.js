import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api';
// detail模块的小仓库
// 封装游客身份模块uuid  生成一个随机字符块（不会变化）
import { getUUID } from '@/utils/uuid_tokenutils/'
const state = {
    goodInfo: {},
    uuid_tpken: getUUID()
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
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        // 加入购物车以后（发请求），前台将参数带给服务器
        // 服务器写入数据成功，并没有返回其他值，只返回code=200，代表这次操作成功
        // 因为服务器没有返回其他数据，不需要三连环存储数据
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
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