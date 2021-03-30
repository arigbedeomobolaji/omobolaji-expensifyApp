//jshint ignore:start

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import AppRoute from "./routers/AppRouter"
import configureStore from "./store/configstore.store"
import {asyncSetExpenses} from "./actions/expenses.action"
import "normalize.css/normalize.css"
import "react-dates/lib/css/_datepicker.css"
import "./styles/style.scss"
import "./firebase/firebase"

const store = configureStore
//With this I have been able to provide the store for all my component to mae use of it.
const jsx = (
 <Provider store={store}>
  <AppRoute />
 </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"))

store.dispatch(asyncSetExpenses()).then(() => {
 ReactDOM.render(jsx, document.getElementById("app"))
})
