import React from 'react';
import Dropzone from 'react-dropzone';

import VideoDrop from "@material-ui/icons/PublishOutlined";
import PicDrop from "@material-ui/icons/ImageOutlined";

class MediaUpload extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      const picUploaded = this.state.titlecardFile ? this.state.titlecardFile[0].name : 'No Preview Image Uploaded';
      const videoUploaded = this.state.videoFile ? this.state.videoFile[0].name : 'No Preview Image Uploaded';

    return (
      <div>
        <Dropzone onDrop={this.props.handleVideoDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "drop-zone" })}>
              <input {...getInputProps()} />
              <div className="dropzone-target">
                <VideoDrop />
              </div>
            </div>
          )}
        </Dropzone>
        <span className="dropzone-message">{videoUploaded}</span>
        <Dropzone onDrop={this.props.handlePicDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps({ className: "drop-zone" })}>
              <input {...getInputProps()} />
              <div className="dropzone-target">
                <PicDrop />
              </div>
            </div>
          )}
        </Dropzone>
        <span className="dropzone-message">{picUploaded}</span>
        <div className="step-buttons">
          <div></div>
          <button className="next-step" onClick={this.props.nextStep}>
            Next Step
          </button>
        </div>
      </div>
    );
  }
};

export default MediaUpload;