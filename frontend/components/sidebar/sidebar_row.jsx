import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SPLASH, ABOUT, DUMMY } from '../../util/route_utils';

class FullSidebarRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        // let currLocation = window.location.hash.toString().slice(1);
        const Icon = this.props.Icon;
        const barPath = () => (
            this.props.pathName ? this.props.pathName : SPLASH
        );
        // const selectedClassName = () => (
        //     this.props.pathName === currLocation ? 'selected' : ''
        // );


        return (
            <div>
                <NavLink
                    exact
                    activeClassName='selected' 
                    className='sidebar-row row-link' 
                    to={barPath}
                >
                    <div className='sidebar-row'>
                        <Icon className='sidebar-row-icon' />
                        <h2 className='sidebar-row-title'>{this.props.title}</h2>
                    </div>
                </NavLink>
            </div>
        )
    }
}

export default FullSidebarRow;