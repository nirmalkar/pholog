import React, { Component } from 'react'
import { Tabs } from 'antd';

import Login from "../components/auth/Login"
import Register from "../components/auth/Register"

import "./Auth.scss"

const { TabPane } = Tabs;

class Auth extends Component {

  state = {

  }

  tabChange = (key) => {
    console.log(key)
  }
  render() {
    return (
      <div className="row no-gutters">
        <div className="col-8">

        </div>
        <div className="col-4 mt-5 ">
          <Tabs className="mt-tab" onChange={this.tabChange} type="card">
            <TabPane tab="Log In" key="1">
              <Login />
            </TabPane>
            <TabPane tab="Register" key="2">
              <Register />
            </TabPane>
          </Tabs>
        </div>
      </div>
    )
  }
}

export default Auth
