import React, { Component } from 'react'
import { ConnectedRouter } from "react-router-redux";
import { Provider } from "react-redux";
import configureStore, { history } from './appRedux/store';
import { BrowserRouter, Switch } from "react-router-dom"

import App from "./App"

export const store = configureStore();

export class ReactApp extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <App />
            </Switch>
          </BrowserRouter>

        </Provider>
      </div>
    )
  }
}

export default ReactApp
