import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import coinsReducer from '../reducers/coinsReducer';
import limitsReducer from '../reducers/limitsReducer';
import topCoinsReducer from '../reducers/topCoinsReducer';
import languageReducer from '../reducers/languageReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
      combineReducers({
        coins: coinsReducer,
        limits: limitsReducer,
        topCoins: topCoinsReducer,
        language: languageReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
    );
  
    return store;
  };