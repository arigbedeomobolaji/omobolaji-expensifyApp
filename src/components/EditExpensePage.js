//jshint ignore:start
import React from "react"
import { connect } from "react-redux"
import ExpenseForm from "./ExpenseForm"
import {asyncEditExpense, asyncRemoveExpense} from "../actions/expenses.action"

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    // props.dispatch(editExpense(props.expense.id, expense))
    this.props.asyncEditExpense(this.props.expense.id, expense)
    this.props.history.push("/dashboard")
  }

  handleRemoveExpense = (e) => {
    this.props.asyncRemoveExpense(this.props.expense.id)
    this.props.history.push("/dashboard")
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
            buttonName={"Save Expense"}
          />
          <button className="button button-secondary" onClick={this.handleRemoveExpense}
          >Remove</button>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)   
})

const mapDispatchToProps = (dispatch) => ({
  asyncEditExpense: (id, expense) => {
    dispatch(asyncEditExpense(id, expense))
  },
  asyncRemoveExpense: (id) => {
    dispatch(asyncRemoveExpense(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
