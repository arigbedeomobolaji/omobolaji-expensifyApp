import {firebase, googleAuthProvider }  from "../firebase/firebase"

export const login = (uid) => ({
 type: "LOGIN",
  uid
})

// export const asyncLogin = () => {
//  return (dispatch) => {
//   return firebase.auth().onAuthStateChanged((user) => {
//    if (user) {
//     dispatch(login(user.uid))
//    }
//   })
//  } 
// }

export const startLogin = () => {
 return () => {
  return firebase.auth().signInWithPopup(googleAuthProvider)
 }
}

export const logout = () => ({
 type: "LOGOUT"
})

export const startLogout = () => {
 return () => {
  return firebase.auth().signOut()
 }
}