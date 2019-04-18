/**
 * Created by Ysssssss on 19/4/18.
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';

import { Button } from 'rsuite'

class CustomizeReportEditPageHeader extends PureComponent {
    static propTypes = {
        value: PropTypes.string
    }
    constructor (props) {
        super (props)
        this.state = {
            name: props.value || ''
        }
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        if (prevState.value !== nextProps.value) {
            return {
                name: nextProps.value
            }
        }
        return null
    }

    render () {
        return (
            <div className="customize-report-edit-page-header">
                <div className="customize-report-title">测试报表名称</div>
                <div className="customize-report-edit-operation">
                    <Button>取消</Button>
                    <Button appearance="primary">保存</Button>
                    <Button appearance="primary">保存并退出</Button>
                </div>
            </div>
        )
    }
}

export default CustomizeReportEditPageHeader