import React from 'react';

import { SPLASH, ABOUT, LAUTH } from '../../util/route_utils';

import TopNav from '../navs/topnav';
import ActiveComponent from './active_component';
import SideBar from '../sidebar/sidebar_container';

class MainPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            sidebarSize: true
        };

        this.handleSidebarToggle = this.handleSidebarToggle.bind(this);
    }

    handleSidebarToggle() {
        console.log('I have been clicked');
        const newState = !(this.state.sidebarSize);
        this.setState({ sidebarSize: newState });
    }

    render(){
        return(
            <div>
                <TopNav handleSidebarToggle={this.handleSidebarToggle}/>
                <div className='main-page'>
                    <div className='side-bar'>
                        <SideBar sidebarSize={this.state.sidebarSize}/>
                    </div>
                    <div className='active-component'>
                        <ActiveComponent />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;