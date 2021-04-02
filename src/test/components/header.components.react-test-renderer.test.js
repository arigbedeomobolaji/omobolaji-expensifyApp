/* // react-test-renderer
// How actually are we going to test our react component, because testing components is very different from testing functions.
// for react components we have very different set of concerns like
// 1. what renders under certain situation: so if i pass in a prop into a component I would expect it to render one way if I pass in a prop with a different value I might expect it to render in another way.
// 2. How we can test components in terms of user interaction. So if I change a form value  or click a button is the component reacting correctly. So if I change the text filter is the state for the component actually changing. These are all things we care about when testing react components.
// Snapshot testing and how it gonna help us test our components

// We need to see how to virtually render our components right because we need a way to figure out what JSX comes back. But we are not going to be viewing it in the browser but be accessing it via code. There's a react library created by the react team for this called react-test-renderer.
// react-test-renderer allows us to render our component inside of just regular javascript code and then assert something about what got rendered.

//There are two ways to test react components 
//1. Shallow rendering: for a component that don't pass in any props or state we are going to us shallow rendering. with shallow rendering we are considering what's getting rendered. It only renders the given components.
//2. we have full DOM rendering: renders child components 

// jshint ignore:start
import React from "react"
import ReactShallowRenderer from "react-test-renderer/shallow"
import Header from "../../components/Header"

test("Should render header component correctly", () => {
 const renderer = new ReactShallowRenderer()
 renderer.render(<Header />)
 // console.log(renderer.getRenderOutput()) //this is gonna return the rendered outputof the jsx you put in.  
 // We are not gonig to make direct assertion here about the object about using expect(....).toEqual(.....) because it will take a ridiculous amount of time and it would just deter you from ever testing in a meaningful way.  So what we are going to do is use snapshots instead.
 // SNAPSHOT allows us to track changes to data over time. We're going to be able to create a snapshot of header at its current point in time and we're going to be able to get notified if this ever changes. So if the header output does change in a way we don't want we can catch that if it changes in a way that we do want that's fine too we can allow that.
 //to use snapshot all we need to do is to explore the toMatchSnapshot(optionalString) method in jest. 
 // what will happen if we use to match snapshot. Well the first time we run this test case  it is always going to pass because there is no existing snapshot, so jest will go and create a snapshot of what the rendered output looked like. Now the second time we run this test case it is going to compare with the existing one , if it's the same then the test will pass and if it's not then the test will fail.
 expect(renderer.getRenderOutput()).toMatchSnapshot()
})

// react-test-renderer is a very simple utility for rendering. and enzymes does use react-test-renderer. but enzymes though come with a lot of great features for people actually writing test cases.
// The first thing we are going to do is to create a set up test file in our project  and this is something that allows us to configure out test environment. This is where we are going to be able to set up the enzymes adapter and we'll do it once in the setup file as opposed to doing it every single  time we use enzyme to get that done.
// called setupTests.js ==> which will sit in the source tests directory  */

test("should pass", () => {
 expect(1).toBe(1)
})