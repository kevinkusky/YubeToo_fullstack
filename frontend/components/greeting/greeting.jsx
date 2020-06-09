import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout }) =>{
    const sessionLinks = ()=> (
        <nav className='nav-right'>
            <ul>
                <li>
                    <Link to='/login'>
                        <button>Log In</button>
                    </Link>
                </li>
                <li>
                    <Link to='/signup'>
                        <button>Sign Up</button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
    const greeting = ()=> (
        <hgroup className='header-display'>
            <h2>{currentUser.email_address[0].toUpperCase()}</h2>
            <button className='header-button' onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? greeting() : sessionLinks();
};

export default Greeting;