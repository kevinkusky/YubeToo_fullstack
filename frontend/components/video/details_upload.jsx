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
              <div className='details-field'>
                <div className="input-container">
                <input
                    type="textarea"
                    value={this.props.title}
                    onChange={this.props.update("title")}
                    required=" "
                />
                <label className="input-labels title">Title</label>
                </div>
                <div className="description">
                    <textarea 
                        required=" "
                        value={this.props.description}
                        onChange={this.props.update('description')}
                    >
                    </textarea>
                <label className="input-labels description-box">Description</label>
                </div>
              </div>
            <div className="step-map">
              <div className="map-past-step">1</div>
              <div className='reached'></div>
              <div className="map-active-step">2</div>
              <div className="not-reached"></div>
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