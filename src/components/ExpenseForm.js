//jshint ignore:start
import React from "react"
import moment from "moment"
import 'react-dates/initialize'
import { SingleDatePicker } from "react-dates"


export default class ExpenseForm extends React.Component {
 constructor(props){
  super(props)
  this.state = {
   description: props.expense ? props.expense.description : "",
   note: props.expense ? props.expense.note :"",
   amount: props.expense ? (props.expense.amount/100).toString() : "",
   createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
   isCalendarFocused: false,
   error: ""
  }
 }

 onDescriptionChange = (e) => {
  const description = e.target.value
  this.setState(() => ({
   description
  }))
 }

 onNoteChange = (e) => {
  const note = e.target.value
  this.setState(() => ({
   note
  }))
 }

 onAmountChange = (e) => {
  const amount = e.target.value
  if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
   this.setState(() => ({
    amount: amount
   }))
  }
 }

 onDateChange = (createdAt) => {
  if (createdAt) {
   this.setState(() => ({ createdAt }))
  }
 }
 

 onCalendarFocusedChange = ({ focused }) => {
  this.setState(() => ({
   isCalendarFocused: focused
  }))
 }

 onSubmit = (e) => {
  e.preventDefault()
  
  if (!this.state.description || !this.state.amount) {
   // Render Error 
   this.setState(() => ({
    error: "Please provide description and amount."
   }))
  } else {
   // clear error
   this.setState(() => ({
    error: ""
   }))
   // We created the expense props simply because we want to reuse this form on AddExpense and EditExpense
   // We can also call a function as a props
   this.props.onSubmit({
    description: this.state.description,
    amount: parseFloat(this.state.amount, 10) * 100,
    createdAt: this.state.createdAt.valueOf(),
    note: this.state.note
   })
  }
 }

 render() {
  return (
    <form className="form" onSubmit={this.onSubmit}>
     {!!this.state.error && <p className="form__error">{this.state.error}</p>}
     <input
      type="text"
      className="text-input"
      placeholder="Description"
      autoFocus
      value={this.state.description}
      onChange={this.onDescriptionChange}
     />
     <input 
      type="text"
      className="text-input"
      placeholder="Amount"
      value={this.state.amount}
      onChange={this.onAmountChange}
     />
     <SingleDatePicker 
      date={this.state.createdAt}
      onDateChange={this.onDateChange}
      focused={this.state.isCalendarFocused}
      onFocusChange={this.onCalendarFocusedChange}
      numberOfMonths={1}
      isOutsideRange={() => false}
     />
     <textarea
      className="textarea"
      placeholder="Add a Note (Optional)"
      value={this.state.note}
      onChange={this.onNoteChange}
     >
     </textarea>
     <div>
       <button className="button button--secondary" type="submit"> { !!this.props.buttonName ? this.props.buttonName : "Add Expense"}</button>
     </div>
    </form>
  )
 }
}