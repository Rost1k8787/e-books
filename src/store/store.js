import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import cardReducer from './reducer';

const rootReducer = combineReducers({
  cards: cardReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
