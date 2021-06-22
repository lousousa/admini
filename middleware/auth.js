export default function ({ store, redirect }) {
  if (!store.getters.userIsAuthenticated) {
    return redirect('/login')
  }
}
