import React from 'react';

import Prev from "@material-ui/icons/ArrowBackIosOutlined";

class ConfrimUpload extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="confirm-step">
          <form onSubmit={this.props.handleSubmit}>
              <div className='all-details'>
                <div className="uploaded-items">
                    <div className="confirm-style">
                        <span className='field-header'>Video File:</span>
                        <span className='field-result'>{this.props.videoMessage}</span>
                    </div>
                    <div className="confirm-style">
                        <span className='field-header'>Titlecard File:</span>
                        <span className='field-result'>{this.props.picMessage}</span>
                    </div>
                </div>
                <div className="upload-details">
                    <div className="confirm-style">
                        <span className='field-header'>Video Title:</span>
                        <span className='field-result'>{this.props.title}</span>
                    </div>
                    <div className="confirm-style">
                        <span className='field-header'>Video Discription:</span>
                        <span className='field-result'>{this.props.description}</span>
                    </div>
                </div>
              </div>
                <div className="step-map">
                    <div className="map-past-step">1</div>
                        <div className="reached"></div>
                    <div className="map-past-step">2</div>
                        <div className="reached"></div>
                    <div className="map-active-step">3</div>
                </div>
                <div className="step-buttons">
                <button className="prev-step" onClick={this.props.prevStep}>
                    <Prev className="prev-icon" />
                    Prev Step
                </button>
                <input className="video-button" type="submit" value="Submit" />
                </div>
          </form>
            </div>
        );
    }
}

export default ConfrimUpload;