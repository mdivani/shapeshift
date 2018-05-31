import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import coinsReducer from '../reducers/coinsReducer';
import limitsReducer from '../reducers/limitsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
      combineReducers({
        coins: coinsReducer,
        limits: limitsReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
    );
  
    return store;
  };