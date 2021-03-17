//jshint ignore:start

import React from "react"
import ConnectExpenseList from "./ExpenseList"
import ConnectedExpenseListFilter from "./ExpenseListFilter"

const ExpenseDashboardPage = () => (
 <div>
  <h1>Expensify App | Dashboard</h1>
  <p>This is the expense dashboard page</p>
  <ConnectedExpenseListFilter />
  <ConnectExpenseList />
 </div>
)

export default ExpenseDashboardPage