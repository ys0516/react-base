/**
 * Created by Ysssssss on 19/4/21.
 */

import {
    GET_CUSTOMIZE_REPORT_PREVIEW_REQUEST,
    GET_CUSTOMIZE_REPORT_PREVIEW_SUCCESS,
    GET_CUSTOMIZE_REPORT_PREVIEW_FAILURE,
} from "../constants/ActionTypes";

import {
    getAxios
} from "../common/api";

export const testAction = () => (dispatch, getState) => {
    getAxios('/web/v3/brand/list', {}, 'lalala').then(res => {

    })
}

const handleReportIsLoading = (getState, reportKey) => {
    const { customizeReport } = getState()
    const { loading } = customizeReport
    return !!loading[reportKey]
}

/**
 * 获取报表列表
 */
export const getCustomizeReportList = () => (dispatch, getState) => {
    if (handleReportIsLoading(getState, 'customizeReportList')) {

    }
    dispatch({
        type: GET_CUSTOMIZE_REPORT_PREVIEW_REQUEST
    })
    getAxios('/report', {}, '获取报表列表失败', true).then(res => {
        dispatch({
            type: GET_CUSTOMIZE_REPORT_PREVIEW_SUCCESS,
            response: res
        })
    }).catch(() => {
        dispatch({
            type: GET_CUSTOMIZE_REPORT_PREVIEW_FAILURE
        })
    })
}

