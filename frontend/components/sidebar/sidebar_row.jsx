import React from 'react';

class FullSidebarRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: this.props.selected
        };

        // this.moveTrue = this.moveTrue.bind(this);
    }

    // moveTrue(){
    //     if selected{
    //         this.setState(selected: '')
    //     }
    // }
    
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