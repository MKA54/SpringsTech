<template>
  <v-card"
    class="mx-auto mt-4"
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

    <v-list>
      <draggable :list="$store.state.gamesList" @start="dragging = true"
                 @end="dragging = false">
        <v-list-item
          v-for="item in $store.state.gamesList"
          :key="item.id"
        >
          <v-list-item-avatar>
            <v-img :src="item.icon_url"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
          <v-btn class="v-btn btn mr-2"
                 color="addBtn"
                 @click="add(item)"
          >
            Add
          </v-btn>
          <v-btn class="v-btn btn"
                 color="errorBtn"
                 @click="deleteItem(item)"
          >
            Delete
          </v-btn>
        </v-list-item>
      </draggable>
    </v-list>
  </v-card>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'GameList',
  data: () => ({}),
  components: {
    draggable
  },
  methods: {
    loadData () {
      this.$store.dispatch('loadData')
    },
    add (item) {
      this.$store.commit('add', item)
      this.$store.commit('deleteItem', item)
    },
    deleteItem (item) {
      this.$store.commit('deleteItem', item)
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

</style>
