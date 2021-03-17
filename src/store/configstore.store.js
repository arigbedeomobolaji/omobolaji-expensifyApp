//jshint ignore:start

import { createStore, combineReducers } from "redux"
import expenseReducer from "../reducers/expenses.reducer"
import filterReducer from "../reducers/filters.reducer"

export default createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

