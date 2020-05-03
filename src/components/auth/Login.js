import React, { Component } from 'react'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { message } from "antd"

import { signIn } from "../../appRedux/action/Auth"

import "./Login.scss"

export class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleInputChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    const res = this.props.signIn(data)
    if (res.status === "SUCCESS") {
      message.success("Welcome")
      this.props.history.push("/home")
    } else {
      message.error("something went wrong!")
    }
  }
  render() {
    return (
      <>
        <form className="p-4" onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.email}
              name="email"
              type="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.password}
              name="password"
              type="password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, {
  signIn
})(withRouter(Login))
