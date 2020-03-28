import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';

import Routes from '@/Routes';
import '@/styles/index.scss';

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Routes />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("app"));
