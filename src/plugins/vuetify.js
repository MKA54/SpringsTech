import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        loadBtn: colors.indigo.base,
        sortBtn: colors.lightBlue,
        errorBtn: colors.red,
        addBtn: colors.green
      }
    }
  }
})
