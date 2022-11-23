import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './tabbar.module.css';

export default class Tabbar extends Component {
  render() {
    return (
      <div className={style.tabbar}>
        <ul>
            <li>
                {/* <a href='#/films'>电影</a> */}
                <NavLink to='/films' activeClassName={style.click_active}>电影</NavLink>
            </li>
            <li>
                {/* <a href='#/cinemas'>影院</a> */}
                <NavLink to='/cinemas' activeClassName={style.click_active}>影院</NavLink>
            </li>
            <li>
                {/* <a href='#/center'>我的</a> */}
                <NavLink to='/center' activeClassName={style.click_active}>我的</NavLink>
            </li>
        </ul>
      </div>
    )
  }
}
