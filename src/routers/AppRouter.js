//jshint ignore:start

import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import LoginPage from "../components/LoginPage"
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import AddExpensePage from "../components/AddExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import NotFoundPage from "../components/NotFoundPage"
import history from "./history"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"


// Here we will change how we work with history 
// By default if we use <BrowserRouter> ==> behind the scende react-router-dom is doing some work for us. It's creating an instance of  something called A BROWSER HISTORY and it's registering it to our new router but we could actually go 2ru the process manually ==> and we can do this by installing the HISTORY library from npm


const AppRoute = () => (
 <Router history={history}>
  <div>
  <Switch>
   <PublicRoute path="/" exact={true} component={LoginPage}/>
   <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
   <PrivateRoute path="/create" component={AddExpensePage} />
   <PrivateRoute path="/edit/:id" component={EditExpensePage} />
   <PrivateRoute component={NotFoundPage} />
  </Switch>
  </div>
 </Router>
)

export default AppRoute