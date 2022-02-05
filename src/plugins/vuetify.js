import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        loadBtn: '#0d6fb5',
        sortBtn: '#7fcaf5',
        errorBtn: '#ed0c0c',
        addBtn: '#0af211'
      }
    }
  }
})
