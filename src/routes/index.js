import React, { Component } from 'react'
import { Route } from "react-router-dom"
import Auth from "../pages/Auth"
import Home from "../pages/Home"


export class index extends Component {
  render() {
    return (
      <>
        <Route exact path="/" render={() => <Auth />} />
        <Route exact path="/home" render={() => <Home />} />
      </>
    )
  }
}

export default index
