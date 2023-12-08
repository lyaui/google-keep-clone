import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from '@/store';
import { Provider } from 'react-redux';
import { AuthProvider } from '@/contexts/auth-context/index.jsx';
import { UIProvider } from '@/contexts/UI-context/index.jsx';
import 'normalize.css';
import { GlobalStyle } from '@/GlobalStyle.js';
import App from '@/App.jsx';

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
