//jshint ignore:start

import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import AppRoute from "./routers/AppRouter"
import store from "./store/configstore.store"
import { addExpense } from "./actions/expenses.action"
import "normalize.css/normalize.css"
import "react-dates/lib/css/_datepicker.css"
import "./styles/style.scss"

const expenseOne = store.dispatch(addExpense({description: "Rent", note: "House rent for February", amount: 5000, createdAt: 1250}))
const expenseTwo = store.dispatch(addExpense({ description: "Coffee", note: "Early morning Coffee", amount: 500, createdAt: 1400 }))
const expenseThree = store.dispatch(addExpense({description: "Fruits", note: "I need to eat Banana fruit tonight", amount: 10000, createdAt: -10}))
const expenseFour = store.dispatch(addExpense({description: "Gas Bill", note: "Gas bill for the month of February", amount: 900, createdAt: 3020}))
const expenseFive = store.dispatch(addExpense({description: "Water Bill", note: "Water bill for the month of February", amount: 2030, createdAt: -1000}))


 
//With this I have been able to provide the store for all my component to mae use of it.
const jsx = (
 <Provider store={store}>
  <AppRoute />
 </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))