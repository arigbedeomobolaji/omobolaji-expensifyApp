import moment from "moment"
// FIXTURES: in the test worl, a fixture is just your baseline test data so you can think of it as dummy data test data. 
export default [{
 id: "1",
 description: "Rent",
 note: "My Rent for March",
 amount: 5000,
 createdAt: moment(0).valueOf()
}, {
 id: "2",
 description: "Gum",
 note: "My chewing Gum for reading",
 amount: 100,
 createdAt: moment(0).subtract(4, "days").valueOf()
}, {
 id: "3",
 description: "Coffee",
 note: "My early morning coffee",
 amount: 500,
 createdAt: moment(0).add(4, "days").valueOf()
 }]