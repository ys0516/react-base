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
import { alertError } from "../common/tips";

export const testAction = () => (dispatch, getState) => {
    getAxios('/web/v3/brand/list').then(res => {

    }).catch(err => {
        alertError(err.message || 'lalala')
    })
}