import {Link} from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';
import GreetingContainer from '../greeting/greeting_container';

 const TopNav = () =>{
    return(
        <header className='nav-bar'>
            <nav>
                <ul className='nav-left'>
                    <Link to='/' className='header-link'>
                        <li><h3 className='logo'>{"▷"}</h3></li>
                        <li><h3 className='site-name'>YubeToo</h3></li>
                    </Link>
                </ul>
                <GreetingContainer />
            </nav>
        </header>
    );
};

export default connect(null)(TopNav);