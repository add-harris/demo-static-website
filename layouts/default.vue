<template>
  <v-app dark>

    <v-sheet
      id="scrolling-techniques"
      v-scroll.self="scrollFun"
      class="overflow-y-auto"
      max-height="500"
    >
    <v-app-bar
      color="orange darken-1"
      shrink-on-scroll
      dark
      flat
      height="300px"
      prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>




      <v-main>
        <v-container style="height: 1000px;">
          <nuxt />
        </v-container>
      </v-main>

    </v-sheet>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    scrollFun() {
      console.log("scrolling")
    }
  }
}
</script>

<style>

  #slanted {
    width: 0px;
    height: 0px;
    position: fixed;
    /*top: 0;*/
    /*left: 0;*/
    border-top: 50px solid orange;
    /*border-bottom: 50px solid orange;*/
    /*border-left: 50px solid orange;*/
    border-right: 1500px solid transparent;
    /*background-color: orange;*/
  }

</style>
