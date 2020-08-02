import React from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";

const LeftNav = () => {
    return (
      <div className='nav-left'>
          <MenuIcon />
          <Link to="/" className="header-link">
              <div className='header-link'>
                <h3 className="logo">{"▷"}</h3>
                <h3 className="site-name">YubeToo</h3>
              </div>
          </Link>
      </div>
    )
};

export default LeftNav;