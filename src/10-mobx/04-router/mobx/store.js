import {observable, autorun} from 'mobx';


const store = observable({
    list: [],
    cityName: 'biejing',
    show: true
})

export default store;