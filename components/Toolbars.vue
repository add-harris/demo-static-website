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
      app
      class="app-bar"
      shrink-on-scroll
      fade-img-on-scroll
      :src="require('../static/bbq_banner_1.jpg')"
      min-height=85
      :height=height
    >

      <v-app-bar-nav-icon @click.stop="openDraw = !openDraw" />

      <v-img :src="require('../static/bbq_logo_transparent.png')" :style="bannerLogoCSS"></v-img>

      <v-spacer />

      <v-select placeholder="Theme" class="theme-select"></v-select>

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
            to: '/menu/'
          },
          {
            icon: 'mdi-map-marker-radius',
            title: 'Location',
            to: '/location/'
          }
        ],

        view: {
          scrollY: 0
        }

      }
    },

    mounted() {
      this.setScrollListener()
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.checkScroll)
    },

    computed: {

      showMiniLogo() {
        return this.view.scrollY > 180
      },

      bannerLogoCSS() {

        const bigLogoStyle = {
          'max-width': `${ 380 - this.view.scrollY }px`,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'max-width .1s, top .5s, left .5s'
        }

        const smallLogoStyle = {
          'max-width': '110px',
          'margin-left': '20px',
          'margin-top': '2px',
          transition: 'max-width .3s, top .5s, left .5s'
        }

        return this.view.scrollY < 200 ? bigLogoStyle : smallLogoStyle

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
    padding: 10px;
    max-width: 100px;
  }

  .big-logo {
    max-width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .app-bar {
    border-bottom: 2px whitesmoke solid !important;
    background-color: black;
  }

</style>
