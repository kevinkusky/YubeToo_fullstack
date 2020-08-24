import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SPLASH, ABOUT, DUMMY } from '../../util/route_utils';

class FullSidebarRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const Icon = this.props.Icon;
        const coverClass = this.props.coverClass;
        const barPath = () => (
            this.props.pathName ? this.props.pathName : SPLASH
        );

        return (
            <div>
                <NavLink
                    exact
                    activeClassName='selected'
                    className={`${coverClass} row-link`} 
                    to={barPath}
                >
                    <div className={this.props.coverClass}>
                        <Icon className='sidebar-row-icon' />
                        <h2 className='sidebar-row-title'>{this.props.title}</h2>
                    </div>
                </NavLink>
            </div>
        )
    }
}

export default FullSidebarRow;