import React from 'react';

import { SPLASH, ABOUT, LAUTH } from '../../util/route_utils';

import TopNav from '../navs/topnav';
import ActiveComponent from './active_component';
import SideBar from '../sidebar/sidebar_container';

class MainPage extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div>
                <TopNav 
                />
                <div className='main-page'>
                    <div className='side-bar'>
                        <SideBar />
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