import 'jquery';
import 'bootstrap/dist/js/bootstrap';

import './assets/css/bootstrap.min.css';
import './assets/css/mediumish.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
