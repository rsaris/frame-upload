import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UploadsRouter from './uploads';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={UploadsRouter} path="/uploads" />
        </Switch>
      </BrowserRouter>
    );
  }
}

