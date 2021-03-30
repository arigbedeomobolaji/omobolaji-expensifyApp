// import react-mock-store and react-thunk
import configureStore from "redux-mock-store"
import thunk from "redux-thunk"
import {
 asyncAddExpense,
 addExpense,
 removeExpense,
 asyncRemoveExpense,
 editExpense,
 asyncEditExpense,
 setExpenses,
 asyncSetExpenses
} from "../../actions/expenses.action"
import expenses from "../fixtures/expense"
import database from "../../firebase/firebase"
// configure redux-mock-store to take advantage of the redux-thunk
const middlewares = [thunk]
const mockstore = configureStore(middlewares)

beforeEach((done) => {
 const expenseData = {}

 expenses.forEach(({id, description, note, createdAt, amount}) => {
  expenseData[id] = { description, note, createdAt, amount }
 })

 database.ref("expenses").set(expenseData).then(() => {
  done()
 })
})

test("Should setup remove expense action object", () => {
 const action = removeExpense("123abc")
 expect(action).toEqual({
  type: "REMOVE_EXPENSE",
  id: "123abc"
 })
})

test("Should remove expense from database", (done) => {
 const store = mockstore({})
 const id = expenses[1].id

 store.dispatch(asyncRemoveExpense(id)).then(() => {
  const actions = store.getActions()
  expect(actions[0]).toEqual({
   type: "REMOVE_EXPENSE",
   id
  })
  return database.ref(`expenses/${id}`).once("value")
   .then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
   })
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

test("Should update expense in firebase", (done) => {
 const store = mockstore({})
 const id = expenses[1].id
 const updates = {
  description: "new updates",
  amount: 1234.59
 }
 store.dispatch(asyncEditExpense(id, updates)).then(() => {
  const actions = store.getActions()
  expect(actions[0]).toEqual({
   type: "EDIT_EXPENSE",
   id,
   updates
  })
  return database.ref(`expenses/${id}`).once("value")
 }).then((snapshot) => {
  expect({
   id: snapshot.key,
   ...snapshot.val()
  }).toEqual({
   ...expenses[1],
   ...updates
  })
  done()
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

test("should setup set expenses action object with data", () => {
 const action = setExpenses(expenses)
 expect(action).toEqual({
  type: "SET_EXPENSES",
  expenses
 })
})

test("Should fetch expenses from firebase", (done) => {
 const store = mockstore({})
 store.dispatch(asyncSetExpenses()).then(() => {
  const actions = store.getActions()
  expect(actions[0]).toEqual({
   type: "SET_EXPENSES",
   expenses
  })
  done()
 })
})