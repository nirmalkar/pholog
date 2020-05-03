import React, { Component } from 'react'
import Route from "./routes/index"

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import 'antd/dist/antd.css';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <div>
        <Route />
      </div>
    )
  }
}

export default App
