import React from 'react';
import Dashboard from './Dashboard';
import Administration from './Administration';
import OnDemand from './OnDemand';
import WorkOrders from './WorkOrders';

// import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import { Link, Route, Redirect, Switch, } from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

function MainContent() {
    return (
        <React.Fragment>

            <Switch>
                <Route exact path="/adx-webapp/" component={Home} />
                <Route path="/about" component={About} />
                <Route
                    path="/contact"
                    render={() => <h1>Contact Us</h1>} />
                <Route path="/blog" children={({ match }) => (
                    <li className={match ? 'active' : ''}>
                        <Link to="/blog">Blog</Link>
                    </li>)} />
                <Route render={() => <h1>Page not found</h1>} />
                <Redirect to="/adx-webapp"></Redirect>
            </Switch>

            <Switch>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/admin" component={Administration}></Route>
                <Route path="/on-demand" component={OnDemand}></Route>
                <Route path="/work-orders" component={WorkOrders}></Route>
                <Redirect to="/dashboard"></Redirect>
            </Switch>
        
        </React.Fragment>
    )
};

export default MainContent;