import authReducer from "../../reducers/auth.reducer"

test("Should generate userid on login", () => {
 const action = {
  type: "LOGIN",
  uid: "12345"
 }
 const state = authReducer({}, action)
 expect(state).toEqual({
  uid: "12345"
 })
})

test("Should remove userid on logout", () => {
 const action = {
  type: "LOGOUT"
 }
 const state = authReducer({uid: "12345"}, action)
 expect(state).toEqual({})
})