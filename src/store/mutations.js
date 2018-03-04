import types from '../config/mutationType'

export default {
  [types.login](state, isAdmin){
    state.loginStatus = isAdmin;
  },
  [types.changePage](state, curPage){
    state.curPage = curPage;
  },
  [types.changeLabel](state, curLabel){
    state.curLabel = curLabel;
  },
  [types.setLabels](state, data){
    state.labels = data;
  }
}