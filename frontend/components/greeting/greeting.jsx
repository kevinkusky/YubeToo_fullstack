import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) =>{
    const sessionLinks = ()=> (
        <nav className='login-signup'>
            <Link to='/login'>Log In</Link>
            &nbsp;or&nbsp;
            <Link to='/signup'>Sign up!</Link>
        </nav>
    );
    const greeting = ()=> (
        <hgroup className='header-display'>
            <h2>{currentUser.username[0].toUpperCase()}</h2>
            <button className='header-button' onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? greeting() : sessionLinks();
};

export default Greeting;