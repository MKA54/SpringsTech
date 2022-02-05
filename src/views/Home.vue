<template>
  <v-card
    :class="[$store.state.gamesList.length === 0 ? $store.state.gamesList.length > 0: 'mx-auto', 'defaultWindowSize']"
    style="
    background: #ffcccc"
    class="my-4"
  >
    <h1 class="text-center">
      Games
    </h1>
    <div class="text-right mx-4">
      <v-btn class="v-btn btn"
             color="loadBtn"
             @click="loadData"
      >
        Load Game
      </v-btn>
    </div>
    <div class="text-right mx-4 mt-2">
      <v-btn class="v-btn btn mr-2"
             color="sortBtn"
             @click="sortASC"
      >
        Sort ASC
      </v-btn>
      <v-btn class="v-btn btn"
             color="sortBtn"
             @click="sortDesc"
      >
        Sort Desc
      </v-btn>
    </div>
    <GameList/>
  </v-card>
</template>

<script>
import GameList from '../components/GameList'

export default {
  name: 'Home',
  components: {
    GameList
  },
  methods: {
    loadData () {
      this.$store.dispatch('loadData')
    },
    sortASC () {
      this.$store.commit('sortASC')
    },
    sortDesc () {
      this.$store.commit('sortDesc')
    }
  }
}
</script>

<style scoped>
.defaultWindowSize {
  width: 570px;
  margin-left: auto;
  margin-right: auto;
}
</style>
