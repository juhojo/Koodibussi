import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import { Container } from './components/Container.js';
import { Home } from './pages/Home.js';
import { Contact } from './pages/Contact.js';
import { NotFound } from './pages/NotFound.js';

class App extends Component {

  render () {
    return (
    	<div>
	      <Router history={hashHistory}>
	        <Route path='/' component={Container}>
	          <IndexRoute component={Home} />
	          <Route path='/contact' component={Contact} />
	          <Route path='*' component={NotFound} />
	        </Route>
	      </Router>
      </div>
    );
  }
}

export default App;