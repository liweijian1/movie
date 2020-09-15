import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './Mutation'

Vue.use(Vuex)

const store = new Vuex.Store({
    state,
    mutations,
    strict:process.env.NODE_ENV !== 'production'
})

export default store