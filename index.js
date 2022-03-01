import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { AppProvider } from './store';
import App from './src/scenes/App/App';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.scss';

const MyApp = (
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </StrictMode>
);

const target = document.querySelector('#root');

// React 18
// ReactDOM.createRoot(target).render(MyApp);

// React 17
ReactDOM.render(MyApp, target);