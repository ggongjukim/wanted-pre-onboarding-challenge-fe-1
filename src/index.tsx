import React from 'react';
import CreateDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import reset from 'styled-reset';
import store from 'src/store';
import { basicTheme } from './theme';
import App from './App';

const queryClient = new QueryClient();

const GlobalStyles = createGlobalStyle`
  ${reset}


  html, body{
    height:100vh;
  }
  body {
  background: #FAF7F0;
  font-family: 'Noto Sans', 'Noto Sans KR';
  }
  a{
    text-decoration:none;
    color:#3c3a3a;
  }
  div{
    box-sizing:border-box;
  }

  #root {
    height: 100%;
  }

`;

const root = CreateDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ThemeProvider theme={basicTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>,
);
