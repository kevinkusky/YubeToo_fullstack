import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from '../reducers/root';

const configureStore = (state = {}) => (
    createStore(
        RootReducer, 
        state,
        composeWithDevTools(applyMiddleware(thunk,logger))
    )
);

export default configureStore;