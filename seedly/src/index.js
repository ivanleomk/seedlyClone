import React from 'react';
import ReactDOM from 'react-dom';


import { ThemeProvider } from "@chakra-ui/core";

import App from './components/App';


ReactDOM.render(
    <ThemeProvider><App /></ThemeProvider>,
  document.querySelector('#root')
);