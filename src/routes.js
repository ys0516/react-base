/**
 * Created by Ysssssss on 19/4/15.
 */
import React from 'react'
import { Route } from 'react-router'

import CustomizeReport from './components/route/CustomizeReport'
import CustomizeReportEditPage from './components/route/CustomizeReportEditPage'

const routes = (
    <div className="report-page-wrapper">
        <Route path="/index" component={CustomizeReport} />
        <Route path={["/edit/:reportId", "/edit"]} component={CustomizeReportEditPage} />
    </div>
)

export default routes