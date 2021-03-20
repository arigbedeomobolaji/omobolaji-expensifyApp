//jshint ignore:start
import React from "react"
import { shallow } from "enzyme"
import { ExpenseListItem } from "../../components/ExpenseListItem"
import expenses from "../fixtures/expense"

test("should render ExpenseListItem component correctly", () => {
 const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
 expect(wrapper).toMatchSnapshot()
})
