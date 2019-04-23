/**
 * Created by Ysssssss on 19/4/23.
 */
import {
    GET_STORE_LIST,
} from "../constants/ActionTypes";

const initialState = {
    storeList: [],
}

export default function update(state = initialState, action) {
    const { response } = action
    switch (action.type) {
        case GET_STORE_LIST:
            return {
                ...state,
                storeList: response,
                currentStoreInfo: response.length ? response[0] : state.currentStoreInfo,
            }
        default:
            return state
    }
}