/**
 * Created by Ysssssss on 19/4/17.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';


import { DropTarget } from 'react-dnd'
import { CUSTOMIZE_REPORT_DIMENSION } from '../../constants/DndType'

const dropTargetSpec = {
    drop (props, monitor) {
        console.log('drop', { props, monitor })
        const item = monitor.getItem()
        props.handleDragDrop(item.id)
    },
}

const dropTargetCollect = (connect, monitor) => {
    console.log('dropTargetCollect', { connect, monitor })
    return {
        connectDropTarget: connect.dropTarget(),
        isActivity: monitor.isOver() && monitor.canDrop(),
    }
}

@DropTarget(props => props.type, dropTargetSpec, dropTargetCollect)
class CustomizeReportEditDropTarget extends PureComponent {
    static propTypes = {
        type: PropTypes.string,
        handleDragDrop: PropTypes.func,
    }
    render () {
        const { type, connectDropTarget, isActivity } = this.props
        const isDimension = type === CUSTOMIZE_REPORT_DIMENSION
        return connectDropTarget(

            <div className={`option-block-item${isActivity ? ' activity' : ''}`}>
                <span className="option-block-item-icon">{ isDimension ? 'abc' : '123' }</span>
                <span>拖到这里</span>
            </div>
        )
    }
}

export default CustomizeReportEditDropTarget