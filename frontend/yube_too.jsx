import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';



document.addEventListener("DOMContentLoaded", () => {
    let preState = {};
    if(window.currentUser){
        preState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id },
            // for cookies
        };
    }
    const store = configureStore(preState);
    const root = document.getElementById("root");
    window.getState = store.getState;
    
    ReactDOM.render(<Root store={store} />, root);
});