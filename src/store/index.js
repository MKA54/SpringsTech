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
        .catch(e => {
          if (e.response) {
            console.log(e.response.data)
            console.log(e.response.status)
            console.log(e.response.headers)
          } else if (e.request) {
            console.log(e.request)
          } else {
            console.log('Error', e.message)
          }
        })
    },
    add (state, item) {
      try {
        state.myGames.push(item)
      } catch (e) {
        alert('Игра не добавлена')
        console.log('Ошибка ' + e.name + ':' + e.message + ', ' + e.stack)
      }
    },
    deleteItem (state, item) {
      try {
        state.gamesList = state.gamesList.filter(element => {
          return element !== item
        })
      } catch (e) {
        alert('Игра не удалена')
        console.log('Ошибка ' + e.name + ':' + e.message + ', ' + e.stack)
      }
    },
    sortASC (state) {
      try {
        state.gamesList.sort((a, b) => {
          if (a.name > b.name) {
            return 1
          }
          if (a.name < b.name) {
            return -1
          }

          return 0
        })
      } catch (e) {
        alert('Попробуйте отсортировать еще раз!')
        console.log('Ошибка ' + e.name + ':' + e.message + ', ' + e.stack)
      }
    },
    sortDesc (state) {
      try {
        state.gamesList.sort((a, b) => {
          if (a.name < b.name) {
            return 1
          }
          if (a.name > b.name) {
            return -1
          }

          return 0
        })
      } catch (e) {
        console.log('Ошибка ' + e.name + ':' + e.message + ', ' + e.stack)
      }
    }
  },
  actions: {
    loadData (context) {
      context.commit('loadData')
    }
  },
  modules: {}
})
