import {login, logout } from "../../actions/auth"

test("Should set up login action", () => {
 const action = login("12345")
 expect(action).toEqual({
  type: "LOGIN",
  uid: "12345"
 })
})

test("Should set up logout action", () => {
 const action = logout()
 expect(action).toEqual({
  type: "LOGOUT"
 })
})