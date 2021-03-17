import moment from "moment"
import selectExpenses from "../../selectors/expenses.selector"
import expenses from "../fixtures/expense"

test("Should filter by text", () => {
 const filter = {
  text: "e",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
 }

 const filteredExpenses = selectExpenses(expenses, filter)

 expect(filteredExpenses).toEqual([expenses[2], expenses[0]])

})

test("should filter by start date", () => {
 const filter = {
  text: "",
  sortBy: "date",
  startDate: moment(0),
  endDate: undefined
 }
 const filteredExpenses = selectExpenses(expenses, filter)
 expect(filteredExpenses).toEqual([expenses[2], expenses[0]])
})

test("should filter by end Date", () => {
 const filter = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: moment(0).add(2, "days").valueOf()
 }

 const filteredExpenses = selectExpenses(expenses, filter)
 expect(filteredExpenses).toEqual([expenses[0], expenses[1]])
})

test("Should sort by date", () => {
 const filter = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
 }
  const sortedExpenses = selectExpenses(expenses, filter)
  expect(sortedExpenses).toEqual([expenses[2], expenses[0], expenses[1]])

})

test("Should sort by amount", () => {
 const filter = {
  text: "",
  sortBy: "amount",
  startDate: undefined,
  endDate: undefined
 }
 const sortedExpenses = selectExpenses(expenses,filter)
 expect(sortedExpenses).toEqual([expenses[0], expenses[2], expenses[1]])
})