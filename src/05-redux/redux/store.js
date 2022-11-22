// 1.引入redux
// 2.creatStore(redux)

import { createStore } from "redux";
const reducer = (prevState = {
    show: true
}, action) => {
    console.log(action);
    const newState = {...prevState};
    switch(action.type) {
        case 'hide_tabbar':
            newState.show = false;
            return newState;
        case 'show_tabbar':
            newState.show = true;
            return newState;
        default:
            return prevState;
    }
}
const store = createStore(reducer);

export default store;