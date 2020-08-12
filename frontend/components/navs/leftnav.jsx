import React from 'react';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Triangle from "@material-ui/icons/PlayArrow";

class LeftNav extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            barSize: true
        };

        this.sidebarToggle = this.sidebarToggle.bind(this);
    }

    sidebarToggle() {
        const newState = !(this.state.barSize);
        this.setState({
            barSize: newState
        });
    }

    render(){
        return (
          <div className='nav-left'>
            <MenuIcon className='sidebar-toggle' onClick={this.sidebarToggle} />
            <Link to="/" className="header-link">
                <div className='header-link'>
                <Triangle className='logo' />
                <h3 className="site-name">YubeToo</h3>
                </div>
            </Link>
          </div>
        )
    }
}

export default LeftNav;