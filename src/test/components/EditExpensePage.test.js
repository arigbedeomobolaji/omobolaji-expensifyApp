// jshint ignore:start
import React from "react"
import { shallow } from "enzyme"
import { EditExpensePage } from "../../components/EditExpensePage.js"
import expenses from "../fixtures/expense"

let onSubmit, history, asyncRemoveExpense, editExpense, wrapper
beforeEach(() => {
 // onSubmit = jest.fn()
 editExpense = jest.fn()
 history = { push: jest.fn() }
 asyncRemoveExpense = jest.fn()
 wrapper = shallow(<EditExpensePage editExpense={editExpense} asyncRemoveExpense={asyncRemoveExpense} history={history} expense={expenses[1]}/>)
})

test("should render expense page correctly", () => {
 expect(wrapper).toMatchSnapshot()
})

test("should handle remove expense", () => {
 wrapper.find("button").simulate("click")
 expect(history.push).toHaveBeenLastCalledWith("/")
 expect(asyncRemoveExpense).toHaveBeenLastCalledWith(expenses[1].id)
})

test("Should handle editExpense", () => {
 wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1])
 expect(history.push).toHaveBeenLastCalledWith("/")
 expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})