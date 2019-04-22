/**
 * Created by Ysssssss on 19/4/22.
 */

export function getParentNode (node, classname) {
    let parentNode = node.parentNode
    let resultNode = null
    while (parentNode !== null) {
        if (parentNode.classList && parentNode.classList.contains(classname)) {
            resultNode = parentNode
            break
        } else {
            parentNode = parentNode.parentNode
        }
    }
    return resultNode
}