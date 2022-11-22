import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Comingsoon from './films/Comingsoon';
import Nowplaying from './films/Nowplaying';

export default class films extends Component {
  render() {
    return (
      <div>
        <p>films --- </p>
        <Route path='/films/comingsoon' component={Comingsoon}></Route>
        <Route path='/films/nowplaying' component={Nowplaying}></Route>
        <Redirect from='/films' to='/Films/nowplaying' exact></Redirect>
      </div>

    )
  }
}
