/**
 * Created by Ysssssss on 19/4/17.
 */

import React, { PureComponent, PropTypes } from 'react'
import { Icon } from 'antd'

import { DragSource } from 'react-dnd'
import { CUSTOMIZE_REPORT_DIMENSION } from '../../constants/DndType'

const dragConfig = {
    beginDrag (props) {

        console.log('dragConfig', { props })
        return {
            ...props
        };
    },

    endDrag (props, monitor, component) {
        console.log('endDrag', { props, monitor, component })
        return {}
    },
}

const dropSourceCollect = (connect, monitor) => {
    console.log('dropSourceCollect', { connect, monitor })
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

@DragSource(props => props.type, dragConfig, dropSourceCollect)
class CustomizeReportEditDropSource extends PureComponent {
    render () {
        const { type, name, selectedByFilter, selectedByTable, connectDragSource, connectDragPreview, isDragging } = this.props
        const isDimension = type === CUSTOMIZE_REPORT_DIMENSION
        return (
            <div className={`option-block-item${isDragging ? ' dragging' : ''}`}>
                { connectDragPreview(
                    <div className={`drag-item ${isDimension ? 'dimension' : 'number'}`}>
                        <span className={`drag-item-title-icon`}>{ isDimension ? 'abc' : '123' }</span>
                        <span>{ name }</span>
                    </div>,
                    { captureDraggingState: true, }
                ) }

                { connectDragSource(
                    <div className="preview-item">
                        <div className="preview-item-title">
                            <span className={`preview-item-title-icon ${isDimension ? 'dimension' : 'number'}`}>{ isDimension ? 'abc' : '123' }</span>
                            <span>{ name }</span>
                        </div>
                        <div className="preview-item-type">
                            { isDimension ? <Icon type="filter" className={selectedByFilter ? 'selected' : ''}/> : null }
                            <Icon type="table" className={selectedByTable ? 'selected' : ''} />
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default CustomizeReportEditDropSource