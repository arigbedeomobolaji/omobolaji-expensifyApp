// jshint ignore:start

import React from "react"
import { shallow } from "enzyme"
import moment from "moment"
import ExpenseForm from "../../components/ExpenseForm"
import expenses from "../fixtures/expense"

test("Should render ExpenseForm Correctly", () => {
 const wrapper = shallow(<ExpenseForm />)
 expect(wrapper).toMatchSnapshot()
})

test("Should render ExpenseForm coreectly with exepense data", () => {
 const wrapper = shallow(<ExpenseForm expense={expenses[0]} /> )
 expect(wrapper).toMatchSnapshot()
})

test("Should render error for invalid form submission", () => {
 // render te expense form
 const wrapper = shallow(<ExpenseForm />)
 // make sure the snapshot renders the expenseForm correctly before using an event handler
 expect(wrapper).toMatchSnapshot()
 // simulate an event in the ExpenseForm component
 wrapper.find("form").simulate("submit", {
  preventDefault: () => {}
 })
 expect(wrapper.state("error").length).toBeGreaterThan(0)
 expect(wrapper).toMatchSnapshot()
})

test("Should set description on input change", () => {
 const value = "New Description"
 // Goal here is to
 // 1. render expense form
 const wrapper = shallow(<ExpenseForm />)
 // 2. change the input
 wrapper.find("input").at(0).simulate("change", {
  target: {value}
 })
 // 3. make an assertion
 expect(wrapper.state("description")).toBe(value)
 expect(wrapper).toMatchSnapshot()
})

test("Should set note on textarea change", () => {
 const value = "House Rent for the month of Janaury"
 const wrapper = shallow(<ExpenseForm />)
 wrapper.find("textarea").simulate("change", {
  target: {value}
 })

 expect(wrapper.state("note")).toBe(value)
 expect(wrapper).toMatchSnapshot()
})

test("should set amount if valid input", () => {
 const value = "23.50"
 const wrapper = shallow(<ExpenseForm />)
 wrapper.find("input").at(1).simulate("change", {
  target: {value}
 })
 expect(wrapper.state("amount")).toBe(value)
 expect(wrapper).toMatchSnapshot()
})

test("should not set amount if invalid input", () => {
 const value = "12.222"
 const wrapper = shallow(<ExpenseForm />)
 wrapper.find("input").at(1).simulate("change", {
  target: {value}
 })
 expect(wrapper.state("amount")).toBe("")
 expect(wrapper).toMatchSnapshot()
})

// test spies : The whole point of spies are to create functions that are fake functions. They are created by jest for us and we can make assertions about them
// Using test stp is going to allow us to do powerful things
// 1. be able to pass the spy into the component that we render 
// 2. Be able to simulate things like the form submission and actually ensures that every thing went well. 
test("Should call onSubmit props for valid form submission", () => {
 const {description, amount, note, createdAt} = expenses[0]
 // step 1: create this fake function
 const onSubmitSpy = jest.fn()
 // step 2: renders ExpenseForm (JSX)
 const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
 // step 3: simulate form submission
 wrapper.find("form").simulate("submit", {
  preventDefault: () => { }
 })
 // step 4: make assertion
 expect(wrapper.state("error")).toBe("")
 expect(onSubmitSpy).toHaveBeenLastCalledWith({
  description,
  amount,
  note,
  createdAt
 })
})

test("Should set new date on date change", () => {
 const now = moment()
 const wrapper = shallow(<ExpenseForm />)
 wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now)
 expect(wrapper.state("createdAt")).toEqual(now)
})

test("Should set calendar focus on change", () => {
 const focused = true
 const wrapper = shallow(<ExpenseForm />)
 wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({
  focused
 })
 expect(wrapper.state("isCalendarFocused")).toBe(focused)
})


// Spies or marked function allows us to create a little function we can then pass it into our components or anything else and we can make sure that when an event happens/occurs like a form submission, it was called, called a cetain number of times or calld with specific data. 