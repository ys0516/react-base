/**
 * Created by Ysssssss on 19/4/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from './routes'
import configureStore from './store/configureStore'

import { IntlProvider } from 'rsuite';
import zhCN from 'rsuite/lib/IntlProvider/locales/zh_CN';

import './stylesheets/main.less'


const store = configureStore()

ReactDOM.render(
    <IntlProvider locale={zhCN}>
        <Provider store={store}>
            <Router>
                { routes }
            </Router>
        </Provider>
    </IntlProvider>,
    document.getElementById('root')
);

