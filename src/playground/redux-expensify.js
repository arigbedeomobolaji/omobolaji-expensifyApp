//jshint ignore: start

import { createStore, combineReducers } from "redux"
import { v4 as uuid } from "uuid"

//ADD_EXPENSE
const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0 } = {}) => ({
 type: "ADD_EXPENSE",
 expense: {
   id: uuid(),
   description,
   note,
   amount,
   createdAt
 }
})

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
 type: "REMOVE_EXPENSE",
 id
})

///EDIT_EXPENSE
const editExpense = (id, updates) => ({
 type: "EDIT_EXPENSE",
 id,
 updates
})

//SET_TEXT_FILTER
const setTextFilter = ( text = "" ) => ({
  type: "SET_TEXT_FILTER",
  text
 })
 //SORT_BY_DATE
 const sortByDate = () => ({
  type: "SORT_BY_DATE",
 })
 //SORT_BY_AMOUNT
 const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
 })
 //SET_START_DATE
 const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate
 })
 //SET_END_DATE
 const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate
 })

 
//expenseReducerDefaultState
const expenseReducerDefaultState = []
// expensesReducer
const expensesReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type){
    case "ADD_EXPENSE":
      return [
        ...state,
        action.expense
      ]
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id)
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

// filtersReducerDefaultState
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
}

const filtersReducer =  (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      }
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "Date"
      }
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "Amount"
      }
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      }
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

// getVisibleExpense
const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy.toLowerCase() === "date") {
      return a.createdAt < b.createdAt ? 1: -1
    } else if (sortBy.toLowerCase() === "amount") {
      return a.amount < b.amount? 1: -1
    }
  })
 }

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
)

store.subscribe(() => {
  const {expenses, filters} = store.getState()
  const visibleExpense = getVisibleExpense(expenses, filters)
  console.log(visibleExpense)
})


const expenseOne = store.dispatch(addExpense({
  description: "Rent",
  note: "Last House Rent",
  amount: 4500,
  createdAt: 1200
})) 


const expenseTwo = store.dispatch(addExpense({
  description: "Coffee",
  note: "Early Moring coffee",
  amount: 5000
}))

const expenseThree = store.dispatch(addExpense({description: "Banana", note: "This is my best fruit", amount: 4000, createdAt: 50000}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 300 }))

// store.dispatch(setTextFilter())

// store.dispatch(setTextFilter("rent"))

// store.dispatch(sortByDate())

store.dispatch(sortByAmount())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))


//our final state blueprint
const demoState = {
  expenses: [{
    id: "kfjdhjdhdjdjdfhdf",
    description: "January Rent",
    note: "This is the last payment for this address",
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: "rent",
    sortBy: "date", // Date || amount
    startDate: undefined,
    endDate: undefined
  }
}
