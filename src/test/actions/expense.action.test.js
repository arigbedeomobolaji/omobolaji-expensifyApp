// import react-mock-store and react-thunk
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import { asyncAddExpense ,addExpense, removeExpense, editExpense} from "../../actions/expenses.action"
import expenses from "../fixtures/expense"
import database from "../../firebase/firebase"
// configure redux-mock-store to take advantage of the redux-thunk
const middlewares = [thunk]
const mockstore = configureStore(middlewares)


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
 
 const action = addExpense(expenses[1])
 expect(action).toEqual({
  type: "ADD_EXPENSE",
  expense: expenses[1]
 })
})

// Done let's tell jest that we are running an async function and we call it when we
test("should add expense to database and store", (done) => {
 const store = mockstore({})

 const expenseData = {
  description: "Subscription",
  note: "DSTV Subscription for the month of March",
  createdAt: 34955994040,
  amount: 100000
 }

 store.dispatch(asyncAddExpense(expenseData)).then(() => {
  const actions = store.getActions()
  expect(actions[0]).toEqual({
   type: "ADD_EXPENSE",
   expense: {
    id: expect.any(String),
    ...expenseData
   }
  })
  
  return database.ref(`expenses/${actions[0].expense.id}`).once("value")
 }).then((snapshot) => {
  expect(snapshot.val()).toEqual(expenseData)
  done()
 })
})

test("Should add expense with defaults to database and store", (done) =>  {
 const store = mockstore({})

 const expenseDefault = {
  description: "",
  note: "",
  createdAt: 0,
  amount: 0
 }

 store.dispatch(asyncAddExpense()).then(() => {
  const actions = store.getActions()
  expect(actions[0]).toEqual({
   type: "ADD_EXPENSE",
   expense: {
    id: expect.any(String),
    ...expenseDefault
   }
  })
  
  return database.ref(`expenses/${actions[0].expense.id}`).once("value")
 }).then((snapshot) => {
  expect(snapshot.val()).toEqual(expenseDefault)
  done()
 })
})