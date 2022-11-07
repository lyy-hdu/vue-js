import { reqAddressInfo } from "@/api";
const state = {};
const mutations = {};
const actions = {
    async adderssInfo({ commit }) {
        let result = await reqAddressInfo();
        if (result.code == 200) {
            commit("ADDRESSINFO", result.data)
        }
    }
};
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters
}