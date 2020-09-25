
export const state = () => ({

  landingVisited: false,
  title: "Cute Cafe"

})

export const getters = {

  // getTitle (state) {
  //   return state.title
  // },
  //
  // checkLandingVisited (state) {
  //   return state.landingVisited
  // },

}

export const mutations = {

  setTitle (state, title) {
    state.title = title
  },

  setLandingVisited (state, boolean) {
    state.landingVisited = boolean
  }

}
