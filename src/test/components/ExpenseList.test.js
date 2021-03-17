// When we are testing react component we want to make sure we are testing the unconnected version because we want to be able to provide a set of dynamic props.
//jshint ignore: start
import React from "react"
import { shallow } from "enzyme"
import { ExpenseList } from "../../components/ExpenseList"
import expenses from "../fixtures/expense" 

test("should render ExpenseList with expenses correctly", () => {
 const wrapper = shallow(<ExpenseList expenses={expenses} />)
 expect(wrapper).toMatchSnapshot()
})

test("should render ExpenseList correctly with empty expenseList", () => {
 const wrapper = shallow(<ExpenseList expenses={[]} />)
 expect(wrapper).toMatchSnapshot()
})