//jshint ignore:start

import React from "react"
import { connect } from "react-redux"
import ExpenseListItem from "./ExpenseListItem"
import selectExpenses from "../selectors/expenses.selector"

export const ExpenseList = (props) => (
 <div>
  <h1>ExpenseList</h1>
  {
   props.expenses.length === 0 ? ( <p>No Expense to show</p>) : (
    
  <table>
   <thead>
    <tr>
     <th>Description</th>
     <th>Amount</th>
     <th>createdAt</th>
    </tr>
   </thead>
   <tbody>
    {props.expenses.map(
     (expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />
     }
    )}
   </tbody>
  </table>
   )
  }
 </div>
)

const mapStateToProps = (state) => ({
 expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)