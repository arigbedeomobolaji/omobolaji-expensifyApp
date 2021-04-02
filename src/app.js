//jshint ignore:start

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import AppRoute from "./routers/AppRouter"
import history from "./routers/history"
import configureStore from "./store/configstore.store"
import { asyncSetExpenses } from "./actions/expenses.action"
import {login, logout } from "./actions/auth"
import "normalize.css/normalize.css"
import "react-dates/lib/css/_datepicker.css"
import "./styles/style.scss"
import { firebase } from "./firebase/firebase"


const store = configureStore
//With this I have been able to provide the store for all my component to mae use of it.
const jsx = (
 <Provider store={store}>
  <AppRoute />
 </Provider>
)

let hasRendered = false

const renderApp = () => {
 if (!hasRendered) {
  ReactDOM.render(jsx, document.getElementById("app"))
  hasRendered = true
 }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"))


// We can directlt history.push() here becuase In this context we are not inside of a component that is registered to a route  

//  SO to get the history API outside of the context of component is to make a few changes to (where our routes are implemented in the context (src/router/AppRouter)

// onAuthStateChanged(callbackFunc) ==> Lets checked whether a user has logged in

firebase.auth().onAuthStateChanged((user) => {
 if (user) {
  store.dispatch(login(user.uid))
  store.dispatch(asyncSetExpenses()).then(() => {
   renderApp()
   if (history.location.pathname === "/") {
    history.push("/dashboard")
   }
  })  
 } else {
  store.dispatch(logout())
  renderApp()
  history.push("/")
  console.log("loggedOut")
 }
})