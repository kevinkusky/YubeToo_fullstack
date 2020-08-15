import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className='nav-right'>
            <ul>
                <li>
                    <Link to='/signup'><button>Sign Up</button></Link>
                </li>
            </ul>
        </nav>
    );

    const userNav = () => (
      <hgroup className="header-display">
        <div className="drop-down">
            <div className="circle-letter">
              {currentUser.email_address[0].toUpperCase()}
            </div>
            <div className="sub-list">
                <ul>
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
                </ul>
            </div>
        </div>
      </hgroup>
    );

    return currentUser ? userNav() : sessionLinks();
};

export default Greeting;