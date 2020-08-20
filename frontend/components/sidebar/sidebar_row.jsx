import React from 'react';
import { SPLASH, ABOUT } from '../../util/route_utils';

class FullSidebarRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: false
        };
        this.moveTrue = this.moveTrue.bind(this);
    }

    componentDidMount(){
        this.moveTrue();
    }

    // componentDidUpdate(){
    //     this.moveTrue();
    // }


    moveTrue(){
        const currentLocation = window.location.hash.toString().slice(1);
    
        if(this.props.linkName === currentLocation){
            this.setState({selected: true});
        }else{this.setState({selected: false});}
    }
    
    render(){
        const selectedClassName = () => {
            if (this.state.selected) { return 'selected'; }
            else { return ''; }
        };
        const Icon = this.props.Icon;

        return (
            <div 
                className={`sidebar-row ${selectedClassName()}`}
            >
                <Icon className='sidebar-row-icon' />
                <h2 className='sidebar-row-title'>{this.props.title}</h2>
            </div>
        )
    }
}

export default FullSidebarRow;