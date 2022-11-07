// 登录与注册模块
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from "@/api";
import { setToken, getToken } from "@/utils/token";
const state = {
    code: "",
    // token: localStorage.getItem("TOKEN"),
    token: getToken(),
    userInfo: {}
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    // 清除本地数据
    CLEAR(state) {
        state.token = "";
        state.user = "";
    },

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
            // 持久化存储token
            // localStorage.setItem("TOKEN", result.data.token);
            setToken(result.data.token);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // 用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit("GETUSERINFO", result.data);
            return "ok";
        }
    },
    // 退出登录
    async logout({ commit }) {
        let result = await reqLogout();
        if (result.code == 200) {
            commit("CLEAR")
            return "ok";
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}