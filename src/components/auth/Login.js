import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { message } from "antd";

import { signIn } from "../../appRedux/action/Auth";

import "./Login.scss";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    viewPwd: false,
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  viewPwdToggle = () => {
    const viewPwd = this.state.viewPwd;
    if (viewPwd === false) {
      this.setState({
        ...this.state,
        viewPwd: true,
      });
    } else {
      this.setState({
        ...this.state,
        viewPwd: false,
      });
    }
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    const res = this.props.signIn(data);
    if (res.status === "SUCCESS") {
      message.success("Welcome");
      this.props.history.push("/home");
    } else {
      message.error("something went wrong!");
    }
  };
  render() {
    return (
      <>
        <form className="p-4" onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleInputChange}
              value={this.state.email}
              name="email"
              type="email"
              placeholder="Email Address"
              className="form-control"
            />
          </div>
          <div className="input-group mb-4">
            <input
              onChange={this.handleInputChange}
              value={this.state.password}
              name="password"
              type={this.state.viewPwd ? "text" : "password"}
              placeholder="Password"
              className="form-control"
            />
            <div className="input-group-append" onClick={this.viewPwdToggle}>
              <span className="input-group-text">
                {this.state.viewPwd ? (
                  <i className="fas fa-eye" />
                ) : (
                  <i className="fas fa-eye-slash"></i>
                )}
              </span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
          <label className="mt-4">
            Not a member yet?
            <span
              onClick={this.props.tabChange}
              className="pointer text-primary"
            >
              Sign Up
            </span>
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, {
  signIn,
})(withRouter(Login));
