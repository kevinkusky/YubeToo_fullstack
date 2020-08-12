import React from 'react';
import TopNav from '../navs/topnav';
import IndexContainer from '../index/index_container';
import SideBar from '../sidebar/sidebar';

class MainPage extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            sidebarSize: true,
            // component: IndexContainer
        };

        this.handleSidebarToggle = this.handleSidebarToggle.bind(this);
    }

    handleSidebarClick(komponent){
        this.setState({
            component: komponent
        });
    }

    handleSidebarToggle(){
        const newState = !(this.state.sidebarSize);
        this.setState({
            sidebarSize: newState
        });
    }

    render(){
        return(
            <div>
                <TopNav sidebarToggle={this.handleSidebarToggle}/>
                <div className='index-page'>
                    <div className='side-bar'>
                        <SideBar coverage={this.state.sidebarSize}/>
                    </div>
                    <div className='videos-index'>
                        <IndexContainer/>
                    {/* <ActiveMainComponent /> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;
