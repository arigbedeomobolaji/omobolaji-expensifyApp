// getVisibleExpense
import moment from "moment"
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
   const createdAtMoment = moment(expense.createdAt)
   const startDateMatch = startDate ? moment(startDate).isSameOrBefore(createdAtMoment) : true
   const endDateMatch = endDate ? moment(endDate).isSameOrAfter(createdAtMoment) : true
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