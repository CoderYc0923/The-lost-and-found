const detail = {
  state:{
    data:{}
  },
  mutations:{
    saveData(state,data) {
      state.data = data
    }
  },
  actions:{
    SetData({commit},data) {
      commit('SET_DATA',data)
    }
  },
  getters:{
    GetData:(state) => state.data
  },
}

export default detail