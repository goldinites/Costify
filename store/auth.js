export default {
  state() {
    return {
      user: false,
      authenticated: false,
      error: ''
    }
  },
  actions: {
    async userRegister({commit}, {email, password, userName}) {
      try {
        this.$fire.auth.createUserWithEmailAndPassword(email, password)
          .then((user) => {
            this.$fire.database.ref('/users/' + user.user.uid).set({
              id: user.user.uid,
              email: user.user.email,
              userName: userName,
            });
            this.$fire.database.ref('users/' + user.user.uid).on('value', (data) => {
              commit('authUser', data.val());
            });
          });
      } catch (error) {
        commit('setError', error);
      }
    },
    async authUser({commit}, {email, password}) {
      try {
        this.$fire.auth.signInWithEmailAndPassword(email, password)
          .then((user) => {
            this.$fire.database.ref('users/' + user.user.uid).on('value', (data) => {
              commit('authUser', data.val());
            });
            commit('setError', '');
          })
      } catch (error) {
        commit('setError', error);
      }
    },
    logoutUser({commit}) {
      this.$fire.auth.signOut();

      commit('logout')
    },
  },
  mutations: {
    authUser(state, user) {
      state.user = user;
      state.authenticated = true;
      console.log(state.authenticated);
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
      state.authenticated = false;
    }
  },
  getters: {
    getUserName(state) {
      return state.user.userName;
    },
    getError(state) {
      return state.error;
    },
  }
}
