//jshint ignore:start
import React from "react"
import { connect } from "react-redux"
import ExpenseForm from "./ExpenseForm"
import {editExpense, asyncRemoveExpense} from "../actions/expenses.action"

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    // props.dispatch(editExpense(props.expense.id, expense))
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push("/")
  }

  handleRemoveExpense = (e) => {
    this.props.asyncRemoveExpense(this.props.expense.id)
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <h1>Expensify App | Edit</h1>
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
      />
      <button onClick={this.handleRemoveExpense}
      >Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)   
})

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => {
    dispatch(editExpense(id, expense))
  },
  asyncRemoveExpense: (id) => {
    dispatch(asyncRemoveExpense(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
