import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Films from '../views/films';
import Cinemas from '../views/cinemas';
import Center from '../views/center';
export default class indexRouter extends Component {
  render() {
    return (
        <HashRouter>
            <Route path='/films' component={Films}></Route>
            <Route path='/cinemas' component={Cinemas}></Route>
            <Route path='/center' component={Center}></Route>
        </HashRouter>
    )
  }
}
