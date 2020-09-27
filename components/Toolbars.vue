<template>

  <div>

    <!-- NAV DRAW -->

    <v-navigation-drawer
      app
      fixed
      v-model="openDraw"
      min-height="100px"
      temporary
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

    <!-- APP BAR -->

    <v-app-bar
      v-if="landing"
      app
      color="#F7DDA4"
      shrink-on-scroll
      fade-img-on-scroll
      :src="require('../static/cafe-banner.jpg')"
      min-height=64
      :height=height
      class="app-bar"
    >

      <v-app-bar-nav-icon @click.stop="openDraw = !openDraw" />

      <v-img v-show="showMiniLogo" :src="require('../static/logo_transparent.png')" class="small-logo"></v-img>

      <v-spacer />

      <v-select placeholder="Theme" class="theme-select"></v-select>

      <v-btn icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>

    </v-app-bar>

    <v-app-bar
      v-else
      app
      color="#F7DDA4"
      min-height=64
      height=64
      class="app-bar"
    >

      <v-app-bar-nav-icon @click.stop="openDraw = !openDraw" />

      <v-img :src="require('../static/logo_transparent.png')" class="small-logo"></v-img>

      <v-spacer />

      <v-select placeholder="Theme" class="theme-select"></v-select>

      <v-btn icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>

    </v-app-bar>

  </div>

</template>

<script>

  export default {

    name: "Toolbars",

    props: {
      landing: {
        type: Boolean,
        default: false
      },
      height: {
        type: String,
        default: "64px"
      }
    },

    data () {
      return {

        openDraw: false,

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

        view: {
          scrollY: 0
        }

      }
    },

    mounted() {
      if (this.landing) {
        this.setScrollListener()
      }
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.checkScroll)
    },

    computed: {

      showMiniLogo() {
        return this.view.scrollY > 250
      }

    },
    methods: {

      setScrollListener() {
        window.addEventListener('scroll', this.checkScroll);
      },

      checkScroll(e) {
        console.log(window.scrollY)
        this.$set(this.view, "scrollY", window.scrollY)
      }

    }
  }

</script>

<style>

  .theme-select {
    max-width: 300px;
    min-width: 100px;
  }

  .small-logo {
    max-width: 100px;
  }

  .app-bar {
    color: #557581 !important;
  }

</style>
