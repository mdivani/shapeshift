import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import coinsReducer from '../reducers/coinsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
      combineReducers({
        coins: coinsReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
    );
  
    return store;
  };