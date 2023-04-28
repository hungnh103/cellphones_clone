import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/base/common.scss';
import App from './App';

import './i18n'

import store from 'store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback='loading'>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
