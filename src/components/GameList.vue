<template>
  <v-list style="
    background: #ffcccc">
    <draggable :list="games" @start="dragging = true"
               @end="dragging = false">
      <v-list-item
        v-for="item in games"
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
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'GameList',
  props: ['games'],
  components: {
    draggable
  },
  methods: {
    add (item) {
      this.$store.commit('add', item)
      this.$store.commit('deleteItem', item)
    },
    deleteItem (item) {
      this.$store.commit('deleteItem', item)
    }
  }
}
</script>
