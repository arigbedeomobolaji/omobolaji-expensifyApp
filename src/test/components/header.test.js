// jshint ignore:start
import React from "react"
import {shallow} from "enzyme"
import { Header } from "../../components/Header"

test("should render header component currently", () => {
 const wrapper = shallow(<Header startLogout={() => { }}/>)
 expect(wrapper).toMatchSnapshot()
 // expect(wrapper.find("h1").length).toBe(1)
 // expect(wrapper.find("h1").text()).toBe("Expensify")
 //wraper will be seen quite alot throughout the documentation in enzymes then we call shallow and pass in jsx
})

test("Should call startLogout on button click ", () => {
 const startLogout = jest.fn()
 const wrapper = shallow(<Header startLogout={startLogout} />)
 wrapper.find("button").simulate("click")
 expect(startLogout).toHaveBeenLastCalledWith()
})