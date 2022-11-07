// 登录与注册模块
import { reqGetCode } from "@/api";
const state = {};
const mutations = {};
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode();
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}