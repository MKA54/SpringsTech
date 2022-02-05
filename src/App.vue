<template>
  <v-app>
    <GameList/>
  </v-app>
</template>

<script>
import GameList from './components/GameList'

export default {
  name: 'App',
  components: {
    GameList
  }
}
</script>
