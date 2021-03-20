//jshint ignore:start
import React from "react"
import { connect } from "react-redux"
import numeral from "numeral"
import selectExpenseTotal from "../selectors/expense-total"
import selectExpense from "../selectors/expenses.selector"

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
 const expenseWord = expenseCount === 1 ? "expense" : "expenses"
 const expenseTotalCurrency = numeral(expensesTotal / 100).format("$0,0.00")
 
 return (<div>
  {
   expenseCount > 0 &&
   <p>Viewing 
     {expenseCount} {expenseWord} totalling
    {expenseTotalCurrency}
   </p>
  }
 </div>
)}

const mapStateToProps = (state) => ({
 expenseCount: selectExpense(state.expenses, state.filters).length,
 expensesTotal: selectExpenseTotal(selectExpense(state.expenses, state.filters))
})


export default connect(mapStateToProps)(ExpenseSummary)