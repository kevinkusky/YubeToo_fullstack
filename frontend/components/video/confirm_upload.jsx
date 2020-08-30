import React from 'react';

import Prev from "@material-ui/icons/ArrowBackIosOutlined";

class ConfrimUpload extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <form onSubmit={this.props.handleSubmit} className='confirm-step'>
                <div className='uploaded-items'>
                    <span></span>
                    <span></span>
                </div>
                <div className='upload-details'>
                    <span></span>
                    <span></span>
                </div>
                <div className='step-buttons'>
                    <button className='prev-step' onClick={this.props.prevStep}>
                        <Prev className='prev-icon'/>
                        Prev Step
                    </button>
                    <input className='video-button' type="submit" value='Submit'/>
                </div>
            </form>
        )
    }
}