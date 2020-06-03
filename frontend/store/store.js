import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root';


const configureStore = (state = {}) => (
    createStore(RootReducer, state, applyMiddleware(thunk))
);

export default configureStore;
