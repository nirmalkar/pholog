import React, { Component } from 'react'

import Login from "../components/auth/Login"
import Register from "../components/auth/Register"

import "./Auth.scss"


class Auth extends Component {

  state = {
    loginTab: true
  }

  tabChange = () => {
    const loginTab = this.state.loginTab
    if (loginTab === true) {
      this.setState({
        ...this.state,
        loginTab: false
      })
    } else {
      this.setState({
        ...this.state,
        loginTab: true
      })
    }
  }
  render() {
    const loginTab = this.state.loginTab
    const tabChange = this.tabChange
    return (
      <div className="row no-gutters flex justify-content-center">
        <div className="col-4 card border-0 shadow mt-tab">
          <h2 className="main-font weight text-center pt-3">Pholog</h2>
          {
            loginTab ? <Login tabChange={tabChange} /> : <Register tabChange={tabChange} />
          }
        </div>
      </div>
    )
  }
}

export default Auth
