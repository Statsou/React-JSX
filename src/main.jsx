import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme/default';
import App from './components/app/App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={defaultTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
