//
// OBJECT DESTRUCTURING
// 

/* const person = {
 name: "Arigbede Omobolaji",
 age: 20,
 sex: "Male",
 location: {
  city: "Ogu",
  state: "Rivers State",
  temp: 28
 }
}

const { name, age, location } = person
const { city, state } = location

console.log(`${name} is ${age}.`)
console.table(`${city} is in ${state}`)

//With destructuring we can rename the local variable to another name using (:)
const { temp: temperature } = location
console.log(`The temperature in ${city}, ${state} is ${temperature}.`)


//We can set default value using (=) on the local variable. It only going to use the default value if there is no value on the object we're destructuruing.
const { complexion = "fair" } = person
console.log(complexion)

// Setting default value and renaming local variable
const { sex: gender = "unknown" } = person
console.log(gender)

*/

/*
const book = {
 title: "Ego is the Enemy",
 author: "Ryan Holiday",
 publisher: {
  name: "Penguin"
 }
}

const { name: publisherName = "Self-Published" } = book.publisher
console.log(publisherName)

 */

 // for object destructuring we use curly braces {}, while for array destructuring we use square bracket [] 
 
 //
 // ARRAY DESTRUCTURING
 // 
 
 const address = ["1299 Tende Ama Street", "Ogu", "Rivers", "19147"]
 
// What goes inside an array destructuring is an ordered list of varible names
/*
const [street, city, state, zip] = address
console.log(`You resides in ${street} ${city} town ${state} state with Zip Code ${zip}` )
*/

// to access only city and state you can either do one of the following
/* 
// 1. leave off the zip variabe
const [street, city, state] = address
console.log(`You resides in ${city} in ${state} State`) */

/* //or 2. Leave of Street (but the COMMA SHOULD BE IN PLACE) and zip
const [, city, state, ] = address
console.log(`You resides in ${city} town, ${state} State` )
*/
/* 
//If we wan to only use state when we do as follows the ones preceeding it we use , to denote them.
const [, , state] = address
console.log(state)


array default parameter can be done using (=)
*/

const item = ["Coffee (iced)", "$3.00", "$3.50", "$3.75"]

const [coffee = "coffeeww", , medium] = item
console.log(`a medium ${coffee} costs ${medium}`)