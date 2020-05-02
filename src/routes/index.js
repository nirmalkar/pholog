import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Auth from "../pages/Auth"


export class index extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Auth />} />
      </div>
    )
  }
}

export default index
