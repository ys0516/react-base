/**
 * Created by Ysssssss on 19/4/21.
 */

import { Alert } from 'rsuite';

export const alertSuccess = (message, duringTime = 2000) => {
    Alert.success(message, duringTime)
}

export const alertError = (message, duringTime = 2000) => {
    Alert.error(message, duringTime)
}

export const alertWarning = (message, duringTime = 2000) => {
    Alert.warning(message, duringTime)
}

export const alertInfo = (message, duringTime = 2000) => {
    Alert.info(message, duringTime)
}