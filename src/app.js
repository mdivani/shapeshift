import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import HomePage from './layout/HomePage';
import Loading from './components/Loading';
import {startSetCoins} from './actions/coins';

const store = configureStore();
let rendered = false;
const jsx = (
    <Provider store={store}>
        <HomePage />
    </Provider>
);

ReactDOM.render(<Loading />, document.getElementById('root'));

store.dispatch(startSetCoins());

store.subscribe(() => {
    if(!rendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        rendered = true;
    }
});
