import {observable, configure, action} from 'mobx';

// 过于自由,使用严格模式，使用action的方法更改，而不是在外部任意的更改
configure({
    enforceActions: 'always'
})
// const store = observable({
//     list: [],
//     cityName: 'biejing',
//     show: true,
//     changeShow(){
//         this.show = true;
//     },
//     changeHide() {
//         this.show = false;
//     }
// }, {
//     // 标记俩个方法是action，专门修改可观测的value
//     changeHide:action,
//     changeShow:action
// });
// export default store;


// 面向对象的
class store {
    @observable show = true;
    @observable list = [];
    @observable cityName = 'beijing';

    @action changeShow() {
        this.show = true;
    }
    @action changeHide() {
        this.show = false;
    }
}
export default new store();
