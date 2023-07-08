import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './app/store';  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain="dev-1q3kq4s873f38ckz.us.auth0.com"
  clientId="fHQMdmfoOifOqipbMxz3LVF1OEqsHAAl"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
<Provider store={store}>
    <App />
    </Provider>
</Auth0Provider>,
);


