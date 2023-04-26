import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/base/common.scss';
import App from './App';

import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback='loading'>
      <App />
    </Suspense>
  </React.StrictMode>
);
