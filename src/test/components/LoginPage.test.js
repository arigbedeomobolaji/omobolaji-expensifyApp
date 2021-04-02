//jshint ignore:start
import React from "react"
import { shallow } from "enzyme"
import { LoginPage } from "../../components/LoginPage"
import { startLogout } from "../../actions/auth"

test("Should render LoginPage correctly", () => {
 const wrapper = shallow(<LoginPage startLogin={jest.fn()} />)
 expect(wrapper).toMatchSnapshot()
})

test("should call startLogin on click", () => {
 const startLogin = jest.fn()
 const wrapper = shallow(<LoginPage startLogin={startLogin} />)
 wrapper.find("button").simulate("click")
 expect(startLogin).toHaveBeenLastCalledWith()
})

