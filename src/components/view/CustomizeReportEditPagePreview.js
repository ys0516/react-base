/**
 * Created by Ysssssss on 19/4/18.
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { Select, DateRangePicker, Button } from 'rsuite'

import {
    testAction
} from "../../action/CustomizeReport";

function mapStateToProps (state) {
    const { customizeReport } = state
    const { dimensionItemList, numberItemList } = customizeReport
    return {
        dimensionItemList,
        numberItemList
    }
}

@connect(
    mapStateToProps,
    {
        testAction
    }
)

class CustomizeReportEditPagePreview extends PureComponent {
    static propTypes = {

    }

    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div className="customize-report-edit-preview-block">
                <div className="preview-block-title">筛选项</div>
                <div className="preview-block-params">
                    <div className="params-box">
                        <div className="params-label">时间：</div>
                        <DateRangePicker
                            className="params-value"
                            style={{width: '240px'}}
                            placeholder="筛选时间段"

                        />
                    </div>
                    <Button appearance="primary" className="params-button" onClick={() => {
                        this.props.testAction()
                    }}>搜索</Button>
                </div>
                <div className="preview-block-title">表格</div>

            </div>
        )
    }
}

export default CustomizeReportEditPagePreview