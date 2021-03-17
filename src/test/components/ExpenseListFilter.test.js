//jshint ignore:start
import React from "react"
import { shallow } from "enzyme"
import { ExpenseListFilter } from "../../components/ExpenseListFilter"
import {filters, altFilters} from "../fixtures/filters"

let setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate, wrapper

beforeEach(() => {
 setStartDate = jest.fn()
 setEndDate = jest.fn()
 setTextFilter = jest.fn()
 sortByAmount = jest.fn()
 sortByDate = jest.fn()
 wrapper = shallow(<ExpenseListFilter
  filters={filters}
  setStartDate={setStartDate} 
  setEndDate={setEndDate}
  setTextFilter={setTextFilter}
  sortByDate={sortByDate}
  sortByAmount={sortByAmount}
 />)
})

test("Should render ExpenseListFilter correctly", () => {
 expect(wrapper).toMatchSnapshot()
})

test("should render ExpenseListFilter with alt data correctly", () => {
 wrapper.setProps({
  filters: altFilters
 })
 expect(wrapper).toMatchSnapshot()
})

test("should handle text change", () => {
 wrapper.setProps({
  filters: altFilters
 })
 wrapper.find("input").prop("onChange")({
  target: {value: altFilters.text}
 })
 expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text)
})

test("Should sort by date", () => {
 wrapper.find("select").prop("onChange")({
  target: {value: filters.sortBy}
 })
 expect(sortByDate).toHaveBeenLastCalledWith()
})

test("Should sort by Amount", () => {
 wrapper.setProps({
  filters: altFilters
 })
 wrapper.find("select").prop("onChange")({
  target: {value: altFilters.sortBy}
 })
 expect(sortByAmount).toHaveBeenLastCalledWith()
})

test("Should handle date changes", () => {
 const startDate = altFilters.startDate
 const endDate = altFilters.endDate
 wrapper.setProps({
  filters: altFilters
 })
 wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
  startDate,
  endDate
 })
 expect(setStartDate).toHaveBeenLastCalledWith(startDate)
 expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test("Should handle date focus change", () => {
 const calendarFocused = "startDate"
 wrapper.setProps({
  filters: altFilters
 })
 wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(calendarFocused)
 expect(wrapper.state("calendarFocused")).toBe(calendarFocused)
})