import React from 'react';

import Next from "@material-ui/icons/ArrowForwardIosOutlined";
import Prev from "@material-ui/icons/ArrowBackIosOutlined";

class DetailsUpload extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
          <div className="details-step">
            <div className="video-title">
              <input
                type="text"
                value={this.props.title}
                onChange={this.props.update("title")}
                required=" "
              />
              <label className="upload-labels">Title</label>
            </div>
            <div className="video-description">
              <input
                type="text"
                value={this.props.description}
                onChange={this.props.update("description")}
              />
              <label className="upload-labels">Description</label>
            </div>
            <div className="step-map">
              <div className="map-past-step">1</div>
              <hr className="reached" />
              <div className="map-active-step">2</div>
              <hr className="not-reached" />
              <div className="map-inactive-step">3</div>
            </div>
            <div className="step-buttons">
              <button className="prev-step" onClick={this.props.prevStep}>
                <Prev className="prev-icon" />
                Prev Step
              </button>
              <button className="next-step" onClick={this.props.nextStep}>
                Next Step
                <Next className="next-icon" />
              </button>
            </div>
          </div>
        );
    }
}

export default DetailsUpload;