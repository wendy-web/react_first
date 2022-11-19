import React, { Component } from 'react'
import '../css/12-选项卡.css';
// export default class Tabbar extends Component {
//     selClickHandle = (index) => {
//         this.props.event(index);
//     }
//     render() {
//         return (
//             <div>
//             <ul>
//                 {
//                     this.props.list.map((item, index) => {
//                         return  <li
//                             key={item.id}
//                             className = {this.props.currentIndex === index ? 'active' : ''}
//                             onClick={() => this.selClickHandle(index)}
//                         >
//                             {item.text}
//                         </li>
//                     })
//                 }
//             </ul>
//             </div>
//         )
//     }
// }
const Tabbar = (props) => {
    return (
        <div>
            <ul>
                {
                    props.list.map((item, index) => {
                        return  <li
                            key={item.id}
                            className = {props.currentIndex === index ? 'active' : ''}
                            onClick={() => props.event(index) }
                        >
                            {item.text}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default Tabbar