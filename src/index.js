/**
 * Created by Ysssssss on 19/4/15.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import { Route } from 'react-router'
import history from './history';
import { Provider } from 'react-redux'

import App from './components/route/App'
import configureStore from './store/configureStore'

import { IntlProvider } from 'rsuite';
import zhCN from 'rsuite/lib/IntlProvider/locales/zh_CN';

import './stylesheets/main.less'


const store = configureStore()

ReactDOM.render(
    <IntlProvider locale={zhCN}>
        <Provider store={store}>
            <Router history={history}>
                <Route path="" component={App} />
            </Router>
        </Provider>
    </IntlProvider>,
    document.getElementById('root')
);

