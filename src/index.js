import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-esp2lfuxflfjznl3.us.auth0.com"
      clientId="V6LNB3a0xHHMaQsoH6NaHsTxYwIaERMd"
      redirectUri={window.location.origin}
    >
              <App />
      <BrowserRouter>
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);


reportWebVitals();
