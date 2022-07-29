import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './src/pages/';
import { ThemeProvider } from 'styled-components'
import GlobalFont from "./src/assets/fonts"
import GlobalStyle from './src/styles/global-style';
import theme from './src/styles/theme';

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <GlobalFont/>
            <GlobalStyle/>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.querySelector('#root')
);