import React, { Component } from "react";
import MRouter from "./router/indexRouter";
import Tabbar from "./components/Tabbar";
import "./App.css";
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <p>router - 路由的展示</p>
        <MRouter>
          {this.props.isShow && <Tabbar></Tabbar>}
        </MRouter>
      </div>
    );
  }
}
// const mapStateToProps = {
  
// }
// mapStateToProps,
//   mapDispatchToProps
// connect(将来给孩子的属性， 将来给孩子传的回调函数)
export default connect((state) => {
  return {
    isShow: state.TabbarReducer.show
  }
})(App);