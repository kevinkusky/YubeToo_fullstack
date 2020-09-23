import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/root';

const configureStore = (state = {}) => (
    createStore(RootReducer, state, applyMiddleware(thunk, logger))
);

export default configureStore;