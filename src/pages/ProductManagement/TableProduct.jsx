import React, { Component } from 'react'

export default class TableProduct extends Component {
  render() {
    return (
      <table className='table'>
        <thead>
            <td>Id</td>
            <td>Image</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Type</td>
            <td></td>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td><img src="https://picsum.photos/200/200" alt="..." /></td>
                <td>product 1</td>
                <td>1000</td>
                <td>iphone 1</td>
                <td>mobile</td>
                <td>
                    <button className='btn btn-danger mx-2'>Delete</button>
                    <button className='btn btn-primary mx-2'>Edit</button>
                </td>
            </tr>
        </tbody>
      </table>
    )
  }
}
