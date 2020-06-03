import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
<<<<<<< HEAD
=======
import configureStore from './store/store';
>>>>>>> auth

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");
<<<<<<< HEAD
    ReactDOM.render(<Root />, root);
=======

    ReactDOM.render(<Root store={store}/>, root);
>>>>>>> auth
});