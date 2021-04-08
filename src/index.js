import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import { Home } from './components/Home/Home';
import { Projects } from './components/Projects/Projects';
import { Tech } from './components/Tech/Tech';
import { Contact } from './components/Contact/Contact';

ReactDOM.render(
  <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/tech" component={Tech} />
          <Route path="/contact" component={Contact} />
        </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
