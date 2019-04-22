/**
 * Created by Ysssssss on 19/4/22.
 */

export default function getUrlParams (url, paramsName) {
    const urlArr = url.split('?')
    if (urlArr[1]) {
        const paramsArr = urlArr[1].split('&')
        const paramsMap = {}
        paramsArr.forEach((param) => {
            const paramArr = param.split('=')
            if (paramArr[1]) {
                paramsMap[paramArr[0]] = paramArr[1]
            }
        })
        return paramsMap[paramsName] || ''
    }
    return ''
}
