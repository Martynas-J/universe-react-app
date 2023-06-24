import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ToastContainer
        hideProgressBar={true}
        theme="dark"
        limit={3}
        autoClose={1000}
        transition={Flip}
      />
      <App />
    </Router >
  </React.StrictMode>
);

