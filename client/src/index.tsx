import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'normalize.css';

import store from '@/store';
import { AuthProvider } from '@/contexts/auth-context';
import { UIProvider } from '@/contexts/UI-context';
import { GlobalStyle } from '@/GlobalStyle';
import App from '@/App';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <UIProvider>
          <GlobalStyle />
          <App />
        </UIProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
