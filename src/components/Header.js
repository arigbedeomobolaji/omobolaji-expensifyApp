// jshint ignore:start
import React from "react"
import {NavLink } from "react-router-dom"

const Header = () => (
 <header>
  <h1>Expensify</h1>
  <nav>
   <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
   <NavLink to="/create" activeClassName="is-active">Create</NavLink>
  </nav>
 </header>
)


export default Header