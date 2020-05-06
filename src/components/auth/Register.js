import React, { Component } from 'react'
import { message } from "antd"
import { connect } from 'react-redux'

import { signUp } from "../../appRedux/action/Auth"
export class Register extends Component {
  state = {

  }
  regFromSubmit = (e) => {
    e.preventDefault()
    console.log("hello")
    if (!this.state.name) {
      message.info("Please fill name")
    }
    if (!this.state.email) {
      message.info("Please fill email")
    }
    if (!this.state.contact) {
      message.info("Please fill contact")
    }
    if (!this.state.password) {
      message.info("Please fill password")
    }
  }
  handleInputChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <>
        <form className="p-4" onSubmit={this.regFromSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              onChange={this.handleInputChange}
              id="formGroupExampleInput"
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="reg-form-email">Email</label>
            <input
              onChange={this.handleInputChange}
              id="reg-form-email"
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter your email address" />
          </div>
          <div className="form-group">
            <label htmlFor="reg-form-contact">Contact</label>
            <input
              onChange={this.handleInputChange}
              id="reg-form-contact"
              type="number"
              name="contact"
              className="form-control"
              placeholder="Enter your contact number" />
          </div>
          <div className="form-group">
            <label htmlFor="reg-form-password">Password</label>
            <input
              onChange={this.handleInputChange}
              id="reg-form-password"
              type="text"
              name="password"
              className="form-control"
              placeholder="Enter your secret password" />
          </div>
          <div className="form-group">
            <label htmlFor="reg-form-submit-btn"></label>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              id="reg-form-submit-btn">
              Submit
              </button >
          </div>
        </form>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, {
  signUp,
})(Register)
