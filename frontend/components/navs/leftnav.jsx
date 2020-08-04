import React from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";
import Triangle from "@material-ui/icons/PlayArrow";

const LeftNav = () => {
    return (
      <div className='nav-left'>
          <MenuIcon />
          <Link to="/" className="header-link">
              <div className='header-link'>
                <Triangle className='logo' />
                <h3 className="site-name">YubeToo</h3>
              </div>
          </Link>
      </div>
    )
};

export default LeftNav;