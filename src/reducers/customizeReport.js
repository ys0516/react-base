/**
 * Created by Ysssssss on 19/4/16.
 */

const initialState = {
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
    switch (action.type) {
        default :
            return state
    }
}