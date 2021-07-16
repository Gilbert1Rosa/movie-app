import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { movieReducer } from './Reducer';

const movieStore = createStore(movieReducer, applyMiddleware(thunk));

export default movieStore;