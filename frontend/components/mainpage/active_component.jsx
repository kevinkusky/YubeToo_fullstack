import React from 'react';

import IndexContainer from '../index/index_container';
import About from '../about/about';

class ActiveComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const komponent = this.props.display;

        switch(komponent){
            case 'Home':
                return(<IndexContainer />);
            case 'About':
                return(<About />);
            default:
                return(<IndexContainer />);
        }
    }
}

export default ActiveComponent;