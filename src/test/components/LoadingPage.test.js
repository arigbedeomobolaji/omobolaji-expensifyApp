//jshint ignore:start
import React from "react"
import {shallow } from "enzyme"
import LoadingPage from "../../components/LoadingPage"

test("Shouldr render LoadingPage correctly", () => {
 const wrapper = shallow(<LoadingPage />)
 expect(wrapper).toMatchSnapshot()
})