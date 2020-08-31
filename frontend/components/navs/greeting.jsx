import React from 'react';

import {NEWVID} from '../../util/route_utils';

import VideoIcon from '@material-ui/icons/VideoCall';
import UserIcon from '@material-ui/icons/AccountCircle';

import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
      <nav className="nav-right">
        <ul>
                <div className='session-button-container'>
            <Link className='session-link' to="/signup">
              <button className="session-button"><UserIcon/>Sign Up</button>
            </Link>
          </div>
        </ul>
      </nav>
    );

    const userNav = () => (
        <hgroup className="header-display">
            <div className='right-nav'>
                <Link to={NEWVID}>
                    <VideoIcon className='video-icon'/>
                </Link>
                <div className="drop-down">
                    <div className="circle-letter">
                    {currentUser.username[0].toUpperCase()}
                    </div>
                    <div className="sub-list">
                        <ul>
                            <li>
                                <button className="drop-button" onClick={logout}>
                                Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
      </hgroup>
    );

    return currentUser ? userNav() : sessionLinks();
};

export default Greeting;