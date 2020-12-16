import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    let preState = {};

    if(window.currentUser){
        preState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUser: window.currentUser },
            // for cookies
        };
    }

    store = configureStore(preState);
    const root = document.getElementById("root");

    window.getState = store.getState();
    
    ReactDOM.render(<Root store={store} />, root);
});