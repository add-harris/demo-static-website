<template>

  <!-- TODO add mini-variant to na-draw based on screen width -->

  <v-navigation-drawer
    app
    fixed
    v-model="open"
    min-height="100px"
  >
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>

  export default {

    name: "NavDrawer",

    props: {
      open: Boolean
    },

    data () {
      return {

        items: [
          {
            icon: 'mdi-home',
            title: 'Home',
            to: '/'
          },
          {
            icon: 'mdi-food-fork-drink',
            title: 'Menu',
            to: '/menu'
          },
          {
            icon: 'mdi-map-marker-radius',
            title: 'Location',
            to: '/location'
          }
        ],

      }
    },

  }

</script>
