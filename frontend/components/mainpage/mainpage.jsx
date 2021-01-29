import React from 'react';
import { connect } from 'react-redux';

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
        const newState = !(this.state.sidebarSize);
        this.setState({ sidebarSize: newState });
    }

    render(){
        const sideClass = this.state.sidebarSize ? 'full-side-bar' : 'closed-side-bar';
        const activeClass = this.state.sidebarSize ? 'active-component' : 'active-expand';

        return(
            <div>
                <TopNav handleSidebarToggle={this.handleSidebarToggle}/>
                <div className='main-page'>
                    <div className={sideClass}>
                        <SideBar sidebarSize={this.state.sidebarSize}/>
                    </div>
                    <div className={activeClass}>
                        <ActiveComponent />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null)(MainPage);