import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gamesList: [],
    myGames: [] // в массив добавляются элементы из gameList после клика на Add
  },
  mutations: {
    loadData (state) {
      axios.get('https://api.npoint.io/817eebf87e3033d5dc99')
        .then(response => {
          state.gamesList = response.data.data
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
        })
    },
    add (state, item) {
      state.myGames.push(item)
    },
    deleteItem (state, item) {
      state.gamesList = state.gamesList.filter(function (element) {
        return element !== item
      })
    },
    sortASC (state) {
      state.gamesList.sort(function (a, b) {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name) {
          return -1
        }

        return 0
      })
    },
    sortDesc (state) {
      state.gamesList.sort(function (a, b) {
        if (a.name < b.name) {
          return 1
        }
        if (a.name > b.name) {
          return -1
        }

        return 0
      })
    }
  },
  actions: {
    loadData (context) {
      context.commit('loadData')
    }
  },
  modules: {}
})
