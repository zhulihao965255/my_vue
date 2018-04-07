import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    count:0
}
const mutations={
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}
const getters={
    count(state){
        return state.count+=10; 
    }
}
const actions={
    addAction({commit}){
        setTimeout(()=>{
            commit('commit',10);
        },3000)
    }
}
export default new Vuex.Store({
    state,  
    mutations,
    getters,
    actions
})