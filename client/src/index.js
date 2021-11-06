import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';
import { Provider } from 'react-redux';
import { AuthProvider } from 'contexts/auth-context';
import { UIProvider } from 'contexts/UI-context/index.js';
import 'normalize.css';
import { GlobalStyle } from './GlobalStyle.js';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <UIProvider>
          <GlobalStyle />
          <App />
        </UIProvider>
      </AuthProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
