import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import React from 'react';

import Splash from './splash.jsx';
import Gallery from './gallery.jsx';

const Root = () => (
  <Router history={ hashHistory }>
    <Route path='/' component={Splash}></Route>
    <Route path='/gallery' component={Gallery}></Route>
  </Router>
);

export default Root;
