//jshint ignore:start

import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import expenseReducer from "../reducers/expenses.reducer"
import filterReducer from "../reducers/filters.reducer"
import authReducer from "../reducers/auth.reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer,
    auth: authReducer
  }), composeEnhancers(applyMiddleware(thunk))
)

