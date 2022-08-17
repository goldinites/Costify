export default {
  state() {
    return {
      user: false
    }
  },
  actions: {
    async authUser({ commit }, { email, password }) {
      try {
        const user = await this.$fire.auth.signInWithEmailAndPassword(email, password);
        commit('authUser', user);
      } catch (error) {
        throw error
      }
    },
    logoutUser({ commit }) {
      this.$fire.auth.signOut();
      commit('logout')
    },
    async userRegister({ commit }, { email, password }) {
      try {
        const user = await this.$fire.auth.createUserWithEmailAndPassword(email, password);
        commit('authUser', user);
      } catch (error) {
        throw error
      }
    },
  },
  mutations: {
    authUser(state, user) {
      state.user = user;
      this.$router.push('/');
    },
    logout(state){
      state.user = false;
      this.$router.push('/login');
    }
  },
  getters: {
    getUserName(state) {
      return state.user.user._delegate.email;
    },
    userIsLogged(state) {
      return state.user;
    }
  }
}
