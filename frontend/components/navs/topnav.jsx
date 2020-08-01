import React from 'react';
import { connect } from 'react-redux';
import GreetingContainer from './greeting_container';
import LeftNav from './leftnav';
import SearchBar from './searchbar';

 const TopNav = () =>{
    return(
        <div className='header'>
            <LeftNav />
            <SearchBar />
            <GreetingContainer />
        </div>
    );
};

export default connect(null)(TopNav);