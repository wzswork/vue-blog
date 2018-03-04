import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutataions from './mutations'

Vue.use(Vuex)

const state = {
  curLabel:'javascript',
  curPage:1,
  loginStatus: false,
  labels:[{id:0, name:"..."}]
}

export default new Vuex.Store({
  state,
  actions,
  mutataions
})