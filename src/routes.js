/**
 * Created by Ysssssss on 19/4/15.
 */
import React from 'react'
import { Route } from 'react-router'

import CustomizeReportPage from './components/route/CustomizeReportPage'
import CustomizeReportList from './components/route/CustomizeReportList'
import CustomizeReportEditPage from './components/route/CustomizeReportEditPage'

const routes = (
    <div className="report-page-wrapper">
        <Route path="/" component={CustomizeReportPage} />
        <Route path={["/edit/:reportId", "/create"]} component={CustomizeReportEditPage} />
    </div>
)

export default routes