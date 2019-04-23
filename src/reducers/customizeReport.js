/**
 * Created by Ysssssss on 19/4/16.
 */
import {
    GET_CUSTOMIZE_REPORT_LIST_REQUEST,
    GET_CUSTOMIZE_REPORT_LIST_SUCCESS,
    GET_CUSTOMIZE_REPORT_LIST_FAILURE,
} from "../constants/ActionTypes";

const initialState = {
    loading: {},
    customizeReportList: [],
    dimensionItemList: [{
        id: 1,
        name: '时间'
    }, {
        id: 2,
        name: '门店'
    }, {
        id: 3,
        name: '菜类'
    }],
    numberItemList: [{
        id: 101,
        name: '数量',
    }, {
        id: 102,
        name: '实收金额',
    }],
}

export default function update(state = initialState, action) {
    const { loading } = state
    const { response } = action
    switch (action.type) {
        case GET_CUSTOMIZE_REPORT_LIST_REQUEST:
            return {
                loading: {
                    ...loading,
                    customizeReportList: true
                },
            }
        case GET_CUSTOMIZE_REPORT_LIST_SUCCESS:
            return {
                loading: {
                    ...loading,
                    customizeReportList: false
                },
                customizeReportList: response,
            }
        case GET_CUSTOMIZE_REPORT_LIST_FAILURE:
            return {
                loading: {
                    ...loading,
                    customizeReportList: false
                }
            }
        default :
            return state
    }
}