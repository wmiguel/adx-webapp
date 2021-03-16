import React from 'react';

import Dashboard from './pages/Dashboard';
import Administration from './pages/Administration';
import OnDemand from './pages/OnDemand';
import WorkOrders from './pages/WorkOrders';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <aside className="nav">
      <img src="https://cdn.audionamix.com/adx-logo-services-light.png" alt="Audionamix Professional Services"/>
        <hr />
        
        <Link id="link-one" to="/dashboard/" className="nav__link" data-link>
          <i className="bi bi-house"></i> Dashboard
        </Link>{' '}
        
        <Link id="link-two" to="/work-orders/" className="nav__link" data-link>
          <i className="bi bi-clipboard"></i> Work Orders
        </Link>{' '}

        <Link id="link-three" to="/on-demand/" className="nav__link" data-link>
          <i className="bi bi-file-earmark-music"></i> On Demand
        </Link>{' '}

        <Link id="link-four" to="/admin/" className="nav__link" data-link>
          <i className="bi bi-person"></i> Administration
        </Link>{' '}
      </aside>

      <nav id="notifications">
        <button className="navbar-toggler">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </button>
        <span id="icons">
          <i className="bi bi-person-circle" title="william.miguel@audionamix.com"></i>
          <p>william.miguel@audionamix.com</p>
          <i className="bi bi-bell-fill" title="Notifications"></i>
          <i className="bi bi-box-arrow-right" title="Logout"></i>
        </span>
      </nav>

      <main>
        <section id="app">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/adx-webapp/" component={Dashboard} />
            <Route exact path="/dashboard/" component={Dashboard} />
            <Route exact path="/admin/" component={Administration} />
            <Route exact path="/on-demand/" component={OnDemand} />
            <Route exact path="/work-orders/" component={WorkOrders} />
          </Switch>
        </section>
      </main>
  </Router>
);

export default App;