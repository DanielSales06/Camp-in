import GlobalStyle from './styles/global';
import ReactDOM from 'react-dom/client'
import React from 'react'

import { Home } from './page/Home';

import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Home />
    </ThemeProvider>
  </React.StrictMode>,
)