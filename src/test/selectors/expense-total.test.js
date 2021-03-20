import expenseTotal from "../../selectors/expense-total"
import expenses from "../fixtures/expense"

test("should return 0 if no expense", () => {
 const result = expenseTotal()
 expect(result).toBe(0)
})

test("Should correctly add up a single expense", () => {
 const result = expenseTotal([expenses[2]])
 expect(result).toBe(expenses[2].amount)
})

test("should correctly add up multiple expenses", () => {
 const total = expenses[0].amount + expenses[1].amount + expenses[2].amount
 const result = expenseTotal(expenses)
 expect(result).toBe(total)
})