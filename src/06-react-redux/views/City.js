/*
 * @Author: wendy 463710868@qq.com
 * @Date: 2022-11-23 08:51:37
 * @LastEditors: wendy 463710868@qq.com
 * @LastEditTime: 2022-11-23 12:39:13
 * @FilePath: /react_first_wendy/src/06-react-redux/views/City.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import store from '../redux/store';
import {connect} from 'react-redux'

function City(props) {
    const [list] = useState(['北京', '深圳', '上海'])
  return (
    <div>
        <p>City组件列表 - 选择城市</p>
        <ul>
            {list.map((item, index) => {
                return <li key={index} onClick={() => {
                    // store.dispatch({
                    //     type: 'change_city',
                    //     payload: item
                    // });
                    props.change(item)
                    // props.history.push('/cinemas');
                    // 返回上一级
                    props.history.goBack();
                }}>
                    {item}
                </li>
            }
            )}
        </ul>
    </div>
  )
}
const mapDispatchToProps = {
    change(item) {
        return {
            type: 'change_city',
            payload: item
        }
    }
}
export default connect(null, mapDispatchToProps)(City);
