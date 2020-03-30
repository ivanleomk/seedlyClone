import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore,applyMiddleware   } from 'redux';

import { ThemeProvider } from "@chakra-ui/core";
import thunk from "redux-thunk";

import App from './components/App';
import reducers from './reducers/rootReducer'

ReactDOM.render(
    <Provider store = {createStore(reducers ,applyMiddleware(thunk))}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>,
  document.querySelector('#root')
);