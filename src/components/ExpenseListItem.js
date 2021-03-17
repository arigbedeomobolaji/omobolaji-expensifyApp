//jshint ignore:start
import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

export const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
 <tr>
    <td>
      <Link to={`/edit/${id}`}>{description}</Link>
    </td>
    <td>{amount}</td>
    <td>{createdAt}</td>
 </tr>
)

export default connect()(ExpenseListItem) 