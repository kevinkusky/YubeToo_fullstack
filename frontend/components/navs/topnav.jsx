import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import GreetingContainer from './greeting_container';
import LeftNav from './leftnav';
import SearchBar from './searchbar';
import { LAUTH, SUPAUTH } from '../../util/route_utils';

class TopNav extends React.Component {
    // withRouter import allows to pick location and pathname from props

    constructor(props) {
        super(props);
    }

    navBar() {
        return(
            <div className='header'>
                <nav className='nav-bar'>
                    <LeftNav handleSidebarToggle={this.props.handleSidebarToggle}/>
                    <SearchBar />
                    <GreetingContainer />
                </nav>
            </div>
        )
    }
    
    noBar() {return(<div></div>)}

    render() {
        return (this.props.location.pathname === LAUTH ||
            this.props.location.pathname === SUPAUTH) ? this.noBar() : this.navBar()
    }
};

export default withRouter(connect(null)(TopNav));