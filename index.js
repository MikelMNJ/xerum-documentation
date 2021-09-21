import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './src/scenes/App/App';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.scss';

const MyApp = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const target = document.querySelector('#root');

ReactDOM.createRoot(target).render(MyApp);