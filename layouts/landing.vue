<template>
  <v-app dark>

    <!-- NAV DRAW -->

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      min-height="100px"
      app
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
      dark
      shrink-on-scroll
      color="#F7DDA4"
      fade-img-on-scroll
      :src="require('../static/cafe-banner.jpg')"
      min-height=64
      height="400px"
      ref="navbar"
    >

      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
<!--      <v-btn-->
<!--        icon-->
<!--        @click.stop="miniVariant = !miniVariant"-->
<!--      >-->
<!--        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>-->
<!--      </v-btn>-->
      <v-btn icon @click="print">
        <v-icon>mdi-application</v-icon>
      </v-btn>
<!--      <v-btn icon>-->
<!--        <v-icon>mdi-minus</v-icon>-->
<!--      </v-btn>-->
<!--      <v-toolbar-title v-text="title" />-->

      <v-img v-show="logo.show" :src="require('../static/banner_logo_1.png')" class="small-logo"></v-img>

      <v-spacer />

<!--      <v-select placeholder="Theme" class="theme-select"></v-select>-->

      <v-btn icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>

    </v-app-bar>






      <v-main>
        <v-container>
          <nuxt />
        </v-container>
      </v-main>


    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
      <p>{{ showMiniLogo }}</p>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Menu',
          to: '/menu'
        }
      ],
      miniVariant: false,
      right: true,
      title: 'Landing',
      logo: {
        show: false
      }

    }
  },

  mounted() {
    this.setScrollListener()
  },

  computed: {

    showMiniLogo() {
      return window.scrollY > 250
    }

  },
  methods: {

    setScrollListener() {
      window.addEventListener('scroll', this.checkScroll);
    },

    checkScroll(e) {
      if (!this.logo.show && window.scrollY > 250) {
        console.log(true)
        this.$set(this.logo, "show", true)
      } else if (this.logo.show && window.scrollY < 250) {
        console.log(false)
        this.$set(this.logo, "show", false)
      }
    },

    print() {
      console.log("things")
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
