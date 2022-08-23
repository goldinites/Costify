// export default {
//   state() {
//     return {
//       authenticated: false,
//       error: '',
//     }
//   },
//   actions: {
//     async userRegister({ commit }, { email, password, userName }) {
//       try {
//         this.$fire.auth
//           .createUserWithEmailAndPassword(email, password)
//           .then(() => {
//             const uid = this.$fire.auth.currentUser.uid
//             this.$fire.database.ref('/users/' + uid).set({
//               id: uid,
//               email: email,
//               displayName: userName,
//             })
//             commit('authUser')
//           })
//       } catch (error) {
//         commit('setError', error)
//       }
//     },
//     async authUser({ commit }, { email, password }) {
//       try {
//         this.$fire.auth.signInWithEmailAndPassword(email, password).then(() => {
//           commit('authUser')
//         })
//       } catch (error) {
//         commit('setError', error)
//       }
//     },
//     async logoutUser({ commit }) {
//       await this.$fire.auth.signOut()
//       commit('logout')
//     },
//   },
//   mutations: {
//     authUser(state) {
//       state.authenticated = true
//       state.error = false
//       this.$router.push('/')
//     },
//     setError(state, error) {
//       let errorMessage = ''
//       switch (error.code) {
//         case 'auth/user-not-found':
//           errorMessage = 'Пользователь не найден'
//           break
//         case 'auth/invalid-email':
//           errorMessage = 'Некорректный email'
//           break
//         case 'auth/wrong-password':
//           errorMessage = 'Неверный пароль'
//           break
//         default:
//           errorMessage = ''
//           break
//       }
//       state.error = errorMessage
//     },
//     logout(state) {
//       state.authenticated = false
//       this.$router.push('/login')
//     },
//   },
//   getters: {
//     getError(state) {
//       return state.error
//     },
//   },
// }