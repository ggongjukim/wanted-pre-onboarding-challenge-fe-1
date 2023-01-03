import React from 'react';
import CreateDOM from 'react-dom/client';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import reset from 'styled-reset';
import { basicTheme } from './theme';
import App from './App';

const queryClient = new QueryClient();

const GlobalStyles = createGlobalStyle`
  ${reset}


  html, body{
    height:100vh;
  }
  body {
  background: #9f9f9f;
  font-family: 'Noto Sans', 'Noto Sans KR';

  /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif; */
}
  a{
    text-decoration:none;
    color:#000;
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
    <ThemeProvider theme={basicTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </QueryClientProvider>,
);
