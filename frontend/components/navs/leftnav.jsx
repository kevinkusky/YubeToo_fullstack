import React from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from "@material-ui/icons/Menu";

export default LeftNav = () => {
    return (
      <div className='header-left'>
          <MenuIcon />
          <Link to="/" className="header-link">
            <h3 className="logo">{"▷"}</h3>
            <h3 className="site-name">YubeToo</h3>
          </Link>
      </div>
    );
}