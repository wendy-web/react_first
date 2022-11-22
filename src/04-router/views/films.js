import React, { Component } from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import Comingsoon from './films/Comingsoon';
import Nowplaying from './films/Nowplaying';

export default class films extends Component {
  render() {
    return (
      <div>
        <p>films --- </p>
        <ul>
          <li>
            <NavLink to='/films/nowplaying'>正在热映</NavLink>
          </li>
          <li>
          <NavLink to='/films/comingsoon'>即将上映</NavLink>

          </li>
        </ul>
        <Route path='/films/comingsoon' component={Comingsoon}></Route>
        <Route path='/films/nowplaying' component={Nowplaying}></Route>
        <Redirect from='/films' to='/Films/nowplaying' exact></Redirect>
      </div>

    )
  }
}
