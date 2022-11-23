import React, { useEffect } from "react";
import { hide, show } from "../redux/actionCreator/TabbarActionCreator";
// import store from "../redux/store";
import { connect } from "react-redux";
function Detail(props) {
  const {show, hide, match} = props;
  useEffect(() => {
    console.log('creat detail');

    // store.dispatch(hide());
    hide();
    return () => {
      console.log('destroy detail');
      // store.dispatch(show())
      show();
    }
  }, [show, hide, match.params.myid]);
  return <div>
    detail_myid -- {match.params.myid}
  </div>;
}
const mapStateToProps = null;
const mapDispatchToProps = {
  show,
  hide,
  a() {
    console.log("d222")
  }
}
// connect(将来给孩子的属性， 将来给孩子传的回调函数)
export default connect(mapStateToProps, mapDispatchToProps)(Detail);