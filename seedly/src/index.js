import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { ThemeProvider } from "@chakra-ui/core";

import App from './components/App';
import reducers from './reducers/rootReducer'

let initial_posts = [
        {
            title: "Any advice for a newbie trying to plan for retirement?",
            tags: ["Retirement","Investments","FIRE Movement"],
            user_id: "Mickey J",
            user_pic: "https://bit.ly/dan-abramov",
            last_update: "1585313567",
            user_rank: "Level 4 Wizard",
            answers: 23,
            likes: 5,
            description: "Anyone has got excel template to share how you plan your investment portfolio towards your retirement? Thanks!"
        },
        {
            title: "How to best get Miles",
            tags: ["Retirement","Investments","FIRE Movement"],
            user_id: "Atlantic Booze",
            user_pic: null,
            last_update: "1585303567",
            user_rank: "Level 4 Wizard",
            answers: 43,
            likes: 5,
            description: "Anyone has got excel template to share how you plan your investment portfolio towards your retirement? Thanks!"
        }
        ,
        {
            title: "Help navigating S&P 500 taxation laws",
            tags: ["S&P 500","Investments","ETF","Income Tax"],
            user_id: "Gemma Chan",
            user_pic: null,
            last_update: "1585303567",
            user_rank: "Level 22 Wizard",
            answers: 43,
            likes: 5,
            description: "I'm interested in investing in the SPDR S&P 500 ETF. How would the US tax me for this?"
        },
        {
            title: "Saxo Markets vs. FSMOne for ETF Investing?",
            tags: ["Stocks Discussion","Investments","Online Brokerages","Brokerages","ETF","SAXO Markets"],
            user_id: "Zachary Teo",
            user_pic: null,
            last_update: "1585313100",
            user_rank: "Level 22 Wizard",
            answers: 43,
            likes: 5,
            description: "I'm interested in investing in the SPDR S&P 500 ETF. How would the US tax me for this?"
        }
        ,
        {
            title: "Saxo Markets vs. FSMOne for ETF Investing?",
            tags: ["Investments"],
            user_id: "Ninja",
            user_pic: null,
            last_update: "1585303567",
            user_rank: "Level 22 Wizard",
            answers: 43,
            likes: 5,
            description: "I'm interested in investing in the SPDR S&P 500 ETF. How would the US tax me for this?"
        }
    ]

const initialState = {
    posts: initial_posts,
    selected_posts: initial_posts
};

ReactDOM.render(
    <Provider store = {createStore(reducers,initialState)}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>,
  document.querySelector('#root')
);