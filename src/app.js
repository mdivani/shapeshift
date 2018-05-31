import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import HomePage from './layout/HomePage';
import {startSetCoins} from './actions/coins';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <HomePage />
    </Provider>
)

store.dispatch(startSetCoins());

ReactDOM.render(jsx, document.getElementById('root'));