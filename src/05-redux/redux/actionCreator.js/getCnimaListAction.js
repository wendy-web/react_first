import axios from "axios";

function getCnimaListAction () {
    return (dispatch) => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=3293746',
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16687675555277788957310977","bc":"440300"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((res) => {
            console.log(res.data.data.cinemas, '000');
            dispatch({
                type: 'change_list',
                value: res.data.data.cinemas
            });
        });
    }
}

export default getCnimaListAction;