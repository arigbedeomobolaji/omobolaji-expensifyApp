//jshint ignore:start

import React from "react"
import ConnectExpenseList from "./ExpenseList"
import ConnectedExpenseListFilter from "./ExpenseListFilter"
import ConnectedExpenseSummary from "./ExpenseSummary"

const ExpenseDashboardPage = () => (
 <div>
  <ConnectedExpenseSummary />
  <ConnectedExpenseListFilter />
  <ConnectExpenseList />
 </div>
)

export default ExpenseDashboardPage