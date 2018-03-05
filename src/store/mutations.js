export default {
  login(state, isAdmin){
    state.loginStatus = isAdmin;
  },
  changePage(state, curPage){
    state.curPage = curPage;
  },
  changeLabel(state, curLabel){
    state.curLabel = curLabel;
  },
  setLabels(state, data){
    state.labels = data;
  }
}