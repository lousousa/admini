export const state = () => ({
  auth: {
    loggedIn: false,
    user: null
  }
})

export const getters = {
  userIsAuthenticated: state => state.auth.loggedIn,
  userLoggedIn: state => state.auth.user
}

export const actions = {}

export const mutations = {}
