import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
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

    const greeting = () => (
      <hgroup className="header-display">
        <ul className="drop-down">
          <li>
            <div className="circle-letter">
              {currentUser.email_address[0].toUpperCase()}
            </div>
            <div className="sub-list">
                <li>
                    <Link to="/videos/new">
                    <button className="drop-button">Create New Video</button>
                    </Link>
                </li>
                <li>
                    <button className="drop-button" onClick={logout}>
                    Log Out
                    </button>
                </li>
            </div>
          </li>
        </ul>
      </hgroup>
    );

    return currentUser ? greeting() : sessionLinks();
};

export default Greeting;