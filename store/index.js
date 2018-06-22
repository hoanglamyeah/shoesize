import Vuex from 'vuex'
import app from './modules/app'
import breadcrumb from './modules/breadcrumb'
import getters from './getters'

const createStore = () => {
    return new Vuex.Store({
        modules: {
            app,
            breadcrumb
        },
        getters
    })
}

export default createStore
