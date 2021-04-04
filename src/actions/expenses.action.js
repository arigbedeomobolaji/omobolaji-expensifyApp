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
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt }
    return database.ref(`users/${uid}/expenses`).push(expense).then((snapshot) => {
      // What I'm doing here is that I'm updating the redux store so that as the database changes reduc store also change
      dispatch(addExpense({
        id: snapshot.key,
        ...expense
      }))
    })
  }
}

//REMOVE_EXPENSE
export const removeExpense = (id) => ({
 type: "REMOVE_EXPENSE",
 id
})

export const asyncRemoveExpense = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense(id))
    })
  }
}

///EDIT_EXPENSE
export const editExpense = (id, updates) => ({
 type: "EDIT_EXPENSE",
 id,
 updates
})

export const asyncEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates))
    })
  }
}

// SET_EXPENSES => fetches expenses in the databse and save it as an array
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses
})

export const asyncSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`).once("value").then((snapshot) => {
      const expenses = []
      // const firebaseExpenses = snapshot.val()
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      dispatch(setExpenses(expenses))
    })
  }
};