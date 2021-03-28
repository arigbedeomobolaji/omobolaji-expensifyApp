import { v4 as uuid } from "uuid"
import database from "../firebase/firebase"

// What's happening in our code before async redux
// 1. Component calls action generator
// 2. action generation returns an object
// 3. component dispatches object
// 4. redux store changes

// What happens when we use async redux
// 1. Component calls action generator
// 2. action generator returns a function
// 3. component dispatches function (?)
// 4. function run (has the ability to dispatch other actions and do whatever it wants)

//ADD_EXPENSE
export const addExpense = (expense = {}) => ({
 type: "ADD_EXPENSE",
 expense
})

// async addExpense
export const asyncAddExpense = (expenseData = {}) => {
  // this is the function returned by the redux action generator
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt }
    return database.ref("expenses").push(expense).then((snapshot) => {
      // What I'm doing here is that I'm updating the redux store so that as the database changes reduc store also change
      dispatch(addExpense({
        id: snapshot.key,
        ...expense
      }))
      console.log("Expense successfully added to database and redux  store!!!")
    })
  }
}

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
 type: "REMOVE_EXPENSE",
 id
})

///EDIT_EXPENSE
export const editExpense = (id, updates) => ({
 type: "EDIT_EXPENSE",
 id,
 updates
})