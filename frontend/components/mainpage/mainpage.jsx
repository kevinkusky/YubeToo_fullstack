import React from 'react';

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

    componentDidUpdate() {
        this.findActive();
    }

    findActive() {
        const currentPage = () => {
            const currentLocation = window.location.hash.toString().slice(1);
            let activePage;

            switch (currentLocation) {
                case ({ SPLASH }):
                    activePage = 'Home';
                    break;
                case ({ ABOUT }):
                    activePage = 'About';
                    break;
                default:
                    activePage = this.state.active;
                    break;
            }
        };
        this.setState({active: activePage});
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
                            // onChange={}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;