import firebase from "firebase"
import expenses from "../test/fixtures/expense"

const firebaseConfig = {
 apiKey: process.env.FIREBASE_API_KEY,                   
 authDomain:process.env.FIREBASE_AUTH_DOMAIN,                   
 databaseURL: process.env.FIREBASE_DATABASE_URL,                    
 projectId: process.env.FIREBASE_PROJECT_ID,                       
 storageBucket: process.env.FIREBASE_STORAGE_BUCKET,                           
 messagingSenderId:process.env.FIREBASE_MESSAGING_SENDER_ID,                               
 appId: process.env.FIREBASE_APP_ID,                    
 measurementId: process.env.FIREBASE_MEASUREMENT_ID                          
}

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

export {
  firebase,
  database as default
}

// Creating database and writing into it any datatype be it array, object, string, number, boolean etc
// When we are working with firebase we are not limited to a few datatype but all the datatye alllowed in JS. 

/* database.ref().set({
 name: "Arigbede Omobolaji Paul",
 age: 25,
 stressLevel: 6,
 job: {
  title: "Software Developer",
  company: "Google"
 },
 isSingle: true,
 location: {
  city: "Obokun",
  country: "Nigeria"
 }
}).then(() => {
 console.log("Data was successfully saved!!!")
}).catch((e) => {
 console.log("An error has occurred", e)
}) 

 */
// firebase.database() ==> firebase is not used only gor creating databse it does other functionalities things like authentication, file hosting, functions all of these exist in the web app and we have access to it via the firebase module.
// If i want the databse related features I can call them by using firebase,database(), if i wan the authentication we can get that by calling ==> firebase.auth()firebase.functions() same goes for functions etc
// I can also break firebase,database() into a var called maybe DATABASE AS i did above which i can then ref
// What exactly is .ref() doing in firebase.database().ref()
// ref() is the short for referencr and this gives us a reference to a specific part of our database. We don't pass anything to our databse we are getting reference to the root of the database. If we pass a colection/table in we are getting a reference to the rroot the table/collection

// set() is used to set a value for that reference. You don't have to pass an object to set we can pass a string, number boolean etc and it overrides the previous ones. i.e. it's going to completely wipe the original reference then set it to the new/latest one. It id important to note that at least one argument must be passed to set

// database.ref().set("true")

// PERFORMING UPDATE IN FIREBASE
// To update a part of our database we need to pass something to ref.
// What we passed will target the child of the root. if we passed and object {
 // "age": 27
// }
// To update age we do this ===> database.ref("age").set(newValue)
/* database.ref("name").set("Arigbede Omobolaji") */
// To update properties of an object who is a child of the root database
/* database.ref("location/city").set("Ikeja") */
// Here we didn't have reference to the root node nor the location object but to the city property in the location object
/* 
// Setting a new child in the root database
database.ref("attributes").set({
 height: "1.96m",
 weight: "60kg"
}).then(() => {
 console.log("Attributes field successfully added")
}).catch((e) => {
 console.log("error:", e )
})
*/

// In Short
// We use SET ==> to set a value for the specific reference 
// We use REF ==> to pick which part of the database we are trying to change
// All the process above is asynchronous.
// We need a way to actually know if the data has chnaged or failed to change for some reason. 


// removing data can be done via two ways
/* // 1. using remove()
database.ref("isSingle").remove()
.then(() => {
 console.log("isSingle successfully removed")
}).catch((error) => {
 console.log("error in removing data:", error)
}) */

// 2. using set(null)  ==> passing nullfor the new value is equivalent to calling remove()
// database.ref("isSingle").set(null)

// However remove() is way more explicit so we're going to be sticking with remove
// UPDATING ==> We use the update() on the ref() method. it only update in the root node so it doesn't update nested object
// We're going into nested object it is not going to update it. It only updates the root element/field. It always am object
// database.ref().update({
//  name: "Azeez Sodiq",
//  age: 27,
//  job: "Software Developer", //we can add new property to our databse
//  isSingle: null, //We can remove element from our databse using null as value
//  "location/city": "Bayelsa" //We can update nested object using the / (forward slash) provided by firebase

// })
/* 
// Exercise
database.ref().update({
 stressLevel: 9,
 "job/company": "Amazon",
 "location": {
  city: "Seattle",
  country: "United States of America"
 }
}).then(() => {
 console.log("Data was successfully updated!!")
}, (error) => {
  console.log("unable to update:", error)
})
*/

