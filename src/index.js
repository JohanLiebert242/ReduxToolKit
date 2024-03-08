import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import store from './store';
import {Provider} from 'react-redux';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);