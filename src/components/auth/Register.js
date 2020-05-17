import React, { Component } from "react";
import { connect } from "react-redux";
import { message } from "antd";

import { signUp } from "../../appRedux/action/Auth";
export class Register extends Component {
  state = {};
  regFromSubmit = async (e) => {
    e.preventDefault();
    const { name, email, contact, password } = this.state;
    const data = {
      name,
      email,
      contact,
      password,
    };
    const res = await this.props.signUp(data);
    console.log(res.payload.response.data.msg);
    if (res.status === "SUCCESS") {
      message.success("You are successfully registered!");
    } else {
      message.error(res.payload.response.data.msg);
    }
  };
  handleInputChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <>
        <form className="p-4">
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              onChange={this.handleInputChange}
              id="formGroupExampleInput"
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reg-form-email">Email</label>
            <input
              onChange={this.handleInputChange}
              id="reg-form-email"
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reg-form-contact">Contact</label>
            <input
              onChange={this.handleInputChange}
              id="reg-form-contact"
              type="number"
              name="contact"
              className="form-control"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reg-form-password">Password</label>
            <input
              onChange={this.handleInputChange}
              id="reg-form-password"
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your secret password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="reg-form-submit-btn"></label>
            {/* <button
              onClick={this.regFromSubmit}
              className="btn btn-primary btn-block"
              id="reg-form-submit-btn">
              Submit
              </button > */}
          </div>
          <button
            onClick={this.regFromSubmit}
            className="btn btn-primary btn-block"
            id="reg-form-submit-btn"
          >
            Submit
          </button>
          <label>
            Already a member?
            <span
              onClick={this.props.tabChange}
              className="pointer text-primary"
            >
              SingIn
            </span>
          </label>
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  // return state;
};

export default connect(mapStateToProps, {
  signUp,
})(Register);
