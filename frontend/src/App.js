import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import Routes from '~/routes';

import './assets/styles/shards-dashboards.1.1.0.min.css';

import GlobalStyle from '~/styles/global';
import history from '~/services/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
