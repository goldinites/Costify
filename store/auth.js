export default {
  state() {
    return {
      user: false,
      userName: '',
      error: ''
    }
  },
  actions: {
    async authUser({commit}, {email, password}) {
      try {
        const user = await this.$fire.auth.signInWithEmailAndPassword(email, password);
        commit('authUser', user);
        commit('setError', '');
      } catch (error) {
        commit('setError', error);
      }
    },
    logoutUser({commit}) {
      this.$fire.auth.signOut();
      commit('logout')
    },
    async userRegister({commit}, {email, password, userName}) {
      try {
        const user = await this.$fire.auth.createUserWithEmailAndPassword(email, password);
        this.$fire.database.ref('/users/' + user.user.uid).set({
          id: user.user.uid,
          email: user.user.email,
          userName : userName,
        });
        commit('authUser', user);
      } catch (error) {
        commit('setError', error);
      }
    },
  },
  mutations: {
    authUser(state, user) {
      state.user = user;
      this.$router.push('/');
    },
    setError(state, error) {
      let errorMessage = '';
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'Пользователь не найден'
          break;
        case 'auth/invalid-email':
          errorMessage = 'Некорректный email'
          break;
        case 'auth/wrong-password':
          errorMessage = 'Неверный пароль'
          break;
        default:
          errorMessage = ''
          break;
      }

      state.error = errorMessage
    },
    logout(state) {
      state.user = false;
      this.$router.push('/login');
    }
  },
  getters: {
    getUserName(state) {
      return state.user.user._delegate.email;
    },
    getError(state) {
      return state.error;
    },
    userIsLogged(state) {
      return state.user;
    }
  }
}
