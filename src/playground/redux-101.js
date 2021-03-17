//jshint ignore:start

//createStore is something that we're going to call once to create the store once we have the store in place we're not going to need to call it again but we do have to import it in order to kick things off. The function declared inside the createStore fuction is returned implicitly for the first time.
// store.dispatch() when brought into the mix called the function inside the createStore implicilitly. It causes our createStore function to rerun.

//The second parameters passed into createStore is action

//Actions allows to actually change th redux store. It nothing more than an object that get sent to the store. and this object describes the type of action  we did like to take.
//convention for naming action in redux is using UPPERCASE FIRST_SECOND_THIRD_WORD
//store.dispatch() allows us to send an action to redux store and then the store can do something with this information
//SUMMARY ON ACTIONS / RECAP ON ACTIONS
//Actions are our way of communicating with the store and action is nothing more than an object
//When we created out action we need a way to get it to the store and STORE.DISPATCH() handles that job for us.


//SUBSCRIBING AND DYNAMIC ACTIONS
/* 
==> How to watch for changes in the Store
We need to dynamically rerun store.getState() to automatically render changes in our appliction

==> How to dispatch an action and actually pass some data along as well. 


1. ===> How to watch for changes in the REDUX STORE
TO get that done, Redux actually gives us store.subscribe() ==> store that subscribes get called with a function and we pass a single funtion to it and this function get called every single time the store changes.
To unsubscribe from an action when store the store.subscribe() to a varaible and we call it when we want to store dispatching (unsubscribe) from other actions.  

// REDUCER
Actions describe the fact that something happened, but don't specify how the application's state changes in response. This is the job of reducers. It is the reducers that determines what to do based on the action and how do we want to change the State.


//Action Generators ===>  are functions that return action objects. i.e. all the actions we've created down below are going to be created in one place and we will have a function we can call to generate the action objects.
// We are going to prefer action generators over inline action object because
//1. it makes it easier to avoid typos and we also get added benefit of auto completion of those function names. 


//reducer - Key Attributes
// 1. Reducers are pure function
// What is a pure function: A pure function has the following qualities ==> The output is only determined by the input (i.e. It doesn't use anything outside the function scope and it doesn't change anything outside either.). A pure function doesn't interact with outside of it scope.
//2. Never change state or action. Since we have state and action passed into our function we don't want to directly change these things.

/* //dynamically change state when there is changes
store.subscribe(() => {
 console.log(store.getState())
}) */

//To unsubscribe after some dispatch/action then name the function as follows

// Using dipsatch function, you can also pass other values which  are yours to the action object
//NB ===> type must always be declared or else it gonna result to an error

/*
// Then call unsubscribe where you want it to stop subscribing
unsubscribe() */

/* ******************************************************************************************************************* */
/* ******************************************************************************************************************* */
/* ******************************************************************************************************************* */
/* Code Below */

import { createStore } from "redux"

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {} ) => ({
  type: "DECREMENT",
  decrementBy
})

const resetCount = () => ({
  type: "RESET"
})

const setCount = ({ count }) => ({
  type: "SET",
  count
})

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      }
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      }
    case "SET":
      return {
        count: action.count
      }
    case "RESET":
      return {
        count: 0
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(decrementCount({decrementBy: 100}))
store.dispatch(resetCount())
store.dispatch(setCount({count: 50}))
store.dispatch(incrementCount({ incrementBy: 200 }))

/* ******************************************************************************************************************* */
/* ******************************************************************************************************************* */

