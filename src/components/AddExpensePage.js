//jshint ignore:start
import React from "react"
import {connect} from "react-redux"
import ExpenseForm from "./ExpenseForm"
import {asyncAddExpense} from "../actions/expenses.action.js"

export class AddExpensePage extends React.Component{
 onSubmit = (expense) => {
  this.props.asyncAddExpense(expense)
  this.props.history.push("/")
 }
 render() {
  return (
   <div>
    <h1>Expensify App | Add </h1>
    <ExpenseForm
     onSubmit={this.onSubmit}
    />
   </div>
  )
 }
}

const mapDispatchToProps = (dispatch) => ({
 asyncAddExpense: (expense) => dispatch(asyncAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)

// mapDispatchToProps is a way to return your dispatcher functions allowing you to abstract them away from the component itself.
// to avoid inline functions we are going to switch our stateless function to a class based function