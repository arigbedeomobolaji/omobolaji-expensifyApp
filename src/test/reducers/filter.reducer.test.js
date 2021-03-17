import moment from "moment"
import filtersReducer from "../../reducers/filters.reducer"

test("should setup filters with defualt value", () => {
 const state = filtersReducer(undefined, { type: "@@init" })
 expect(state).toEqual({
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
 })
})

test("should set sortBy to amount", () => {
 const state = filtersReducer(undefined, {type:"SORT_BY_AMOUNT"})
 expect(state).toEqual({
  text: "",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
  sortBy: "amount"
 })
})

test("should set sortBy to date", () => {
 const currentState = {
  sortBy: "amount"
 }
 const action = { type: "SORT_BY_DATE" }
 const state = filtersReducer(currentState, action)
 expect(state.sortBy).toBe("date")
})

test("should set text filter", () => {
 const state = filtersReducer(undefined, { type: "SET_TEXT_FILTER", text: "Rent" })
 expect(state).toEqual({
  text: "Rent",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
 })
})

test("should set start date filter", () => {
 const state = filtersReducer(undefined, {type: "SET_START_DATE", startDate: moment(0).valueOf()})
 expect(state).toEqual({
  text: "",
  startDate: moment(0).valueOf(),
  endDate: moment().endOf("month"),
  sortBy: "date"
 })
})

test("should set end date filter", () => {
 const state = filtersReducer(undefined, {type: "SET_END_DATE", endDate: moment(200000000).valueOf()})
 expect(state).toEqual({
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment(200000000).valueOf()
 })
})