/**
 * Created by Ysssssss on 19/4/23.
 */
import {
    GET_STORE_LIST,
} from "../constants/ActionTypes";

import {
    getAxios
} from "../common/api";

export const getStoreList = () => dispatch => {
    getAxios('/store', {}, '获取门店列表失败').then(res => {
        dispatch({
            type: GET_STORE_LIST,
            response: res
        })
    })
}