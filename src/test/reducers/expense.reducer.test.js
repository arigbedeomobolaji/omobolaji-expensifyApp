import moment from "moment"
import expenseReducer from "../../reducers/expenses.reducer"
import expenses from "../fixtures/expense"

test("should test expense reducer with default value", () => {
 const state = expenseReducer(undefined, { type: "@@init" })
 expect(state).toEqual([])
})

test("should add new expense", () => {
 const expense = {
  description: "Coffee",
  note: "Early morning coffee",
  amount: 203400,
  createdAt: moment(0)
 }

 const action = {
  type: "ADD_EXPENSE",
  expense
 }
 const state = expenseReducer(expenses, action)
 expect(state).toEqual([...expenses, expense])
})

test("should remove expense by id", () => {
 const action = {
  type: "REMOVE_EXPENSE",
  id: "2"
 }
 const state = expenseReducer(expenses, action)
 
 expect(state).toEqual([expenses[0], expenses[2]])
})

test("should not remove expense if id not found", () => {
 const action = {
  type: "REMOVE_EXPENSE",
  id: "1222"
 }

 const state = expenseReducer(expenses, action)

 expect(state).toEqual(expenses)
})

test("should edit expense by id", () => {
 const updates = {
  description: "Bill",
  note: "Electricity Bill for the month of MarchMy",
  amount: 23456,
  createdAt: moment(0).subtract(4, "days")
 }

 const action = {
  type: "EDIT_EXPENSE",
  updates,
  id: "3"
 }

 const state = expenseReducer(expenses, action)
 expect(state[2]).toEqual({
  ...expenses[2],
  ...updates
 })
})

test("should not edit expense if id not found", () => {
 const updates = {
  description: "Bill",
  note: "Electricity Bill for the month of MarchMy",
  amount: 23456,
  createdAt: moment(0).subtract(4, "days")
 }

 const action = {
  type: "EDIT_EXPENSE",
  updates,
  id: "-20"
 }

 const state = expenseReducer(expenses, action)
 expect(state).toEqual(expenses)
})