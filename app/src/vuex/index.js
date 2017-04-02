import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    previousPage: '',
    currentPage: ''
  },
  mutations: {
    pageLoaded (state, page) {
      state.previousPage = state.currentPage
      state.currentPage = page
    }
  }
})

export default store
