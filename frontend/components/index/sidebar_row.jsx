import React from 'react';

class SidebarRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: this.props.selected
        };


    }

    // moveTrue(){
    //     if selected{
    //         this.setState(selected: '')
    //     }
    // }
    render(){
        const klassName = () => {
            if (selected) { return 'selected'; }
            else { return ''; }
        };
        const Icon = this.props.Icon;

        return (
            <div 
                className={`sidebar-row ${klassName}`}
            >
                <Icon className='sidebar-row-icon' />
                <h2 className='sidebar-row-title'>{this.props.title}</h2>
            </div>
        )
    }
}

export default SidebarRow;