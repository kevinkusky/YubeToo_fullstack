import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/root';
// import { persistStore } from 'redux-persist';


const configureStore = (state = {}) => (
    createStore(RootReducer, state, applyMiddleware(thunk, logger))
);



export default configureStore;
