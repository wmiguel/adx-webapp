import React from 'react';
import Dashboard from './Dashboard';
import Administration from './Administration';
import OnDemand from './OnDemand';
import WorkOrders from './WorkOrders';

import {Switch, Route, Redirect, withRouter} from 'react-router-dom'


function MainContent() {
    return (
        <React.Fragment>

            <Switch>
                <Route path="/adx-webapp/dashboard" component={Dashboard}></Route>
                <Route path="/adx-webapp/admin" component={Administration}></Route>
                <Route path="/adx-webapp/on-demand" component={OnDemand}></Route>
                <Route path="/adx-webapp/work-orders" component={WorkOrders}></Route>
                <Redirect to="/adx-webapp/dashboard"></Redirect>
            </Switch>
        
        </React.Fragment>
    )
};

export default withRouter(MainContent);