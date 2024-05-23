import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-uuelf6xmfnzounfs.us.auth0.com"
      clientId="YEM84E0Thxu98P7eaQ6MjFMyaXtOEycy"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
       <App />
    </Auth0Provider>
  </React.StrictMode>,
)
