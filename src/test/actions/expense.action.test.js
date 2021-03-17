import {addExpense, removeExpense, editExpense} from "../../actions/expenses.action"

test("Should setup remove expense action object", () => {
 const action = removeExpense({id: "123abc"})
 expect(action).toEqual({
  type: "REMOVE_EXPENSE",
  id: "123abc"
 })
})

test("should setup edit expense action object", () => {
 const action = editExpense("123abc", {
  description: "Rent",
  amount: 43400
 })
 expect(action).toEqual({
  type: "EDIT_EXPENSE",
  id: "123abc",
  updates: {
   description: "Rent",
   amount: 43400
  }
 })
})

test("Should setup add expense action object with provided value", () => {
 const expenseData = {
  description: "Rent",
  amount: 43400,
  note: "Rent for the month of January",
  createdAt: 23233442
 }

 const action = addExpense(expenseData)
 expect(action).toEqual({
  type: "ADD_EXPENSE",
  expense: {
   ...expenseData,
   id: expect.any(String)
  }
 })
})

test("should setup add expense action object with default value", () => {
 const action = addExpense()
 expect(action).toEqual({
  type: "ADD_EXPENSE",
  expense: {
   id: expect.any(String),
   description: "",
   note: "",
   amount: 0,
   createdAt: 0
  }
 })
})