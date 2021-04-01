import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { Home } from './components/Home/Home';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
