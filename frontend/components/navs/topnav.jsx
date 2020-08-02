import React from 'react';
import { connect } from 'react-redux';
import GreetingContainer from './greeting_container';
import LeftNav from './leftnav';
import SearchBar from './searchbar';

const TopNav = () =>{
    // turnary statement to check
    // this.props.location.pathname
    // create util consts for paths

    const navBar = () => (
        <div className='header'>
            <nav className='nav-bar'>
                <LeftNav />
                <SearchBar />
                <GreetingContainer />
            </nav>
        </div>
    );
    
    const noBar = () => (
        <div></div>
    )
    return navBar;
};

export default connect(null)(TopNav);