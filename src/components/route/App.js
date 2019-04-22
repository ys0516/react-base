/**
 * Created by Ysssssss on 19/4/22.
 */

import React, { PureComponent } from 'react'
import { Route, Switch } from 'react-router'

import CustomizeReportPage from './CustomizeReportPage'
import CustomizeReportEditPage from './CustomizeReportEditPage'
import getUrlParams from "../../utils/getUrlParams";
import { getCookie, setCookie } from "../../utils/cookie";
import history from '../../history'

class App extends PureComponent {
    constructor (props) {
        super(props)
        this.state = {
            isAuthorized: false,
            noAuthorized: false
        }
    }

    componentDidMount() {
        const { location = {} } = this.props
        console.log(this.props)
        let accessToken = getUrlParams(location.search || '', 'access_token')
        if (accessToken) {
            setCookie('accessToken', accessToken)
        } else {
            accessToken = getCookie('accessToken')
        }
        if (accessToken) {
            this.setState({
                isAuthorized: true,
                noAuthorized: false
            })
        } else {
            this.setState({
                isAuthorized: false,
                noAuthorized: true
            })
        }
    }

    render () {
        const { isAuthorized, noAuthorized } = this.state
        return isAuthorized ? (
            <div className="report-page-wrapper">
                <Switch>
                    <Route exact path={["/", "/detail/:tableId"]} component={CustomizeReportPage} />
                    <Route exact path={["/edit/:reportId", "/create"]} component={CustomizeReportEditPage} />
                </Switch>
            </div>
        ) : (
            noAuthorized ? <div>无权限访问页面</div> : null
        )
    }
}

export default App