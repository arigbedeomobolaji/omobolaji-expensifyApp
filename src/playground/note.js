
/* 

When reac-router sees switch it will mov tru your route definitions in order and it's going to stop when it finds a match which means that it returns only th first route it found that matches the one we typed.

LINKING BETWEEN PAGES
we are manually refreshing our site whenever we change the route which means we're still communicating with the server and the whole point of client side routing is to avoid that (i.e. full page refresh ==? We want to be able to switch pages without ggoing tru the full page refresh. )
REACT-ROUTER-DOM allows us to do that using <Link to="url-we-are-heading-to">Text</Link>
<NavLink></NavLink> ====>  component is better suited for situations like navigation where we have mutiple link side by side
activeClassName ==> is the name of the class that when styled will take effect on any of the active link
We're going t be using <Link></Link> almost everywhere except for our navigation where we want to take the advantage of being able to call out specific links.

by default REACT-ROUTER-DOM passes some props to our component by default it includes
1. History: It's very useful. it's an object and it contains a bunch of properties most of which are methods and these allow us to manipulate the history e.g. redirect the user programmitcally by javascript like redirect the user after filling a form etc
2. location:  it contains information about the current URL.
3. Match: It contains some information which are useful. and the one thing we are going to be using here is the params object.


REDUX
WHY REACT IS SOMETHING WE SHOULD USE

PROBLEMS WE WILL RUN INTO IF WE DON'T USE REDUX
cOMPONENTS STATE AND REDUC they both aim to solve the same probelm which is tomanage 

in Simple application props, methods and state are passed down because there was a direct connection between every single thing. All we have to do is to store the state in the root Component then pass the necessary items down making the simple appication work.
but in COMPLEX APPLICATON there is no one parent component where we can store that component state. There is no connection between every single component.
The first issue we encounter with complex app is where to save the state since there isn't just one parnt that needs to keep track of all the data (i.e. When we have multiple component tress sharing data isn't as easy as it might sound.)

2. The second issue we are encountering is that the components that we're creating  ain't really reuseable

Where do I store my app state in a complex React app? ==>  Use Redux

How do I create components that are actually reuseable ==> Use Redux



Props is a perfectly valid way of communicating data between parent and child and when you're passing data prop down to a child and the child actually uses it in a meaningful way. That's a great use case continue to use props in those cases.
The only time we really want to avoid props is whne we're passingprops down a long chain of components just to get to the last one in the chain. The components in between aren't actually using the value they're just passing it along. ==> In this case we probably want to avoid using props and we should use something like REDUX instead

WHAT EXACTLY IS REDUX:
REDUX is a state container which is exactly what our class based components are. There's an Object which we can READ, CHANGE.

SUMMARYOF THE SHORTCOMINGS OF USING COMPONENT STATE
1. In complex apps, There's no clear parent component where we can store that state e.g React-Router can render two tree views then how exactly do these two separate trees communicate with COmponent State and there's no way to get that done.

2. When we use COmponents state our components end up communicating alot. Now this isn't inherently bad but when we do it alot we create components that are not very usable bacause they need so many things from the parent which means they can't just be dropped anywhere beacuase the parent might not have the things they need. 

THE SOLUTION TO THE TWO PROBLEM LISTED ABOVE IS REDUX. With REDUX, Each component can define two things 
1. what data it needs 
2. What data it needs to be able to change.

To use redux, we have to  access createStore,  We call this function to actually create a store and this store is that thing that tracks our changing data over time
*/ 

// REACT-REDUX
//It proivde us with a Provider Component which is going to allow us to provide the store to all of the components that make up ur application.
// After we've used the Provider component, we now have an application where all of the Comoonents do have access to the store.
// It also provide us with Connect Function ==> We can't use Connect without having provider setup. We can now actually create components that grab information from the store. It connects your component to the redux store.  
// When we called the connect() function from the react-redux library, it returns a function which is the like th Higher Order Component function so we need to call that with the component we want to render in the HOC.
// And the the connect( Here, we define a function and this function let's determine what information from the store we want our component to be able to access and the store and the stores state get passed in as the first argument)
//The we return an object from the function declared inside the connect method


// As the store changes the mapStateToProps automatically rerun getting the values in the component. It automatically call the store.subscribe() method
// It's Importan to know that when you connect a component to the redux store, it's reactive which means that as the store changes your component is going to get re-rendered with those new values.