//jshint ignore: start
import React from "react"
import { shallow } from "enzyme"
import { ExpenseSummary } from "../../components/ExpenseSummary"
import expenses from "../fixtures/expense"

let totalExpense = expenses[0].amount + expenses[1].amount + expenses[2].amount

test("Should render ExpenseSummary correctly with one expense", () => {
 const wrapper = shallow(<ExpenseSummary expenseCount={ [expenses[0].length] } expensesTotal={ expenses[0].amount } />)
 expect(wrapper).toMatchSnapshot()
})

test("should dipslay correct number of visible expenses", () => {
 const wrapper = shallow(<ExpenseSummary expenseCount={expenses.length} expensesTotal={totalExpense} />)
 expect(wrapper).toMatchSnapshot()
})