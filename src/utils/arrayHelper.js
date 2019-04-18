export const arrayToObject = (arr, keyProp) => {
    let res = {};

    (arr || []).forEach(item => {
        if (Object.hasOwnProperty.call(item, keyProp)) {
            res[item[keyProp]] = item
        }
    })

    return res
}

export const keyToArray = (obj, keyArr) => {
    return (keyArr || []).map(k => obj[k])
}