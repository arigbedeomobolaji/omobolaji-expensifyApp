//jshint ignore:start
import React from "react"
import { shallow } from "enzyme"
import ExpenseDashboardPage from "../../components/ExpenseDashboardPage"

test("should render expenseDashboardPage correctly", () => {
 const wrapper = shallow(<ExpenseDashboardPage />)
 expect(wrapper).toMatchSnapshot()
})