// Reading data from atabse 
// We can get this done in two ways
// One that doesn't get notified from the database if data has changed unless we actually make a query to the DB we use once it . You can also pass a child to ref both when using once and on
// database.ref().once("value")
//  .then((snapshot) => {
//  const val = snapshot.val()
//  console.log(val)
//  }).catch((error) => {
//   console.log("Unable to read data:", error)
//  })
// What of when want the server notify us of changes we use ===> on() ==> it's going to allow us to listen to something over and over again
// This doesn't use a promise because the goal is to run the callback once and again when chnages are made to our database.
/* const onValueChange = database.ref().on("value", (snapshot) => {
 console.log(snapshot.val())
}, (e) => {
 console.log("Unable to subscribe:", e)
})

setTimeout(() => {
 database.ref().update({
  age: 29
 })
}, 3500)

setTimeout(() => {
 database.ref().update({
  age: 30
 })
}, 8500)

setTimeout(() => {
 database.ref().off("value", onValueChange)
 // database.ref().off("a particular subscription")
}, 10000)

setTimeout(() => {
 database.ref().update({
  age: 31
 })
}, 13500)
 */
// n case the user moves from our website we can use unsubscribe them from our database bcus we don't want to waste resources and this can be done via ===> off()
// Assuming we are having multiple subscription, We can also unsubscribe from one by passing the varibleName of the function we are trying to unsubscribe frm into the ===> off()

/* const onMessageChange = database.ref().on("value", (snapshot) => {
 const  { name, job} = snapshot.val()
 const { title, company } = job
 console.log(`${name} is a ${title} at ${company}`)
})

setTimeout(() => {
 database.ref().update({
  name: "Azeez Sodiq",
  "job/company": "Amazon"
 })
}, 13500)

 */
/* 
It's wonderful having a sister like. Having you is like having a lifetime companion who loves and cherish me simply because *I am OMOBOLAJI*. Happy Birthday to my gist partner, confidant and *my small mom*. I pray that as you celebrate your birthday, boundary Lines shall fall for you in pleasant places, The lord will rises upon you and his glory will appears over you. Nations will come to your light and the kings to the brightness of your dawn. Nations that don't know you will run to you. He shall fulfill all your heart desires and continuously make you his beloved. Thanks for the advise, encouragement and for trusting in me.
*/


// Saving array to our firebase database
//  We can save array in pur firebase databse using the traditional method
// accessing the data by id is not feasible so we need to use another method
/* const notes = [
  {
    id: 1,
    title: "Forex Technical Analysis",
    body: " This book will give you detailed insight on the largest trading market using Technical Indicators and price actions"
  },
  {
    id: 2,
    title: "Introduction to Data Structures and Algorithms with Javascript",
    body: "This book first of its kind introduces you to the concept of datastructures in Javascript and the different types/kinds of algorithms that can be implemented using Javascript"
  }, {
    id: 3,
    title: "Thing and grow rich",
    body: "A book by Napheleon Hills it's a great book to have in you shelf."
  }
] */

// We can then set it using firebase .set() but this produces what we ain't expecting
// database.ref("notes").set(notes)

// To effieciently set up arrays in our database we use the push method as follows
// It generates a new child location using a unique key 
/* 
Our data collection will be in form
const notes = {
  id: {
    prop1: "value1",
    prop2: "value2",
    ......
    propn: "valuen"
  }
}
*/
// const noteItems = database.ref("notes").push({
//   title: "Introduction to Data Structures and Algorithms with Javascript",
//   body: "This book first of its kind introduces you to the concept of datastructures in Javascript and the different types/kinds of algorithms that can be implemented using Javascript" 
// })

// To update our colelction can be done by targeting one of the ids in our ref field
// database.ref("notes/-MWTwRlN62TP8kIITp8n").update({
//   body: "Ewo this book is for Javascript developers just forget about the rest"
// })
// database.ref("notes")
// .once("value")
// .then((snapshot) => {
//   console.log(snapshot.val())
// })
// .catch((error) => {
//   console.log("Unable to get snapshot:", error)
// })

// Exercise on push and storing list items
// expenses.forEach(({description, note, amount, createdAt}) => {
//  database.ref("expenses").push({
//    description,
//    note,
//    amount,
//    createdAt
//  }) 
// });


/* const onExpensesChange = database.ref("expenses")
.on("value", (snapshot) => {
  const expenses = []
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses)
}, (error) => {
  console.log("fail to fetch expenses", error)
}) */

// Using the child_removed, child_added, child_changed, child_moved event

/* // child_removed event
database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key,snapshot.val())
}) */

/* // child_changed
database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val())
}) */

// setTimeout(() => {
//   database.ref("expenses/-MWU7qOEJNPHmOTu9fA5").update({
//     note: "My House rent for the the month of February"
//   })
// }, 5000)
/* 
// child_added: it doesn't get with only new data but also with the existing ones
database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})
 */
// database.ref("expenses").push({
//   description: "Bill",
//   note: "Electricity bill for the month of March",
//   createdAt: 9922992992,
//   amount: 8800
// })



