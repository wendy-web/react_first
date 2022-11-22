import React, { Component } from "react";
import MRouter from "./router/indexRouter";
import Tabbar from "./components/Tabbar";
import "./App.css";
import store from "../05-redux/redux/store";

export default class App extends Component {
  state = {
    isShow: store.getState().TabbarReducer.show
  }
  componentDidMount() {
    // store.subscribe的订阅
    store.subscribe((value) => {
        console.log('订阅先', store.getState());
        this.setState({
          isShow: store.getState().TabbarReducer.show
        })
    });
  }
  render() {
    return (
      <div>
        <p>router - 路由的展示</p>
        <MRouter>
          {this.state.isShow && <Tabbar></Tabbar>}
        </MRouter>
      </div>
    );
  }
}
