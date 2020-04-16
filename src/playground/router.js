/*
 * @Descripttion: 
 * @msg: 
 * @version: 1.0
 * @Author: Ling
 * @Date: 2020-04-14 21:45:58
 * @LastEditors: Ling
 * @LastEditTime: 2020-04-14 21:47:41
 */

import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PCNewsBlock from "./home.jsx";
import { createBrowserHistory } from 'history';
const browserHistory = createBrowserHistory()

const BasicRoute = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={() => <PCNewsBlock />} />
            <Route exact path="/gate1" component={() => <WrappedGui />} />
            <Route exact path="/gate2" component={() => <WrappedGui />} />
        </Switch>
    </Router>
);


export default BasicRoute;