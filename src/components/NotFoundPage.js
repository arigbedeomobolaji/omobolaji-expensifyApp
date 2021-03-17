import React from "react"
import { Link } from "react-router-dom"

const NotFoundPage = () => (
 <div>
  <h1>Expensify App | 404</h1>
  <p>The page you are looking for doesn't exist</p>
  <Link to="/">Go to Home</Link>
 </div>
)

export default NotFoundPage