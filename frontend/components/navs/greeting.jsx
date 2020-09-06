import React from 'react';

import {NEWVID, SUPAUTH} from '../../util/route_utils';

import VideoIcon from '@material-ui/icons/VideoCall';
import UserIcon from '@material-ui/icons/AccountCircle';
import SignoutIcon from '@material-ui/icons/ExitToAppOutlined';

import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

    const sessionLinks = () => (
      <nav className="nav-right">
        <ul>
            <div className='session-button-container'>
                <Link className='session-link' to={SUPAUTH}>
                    <button className="session-button"><UserIcon/>Sign Up</button>
                </Link>
            </div>
        </ul>
      </nav>
    );

    const userNav = () => (
      <hgroup className="header-display">
        <div className="right-nav">
          <Link to={NEWVID}>
            <VideoIcon className="video-icon" />
          </Link>
          <div className="drop-down">
            <div className="circle-letter">
              {currentUser.username[0].toUpperCase()}
            </div>
            <div className="sub-list">
              <div className="sublist-header">
                <UserIcon className="drop-header-icon" />
                <div className="currentuser-info">
                  <div className='detail-item'>{currentUser.username}</div>
                  <div className='detail-item'>{currentUser.email}</div>
                </div>
              </div>
              <hr/>
              <div className='signout-button' onClick={logout}>
                <SignoutIcon className='signout-icon'/>
                <span>Sign Out</span>
              </div>
              {/* <div className='signout-button' onClick={logout}>
                <SignoutIcon className='signout-icon'/>
                <span>Sign Out</span>
              </div> */}
            </div>
          </div>
        </div>
      </hgroup>
    );

    return currentUser ? userNav() : sessionLinks();
};

export default Greeting;