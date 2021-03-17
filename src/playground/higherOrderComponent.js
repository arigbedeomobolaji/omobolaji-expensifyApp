//jshint ignore:start

// React redux is a library that allows us to connect our redux stores to our react components and it makes heavy use of a pattern calld HIGHER ORDER COMPONENTS

//Higher Order Components (HOC) is just a regualr component,  a regular old react component that renders another component
// The goal of Higher Order Component are ==> 
// 1. Reuse Code
// 2. Render Hijacking
// 3. Prop manipulation
// 4. Abstract state

import React from "react"
import ReactDOM from "react-dom"

const Info = (props) => (
 <div>
  <h1>Info Page</h1>
  <p>The Info is: {props.info}</p>
 </div>
)

// How to create a Higher Order Component
// Step One ==> Create a regular function
// Step Two ==> call the regular function created in Step One and reference the component you want to wrap then store the returned value which is the HIGHER ORDER COMPONENT into a Component State Naming Convention Variable
// Step Three ==> pass an argument called wrappedComponent into the function created in Step One
// Step Four ==> In the regular function created in Step One return a stateless function called HIGHER ORDER COMPONENT.
//  Step Five => Inthe WrappedComponent spread the props object

const withAdminWarning = (WrappedComponent) => {
 return (props) => (
  <div>
   <p>This info is confidential and has Admin priviledge. Please don't share!!!</p>
   <WrappedComponent {...props} />
  </div>
 )
}

const AdminInfo = withAdminWarning(Info)

const requireAuthentication = (WrappedInfo) => {
 return (props) => (
  <div>
   <h1>Require Authentication</h1>
   {props.isAuthenticated ? <WrappedInfo {...props} /> : <p>Please Authenticate </p> }
  </div>
 )
}

const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo info="These are the details" />, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="You are seeing this because you're Authenticated" />, document.getElementById("app"))


