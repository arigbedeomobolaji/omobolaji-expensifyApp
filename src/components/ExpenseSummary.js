//jshint ignore:start
import React from "react"
import { connect } from "react-redux"
import {Link} from "react-router-dom"
import numeral from "numeral"
import selectExpenseTotal from "../selectors/expense-total"
import selectExpense from "../selectors/expenses.selector"

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
 const expenseWord = expenseCount === 1 ? "expense" : "expenses"
 const expenseTotalCurrency = numeral(expensesTotal / 100).format("$0,0.00")
 
  return (
    <div className="page-header">
      <div className="content-container">
        {
        expenseCount > 0 && <h1 className="page-header__title"> Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{expenseTotalCurrency}</span> </h1> 
        }
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
 </div>
)}

const mapStateToProps = (state) => ({
 expenseCount: selectExpense(state.expenses, state.filters).length,
 expensesTotal: selectExpenseTotal(selectExpense(state.expenses, state.filters))
})


export default connect(mapStateToProps)(ExpenseSummary)