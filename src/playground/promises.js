// promises is a way to sync up our asynchronous functions
// We use promise whenever we are dealing with a longn running tasks, tasks like the ones using internet connection, tasks like fecthing file from or filesystem, taking camera shot via web cam etc
// Promise.then() ==> .then() let's register a callback and that callback is going to fire when and if the promise resolves.  
// You can either RESOLVE or REJECT a promise you can't have both at the same time. We can only use one RESOLVE or REJECT at a particulare scope in our code unless we are using if statement. We can only pass a single argument to resolve and reject. and the first resolve or reject get execute and others in the same context get ignored.

// When we resolve a promise we say hey the things that we expected to happen has happened so you said I want to sart writing data and the data was written. 

// If we want to do something when an error happens . then after the promise.then() we append a .catch() method to it t change the error. catch() get called with a single function and this function fires when the function rejects and we dp get access to that data
// promise.then().catch()

// Also promise.then() can take a second argument which is a function this is used in place of the catch() method if you only wish ni oo... We're just informing you.
const addSum = new Promise((resolve, reject) => {
 setTimeout(() => {
  // resolve((a,b) => {
  //  return a + b
  // })
  reject("An Error has occurred!!!")
 }, 4000);
})

addSum.then((sum) => {
 const summation = sum(10,20)
 console.log(summation)
}).catch((error) => {
 console.log("error:", error)
})