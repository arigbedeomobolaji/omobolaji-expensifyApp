//jshint ignore: start
import React from "react"
import { connect } from "react-redux"
import "react-dates/initialize"
import { DateRangePicker } from "react-dates"
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters.action"
import "react-dates/lib/css/_datepicker.css"

export class ExpenseListFilter extends React.Component {

  state = {
  calendarFocused: null
 }

 onDatesChange = ({ startDate, endDate }) => {
  this.props.setStartDate(startDate)
  this.props.setEndDate(endDate)
  }
  
  onFocusChange = (calendarFocused) => this.setState(() => (
    { calendarFocused }
  ))
    
  onTextFilterChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }
    
  onSortByChange = (e) => {
    e.target.value === "date"? this.props.sortByDate() : this.props.sortByAmount()
  }

  render() {  
    return (
    <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
            type="text"
            className="text-input"
            placeholder="Search expenses"
            //Any time you see value like below they are called CONTROLLED INPUT ==> Input controlled by Javascript
            value={this.props.filters.text}
            onChange={this.onTextFilterChange} 
            />
          </div>
          <div className="input-group__item">
            <select
            className="select"
            onChange={this.onSortByChange}
            >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker 
            startDate={this.props.filters.startDate}
            startDateId={"myStartDateId"}
            endDate={this.props.filters.endDate}
            endDateId={"myEndDateId"}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates={true}
            />
          </div>
      </div>
    </div>
    )
 }
}

const mapStateToProps = (state) => {
 return {
  filters: state.filters
 }
}

const mapDispatchToProps = (dispatch) => ({
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter)