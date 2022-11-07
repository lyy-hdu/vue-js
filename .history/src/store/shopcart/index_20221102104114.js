import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";
import { forEach } from "core-js/core/array";
const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    },
};
const actions = {
    // 获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("GETCARTLIST", result.data);
        }
    },
    // 删除购物车数据
    async deleteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // 修改购物车产品选中状态
    async updateCheckedById({ commit }, { skuId, isChecked }) {
        let result = await reqUpdateCheckedById(skuId, isChecked);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    deleteAllCheckedCart({ dispatch, getters }) {
        // context 小仓库  commit(提交mutation 修改 state) getters(计算属性) dispatch(派发action) state(当前仓库数据)
        // 获取购物车中全部数据
        getters.cartList.cartInfoList.forEach(item => {
            console.log(11);
        });

    }
}
const getters = {
    cartList(state) {
        return state.cartList[0] || {}
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}