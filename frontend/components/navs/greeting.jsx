import React from 'react';
import { Link } from 'react-router-dom';

import CurrentUserIcon from '../session/currentuser_icon';

import {NEWVID, SUPAUTH} from '../../util/route_utils';

import VideoIcon from '@material-ui/icons/VideoCall';
import UserIcon from '@material-ui/icons/AccountCircle';
import SignoutIcon from '@material-ui/icons/ExitToAppOutlined';


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
            <CurrentUserIcon username={currentUser.username} />
            <div className="sub-list">
              <div className="sublist-header">
                <CurrentUserIcon addClass='drop-header-icon' username={currentUser.username} />
                <div className="currentuser-info">
                  <div className="detail-item">{currentUser.username}</div>
                  <div className="detail-item">{currentUser.email}</div>
                </div>
              </div>
              <hr />
              <div className="signout-button" onClick={logout}>
                <SignoutIcon className="signout-icon" />
                <span>Sign Out</span>
              </div>
            </div>
          </div>
        </div>
      </hgroup>
    );

    return currentUser ? userNav() : sessionLinks();
};

export default Greeting;