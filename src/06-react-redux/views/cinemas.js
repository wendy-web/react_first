import React, { useEffect } from 'react';
import getCnimaListAction from '../redux/actionCreator/getCnimaListAction';
import {connect} from 'react-redux';
function Cinemas(props) {
  const {list, getCnimaListAction} = props
  useEffect(() => {
    if(list.length === 0) {
      getCnimaListAction();
    } else {
      console.log('缓存数据')
    }
  }, [list, getCnimaListAction])
  return (
    <div>
      <div>
        <p onClick={() => {
          props.history.push('city');
        }}>点击进入cinemas的城市：{props.cityName}</p>
        <button onClick={() => {
          props.history.push('/cinemas/search')
        }}>搜索</button>
      </div>
      <hr />
      <ul>
        {props.list.map((item) => {
          return <li key={item.cinemaId}>{item.cinemaId}-{item.name}</li>
        })}
      </ul>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    list: state.CinemaListReducer.list,
    cityName: state.CityReducer.cityName

  }
}
const mapDispatchToProps = {
  getCnimaListAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Cinemas);