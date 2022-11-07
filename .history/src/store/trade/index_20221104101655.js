import { reqAddressInfo } from "@/api";
const state = {
    address: [],
};
const mutations = {
    GETUSERADDRESS(state, address) {
        state.address = address;
    }
};
const actions = {
    async getUserAdderss({ commit }) {
        let result = await reqAddressInfo();
        if (result.code == 200) {
            commit("GETUSERADDRESS", result.data)
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