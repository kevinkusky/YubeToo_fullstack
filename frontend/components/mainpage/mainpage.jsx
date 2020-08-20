import React from 'react';

import { SPLASH, ABOUT, LAUTH } from '../../util/route_utils';

import TopNav from '../navs/topnav';
import ActiveComponent from './active_component';
import SideBar from '../sidebar/sidebar_container';

class MainPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            sidebarSize: true,
            active: 'Home'
        };
        this.findActive = this.findActive.bind(this);
        // this.handleSidebarToggle = this.handleSidebarToggle.bind(this);
    }

    // handleSidebarToggle(){
    //     const newState = !(this.state.sidebarSize);
    //     this.setState({ sidebarSize: newState });
    // }



    findActive() {
        let currentLocation = window.location.hash.toString().slice(1);

        switch (currentLocation) {
            case ({ SPLASH }):
                this.setState({active: 'Home'});
                break;
            case ({ ABOUT }):
                this.setState({ active: 'About' });
                break;
            default:
                this.setState({ active: 'Home' });
                break;
        }
    }

    render(){
        return(
            <div>
                <TopNav 
                    // sidebarToggle={this.handleSidebarToggle}
                />
                <div className='main-page'>
                    <div className='side-bar'>
                        <SideBar
                            activePage={this.state.active} 
                            coverage={this.state.sidebarSize}
                        />
                    </div>
                    <div className='active-component'>
                        <ActiveComponent
                            // onChange={this.findActive}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;