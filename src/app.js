//jshint ignore:start

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import AppRoute from "./routers/AppRouter"
import store from "./store/configstore.store"
import "normalize.css/normalize.css"
import "react-dates/lib/css/_datepicker.css"
import "./styles/style.scss"
import "./firebase/firebase"

//With this I have been able to provide the store for all my component to mae use of it.
const jsx = (
 <Provider store={store}>
  <AppRoute />
 </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))