/* eslint-disable */
import * as types from '../mutation-types'

const state = {
    data: [],
}

const getters = {
    getBreadcrumb: state => state.data
}

const actions = {

    makeBreadcrumb({commit}, data) {
        commit(types.LOAD_BREADCRUMB, data)
    },

}

const mutations = {
    [types.LOAD_BREADCRUMB](state, data) {
        state.data = data
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}
