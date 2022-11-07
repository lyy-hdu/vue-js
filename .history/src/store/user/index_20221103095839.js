// 登录与注册模块
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo } from "@/api";
const state = {
    code: "",
    token: ""
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    }
};
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    // 用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    // 用户登录
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        // 服务器下发token，用户唯一标识
        // 后续通过带token找服务器要用户信息进行展示
        if (result.code == 200) {
            commit("USERLOGIN", result.data.token);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // 用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        console.log(result);
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}