import React, { Component } from 'react'
import Route from "./routes/index"

import 'bulma/css/bulma.css'
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
