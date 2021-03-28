// jshint ignore:start
import React from "react"
import { shallow } from "enzyme"
import { AddExpensePage } from "../../components/AddExpensePage"
import expenses from "../fixtures/expense"

let asyncAddExpense, history, wrapper

beforeEach(() => {
 asyncAddExpense = jest.fn()
 history = {push: jest.fn()}
 wrapper = shallow(<AddExpensePage asyncAddExpense={asyncAddExpense} history={history} />)
})
test("should render AddExpensePage correctly", () => {
 expect(wrapper).toMatchSnapshot()
})

test("Should render AddExpensePage correctly on submit", () => {
 wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1])
 expect(history.push).toHaveBeenLastCalledWith("/")
 expect(asyncAddExpense).toHaveBeenLastCalledWith(expenses[1])
})