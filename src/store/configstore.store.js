//jshint ignore:start

import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import expenseReducer from "../reducers/expenses.reducer"
import filterReducer from "../reducers/filters.reducer"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  }), composeEnhancers(applyMiddleware(thunk))
)

