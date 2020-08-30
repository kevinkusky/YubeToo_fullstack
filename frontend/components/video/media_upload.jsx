import React from 'react';
import Dropzone from 'react-dropzone';

import VideoDrop from "@material-ui/icons/PublishOutlined";
import PicDrop from "@material-ui/icons/ImageOutlined";
import Next from '@material-ui/icons/ArrowForwardIosOutlined';

class MediaUpload extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="media-page">
        <div className="video-upload">
          <Dropzone onDrop={this.props.handleVideoDrop}>
            {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "drop-zone" })}>
                <input {...getInputProps()} />
                <div className="dropzone-target">
                  <VideoDrop className="drop-video" />
                </div>
                <span className="dropzone-message">{this.props.videoMessage}</span>
              </div>
            )}
          </Dropzone>
        </div>
        <div className="pic-upload">
            <Dropzone onDrop={this.props.handlePicDrop}>
            {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "drop-zone" })}>
                <input {...getInputProps()} />
                <div className="dropzone-target">
                    <PicDrop className="drop-image" />
                </div>
                <span className="dropzone-message">{this.props.picMessage}</span>
                </div>
            )}
            </Dropzone>
        </div>
        <div className='step-map'>
            <div className='map-active-step'>1</div>
            <hr className='not-reached'/>
            <div className='map-inactive-step'>2</div>
            <hr className='not-reached'/>
            <div className='map-inactive-step'>3</div>
        </div>
        <div className="step-buttons">
          <div></div>
          <button className="next-step" onClick={this.props.nextStep}>
            Next Step
            <Next className='next-icon'/>
          </button>
        </div>
      </div>
    );
  }
};

export default MediaUpload;