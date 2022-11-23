import axios from 'axios';
import {observable, configure, action, runInAction} from 'mobx';

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
    @action getList() {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3293746',
            method: 'get',
            headers: {
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16687675555277788957310977","bc":"440300"}',
              'X-Host': 'mall.film-ticket.cinema.list'
            }
          }).then((res) => {
            // 异步的修改 runInAction
            runInAction(() => {
                console.log(res.data.data.cinemas)
                this.list = res.data.data.cinemas;
            })

        });
    }
}
export default new store();
