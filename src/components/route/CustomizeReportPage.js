/**
 * Created by Ysssssss on 19/4/15.
 */
import React, { PureComponent } from 'react'
import { Route } from 'react-router'

import CustomizeReportList from './CustomizeReportList'
import CustomizeReportDetail from './CustomizeReportDetail'

class CustomizeReportPage extends PureComponent {
    render () {
        const { match } = this.props
        return (
            <div className="customize-report-page">
                <div className="customize-report-page-header">
                    <div className="customize-report-page-header-content">
                        <div className="login-name">
                            <div className="login-name-icon">三千</div>
                            <span>三千客中国</span>
                        </div>
                        <div className="login-account">18767100998</div>
                    </div>
                </div>
                <div className="customize-report-page-body">
                    <div className="customize-report-page-body-content">
                        <Route path={`${this.props.match.path}list`} component={CustomizeReportList} />
                        <Route path={`${this.props.match.path}detail/:tableId`} component={CustomizeReportDetail} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomizeReportPage