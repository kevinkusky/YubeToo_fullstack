import React from 'react';

import Prev from "@material-ui/icons/ArrowBackIosOutlined";

class ConfrimUpload extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <form onSubmit={this.props.handleSubmit} className="confirm-step">
            <div className="uploaded-items">
              <span>{this.props.videoMessage}</span>
              <span>{this.props.picMessage}</span>
            </div>
            <div className="upload-details">
              <span>{this.props.title}</span>
              <span>{this.props.description}</span>
            </div>
            <div className="step-map">
              <div className="map-past-step">1</div>
              <div className="reached"></div>
              <div className='map-past-step'>2</div>
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
        );
    }
}

export default ConfrimUpload;