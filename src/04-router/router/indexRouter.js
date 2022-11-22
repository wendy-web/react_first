import React, { Component } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import Films from '../views/films';
import Cinemas from '../views/cinemas';
import Center from '../views/center';
import NotFound from '../views/NotFound';
export default class indexRouter extends Component {
  render() {
    return (
        <HashRouter>
            {this.props.children}
            {/* 相当于switch的匹配，匹配上就跳出 */}
            <Switch>
                <Route path='/films' component={Films}></Route>
                <Route path='/cinemas' component={Cinemas}></Route>
                <Route path='/center' component={Center}></Route>
                
                {/* 重定向的默认的路由 - 模糊匹配 */}
                {/* exact 关键字是精确匹配 */}
                <Redirect from='/' to='/films' exact></Redirect>

                {/* 404 not found */}
                <Route component={NotFound}></Route>
            </Switch>
        </HashRouter>
    )
  }
}
