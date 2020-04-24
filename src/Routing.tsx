import * as React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {First, Second, Third} from './Pages'

function Routing() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">First</Link><br/>
            <Link to="/Second">Second</Link><br/>
            <Link to="/Third">Third</Link><br/>
          </nav>
          <Switch>
            <Route exact path="/" component={First} />
            <Route exact path="/Second" component={Second} />
            <Route exact path="/Third" component={Third} />
          </Switch>
        </div>
      </Router>
    );
  }

export default Routing