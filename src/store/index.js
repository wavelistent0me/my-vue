import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role: "editor",
  },
  //属性的get方法
  getters: {
    getRole: (state) => state.role
  },
  //可更改状态的逻辑,同步操作
  mutations: {
    setRole: (state, data) => state.role = data
  },
  //提交mutation,异步操作
  actions: {
    acSetRole(context, role) {
      setTimeout(() => {
        //延时1秒提交至mutation中的方法
        context.commit("setRole", role);
      }, 1000);
    }
  },
  modules: {
  }
})
